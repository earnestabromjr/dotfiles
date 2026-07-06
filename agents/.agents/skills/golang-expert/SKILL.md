---
name: golang-expert
description: Expert-level Go programming guidance covering project structure, concurrency, testing, tooling, modern idioms, and production-grade patterns for Go 1.22+.
---

# Go Expert

Act as a senior Go practitioner. Follow these principles, patterns, and conventions when working with Go code.

## General Principles

- **Idiomatic Go over cleverness**: Prefer simple, readable code. Favor `for range`, `errors.Is`/`As`, and standard library solutions before reaching for third-party dependencies.
- **Zero-value philosophy**: Design types so their zero value is usable (`sync.Mutex`, `bytes.Buffer`, `io.Writer`).
- **Accept interfaces, return structs**: Functions should accept interfaces (small ones: 1–3 methods) and return concrete types.
- **Composition over inheritance**: Use embedding (`struct` embedding, interface embedding) rather than class hierarchies.
- **Package-oriented design**: Small, focused packages with clear responsibilities. One package = one idea.
- **Handle errors explicitly**: Never ignore errors. Use `_` only when the spec guarantees no error (e.g., `Write` on `bytes.Buffer`).

## Project Layout

Follow the standard Go project layout for applications and libraries:

```
myproject/
├── cmd/                  # Main applications
│   └── server/
│       └── main.go       # Minimal: parse flags, initialize, run
├── internal/             # Private application code (not importable)
│   ├── api/              # HTTP/gRPC handlers
│   ├── service/          # Business logic
│   ├── repository/       # Data access
│   └── config/           # Configuration loading
├── pkg/                  # Public library code (optional, reusable)
│   └── mylib/
├── api/                  # API definitions (protobuf, OpenAPI specs)
├── migrations/           # Database migrations
├── scripts/              # Build/CI scripts
├── test/                 # External integration tests
├── .golangci.yml         # Linter configuration
├── go.mod
├── go.sum
├── Makefile              # Common targets: build, test, lint, generate
└── README.md
```

### Rules

- `cmd/` binaries are thin — they parse config, wire dependencies, and call into `internal/`. No business logic.
- `internal/` packages cannot be imported by external modules — use this for all application internals.
- `pkg/` is for code you intentionally expose to external consumers. Do not hide things here to avoid `internal/` restrictions.
- Avoid `src/`, `lib/`, or `common/` — Go conventions do not use them.

## Naming Conventions

| Element | Convention | Example |
|---------|-----------|---------|
| Package name | Single word, lowercase, no underscores | `http`, `httputil` |
| File name | `snake_case.go` | `user_service.go` |
| Exported identifier | PascalCase | `UserService` |
| Unexported identifier | camelCase | `userService` |
| Interface (1 method) | Method name + `er` | `Reader`, `Writer`, `Stringer` |
| Interface (multiple methods) | Suffix `er` or descriptive | `StorageBackend` |
| Acronyms | All caps or all lower | `HTTP`, `URL`, `http`, `url` |
| Receiver | 1–2 letters, type initial | `s *Service`, `r *Repo` |
| Constant | PascalCase (Go has no `ALL_CAPS`) | `MaxRetries`, `DefaultTimeout` |
| Test function | `TestXxx` (not `testXxx`) | `TestUserCreate` |
| Benchmark | `BenchmarkXxx` | `BenchmarkHash` |

## Error Handling

### Modern Error Patterns (Go 1.20+)

```go
// Wrap errors with context — use %w for unwrappable, %v for non-fatal details
if err != nil {
    return fmt.Errorf("fetch user %d: %w", id, err)
}

// Sentinel errors
var ErrNotFound = errors.New("user not found")

// Sentinel checking
if errors.Is(err, ErrNotFound) { ... }

// Custom error types
type ValidationError struct {
    Field string
    Err   error
}
func (e *ValidationError) Error() string { return fmt.Sprintf("%s: %v", e.Field, e.Err) }
func (e *ValidationError) Unwrap() error { return e.Err }

// Type checking
var ve *ValidationError
if errors.As(err, &ve) { ... }

// Go 1.20+ — errors.Join for combining errors
err = errors.Join(err1, err2)

// Go 1.21+ — slog for structured logging, not log
slog.Error("operation failed", "error", err, "user_id", id)
```

### When NOT to wrap
- Top-level `main()` — log and exit.
- `bufio.Write` on `bytes.Buffer` (guaranteed no error).
- `rand.Read` errors (never fails on Linux).
- `(*sync.Pool).Put`.

### Panic discipline
- Panics are for programmer errors (nil dereference, out of bounds), not for control flow.
- Use `panic` only in truly unrecoverable situations or during package init setup.
- Never use `recover()` to continue normal execution — only for server-wide recovery middleware.

## Concurrency

### Goroutine lifecycle

Always know when a goroutine exits. Leaked goroutines are a top production issue.

```go
// Good: goroutine with cancellation
ctx, cancel := context.WithCancel(context.Background())
defer cancel()

go func() {
    for {
        select {
        case <-ctx.Done():
            return
        case job := <-jobCh:
            process(job)
        }
    }
}()
```

### errgroup for bounded concurrency

Prefer `errgroup` (from `golang.org/x/sync`) over raw `sync.WaitGroup` for error-propagating concurrent work.

```go
g, ctx := errgroup.WithContext(ctx)
g.SetLimit(10) // control concurrency

for _, item := range items {
    item := item // Go <1.22 loop variable pinning (not needed in 1.22+)
    g.Go(func() error {
        return process(ctx, item)
    })
}

if err := g.Wait(); err != nil { ... }
```

### Channel best practices

- Use `chan struct{}` for signals (zero allocation).
- Sender closes; receiver never closes.
- Buffered channels for known throughput; unbuffered for synchronization.
- Avoid `reflect.Select` — model differently instead.
- Use `for range ch` to read until closed.

### sync.Map

Only use `sync.Map` when:
1. Concurrent writes to different keys, or
2. Reads significantly outnumber writes, or
3. You have proven contention on a `sync.RWMutex`.

Otherwise, `sync.RWMutex` is simpler and faster.

### Context rules

- `context.Context` is the first parameter in functions that need it.
- Never store context in a struct (exception: middleware/handler patterns where the context lives on the request).
- Always call `cancel()` when using `context.WithCancel`, `WithTimeout`, `WithDeadline` (usually via `defer cancel()`).
- Use `context.WithoutCancel` (Go 1.21+) when spawning background goroutines from a request scope.

## Testing

### Test structure

```go
// Table-driven tests
func TestParseDuration(t *testing.T) {
    t.Parallel() // when tests are independent

    tests := []struct {
        name     string
        input    string
        expected time.Duration
        wantErr  bool
    }{
        {name: "valid seconds", input: "30s", expected: 30 * time.Second},
        {name: "invalid", input: "xyz", wantErr: true},
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            got, err := ParseDuration(tt.input)
            if tt.wantErr {
                require.Error(t, err)
                return
            }
            require.NoError(t, err)
            assert.Equal(t, tt.expected, got)
        })
    }
}
```

### Test helpers

Use `testify` (`github.com/stretchr/testify`) for assertions — it is the de facto standard:
- `require.*` — halts test on failure (setup, critical checks).
- `assert.*` — continues test on failure (non-critical checks).
- `require.NoError` / `assert.NoError` are preferred over `if err != nil { t.Fatal(...) }`.

### Fuzzing (Go 1.18+)

```go
func FuzzParseDuration(f *testing.F) {
    f.Add("30s")
    f.Add("-1h")
    f.Fuzz(func(t *testing.T, input string) {
        _, err := ParseDuration(input)
        if err != nil {
            t.Skip() // expected failure
        }
    })
}
```

### Test doubles

- Use interfaces to mock at boundaries (repository, external API, clock).
- Avoid mocking framework obsession — hand-written stubs and fakes are often cleaner.
- Use `go.uber.org/mock` (or `gomock`) only when hand-written mocks become unwieldy.
- Use `testing/fstest` for filesystem test doubles.
- Use `net/http/httptest` for HTTP server/client tests.

### Test fixtures

- Keep test data in `testdata/` directory (Go tools ignore it).
- Use `io/fs` and `embed` to embed test fixtures.
- Use `testify/suite` sparingly — only when shared setup logic measurably reduces boilerplate.

## Modules & Dependencies

### go.mod hygiene

- Keep the `go` directive on the minimum Go version your module requires.
- Use `go mod tidy` before committing — it cleans the go.sum and removes unused deps.
- Use `go mod vendor` for reproducible builds in air-gapped/CI environments.

### Dependency management

- Prefer standard library over external packages.
- For common needs, prefer the widely-adopted ecosystem:
  - HTTP router: `net/http` (Go 1.22+ with new `ServeMux`) or `chi` for advanced routing.
  - SQL: `database/sql` + `sqlx` for convenience, or `jet`/`sqlc` for type-safe queries.
  - Logging: `log/slog` (Go 1.21+, standard library).
  - CLI: `urfave/cli` or `spf13/cobra`.
  - Config: `spf13/viper`.
  - Validation: `go-playground/validator`.
  - Migration: `golang-migrate/migrate` or `pressly/goose`.
  - Task runner (instead of Make): `mage` (Go-based Make alternative).

### Avoid

- `gin` and `echo` — Go 1.22 `net/http` has pattern-based routing. Use `chi` if you need middleware chaining.
- `gorilla/mux` — archived; use `chi` or new `net/http`.
- `pkg/errors` — archived; use `fmt.Errorf("%w")` and `errors.Is`/`As`.
- `jmoiron/sqlx` is fine, but `sqlc` is preferred for new projects requiring type-safe SQL.

## Modern Go Features (1.21–1.24)

### Go 1.21
- `log/slog` — structured logging in the standard library.
- `cmp.Or` / `cmp.Compare` — generic ordering helpers.
- `maps.Clone`, `maps.Copy`, `maps.Equal`, `slices.*` — generic collection utilities.
- `context.WithoutCancel` — derive a context that ignores parent cancellation.
- `min` / `max` builtins (also `clear`).

### Go 1.22
- Loop variable change — `for` loop variables no longer share a single instance per iteration (no more `item := item` pinning).
- Range over integers — `for i := range 10 { ... }`.
- Enhanced `net/http.ServeMux` — method-based routing (`GET /users/{id}`), path params with `r.PathValue("id")`.
- `math/rand/v2` — faster, cleaner API.

### Go 1.23
- Iterator support — `iter.Seq` and `iter.Seq2` types for custom range-over-func.
- Standard library iterators — `maps.Keys`, `maps.Values`, `slices.All`, `slices.Backward`, etc.
- `unique` package — canonicalization/hashing support.
- `time` package improvements.

### Go 1.24
- Generic type aliases.
- `crypto/ecdh` — elliptic curve Diffie-Hellman in stdlib.
- Improved `runtime` and GC performance.
- `testing/synctest` — testing concurrent code (experimental).

## HTTP Services (Go 1.22+)

```go
func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("GET /api/users/{id}", handleGetUser)
    mux.HandleFunc("POST /api/users", handleCreateUser)
    mux.HandleFunc("GET /health", handleHealth)

    srv := &http.Server{
        Addr:         ":8080",
        Handler:      middleware.Chain(mux, logging, recoverer, cors),
        ReadTimeout:  5 * time.Second,
        WriteTimeout: 10 * time.Second,
        IdleTimeout:  60 * time.Second,
    }

    // Graceful shutdown
    ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
    defer stop()

    go func() {
        slog.Info("listening", "addr", srv.Addr)
        if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
            slog.Error("server error", "error", err)
            os.Exit(1)
        }
    }()

    <-ctx.Done()
    slog.Info("shutting down")
    shutdownCtx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
    defer cancel()
    srv.Shutdown(shutdownCtx)
}
```

### Middleware pattern

```go
type Middleware func(http.Handler) http.Handler

func Chain(h http.Handler, middlewares ...Middleware) http.Handler {
    for i := len(middlewares) - 1; i >= 0; i-- {
        h = middlewares[i](h)
    }
    return h
}
```

## SQL / Database

- Use `database/sql` as base + `sqlx` for struct scanning, or `sqlc` for codegen from SQL.
- Always use `context` variants: `db.QueryContext(ctx, ...)`.
- Connection pooling is configured via `db.SetMaxOpenConns`, `db.SetMaxIdleConns`, `db.SetConnMaxLifetime`.
- Migrations in SQL files, not Go code. Use `golang-migrate/migrate` or `pressly/goose`.
- Use prepared statements for repeated queries.
- Avoid `SELECT *` — name columns explicitly.

### Repository pattern

```go
type UserRepository interface {
    GetByID(ctx context.Context, id uuid.UUID) (*User, error)
    Create(ctx context.Context, user *User) error
    List(ctx context.Context, offset, limit int) ([]User, error)
}

// Implement with sqlx
type userRepo struct {
    db *sqlx.DB
}

func (r *userRepo) GetByID(ctx context.Context, id uuid.UUID) (*User, error) {
    var u User
    err := r.db.GetContext(ctx, &u, "SELECT * FROM users WHERE id = $1", id)
    if errors.Is(err, sql.ErrNoRows) {
        return nil, fmt.Errorf("user %s: %w", id, ErrNotFound)
    }
    return &u, err
}
```

## JSON / Serialization

- Use `encoding/json` with struct tags.
- Use `json:"fieldname,omitempty"` for optional fields.
- Use `json:"-"` to skip fields (e.g., password hash in API responses).
- Use `json.Encoder` for streaming serialization; `json.Marshal` for small payloads.
- Prefer `json.Decoder` over `json.Unmarshal` for `http.Request.Body`.
- Use `json.RawMessage` for lazy or dynamic JSON parsing.
- For speed-sensitive paths, consider `github.com/goccy/go-json` or `github.com/segmentio/encoding/json`.

```go
type UserResponse struct {
    ID        uuid.UUID `json:"id"`
    Email     string    `json:"email"`
    CreatedAt time.Time `json:"created_at"`
    // Never expose in JSON responses
    PasswordHash string `json:"-"`
}
```

## Configuration

- Use `spf13/viper` for complex config or `envconfig` / `env` for simple env-based config.
- Prefer environment variables over config files in production (12-factor app).
- Validate config at startup, not lazily.

```go
type Config struct {
    Port      int           `env:"PORT" envDefault:"8080"`
    DBURL     string        `env:"DATABASE_URL,required"`
    Timeout   time.Duration `env:"REQUEST_TIMEOUT" envDefault:"30s"`
    LogLevel  string        `env:"LOG_LEVEL" envDefault:"info"`
}
```

## Build & Tooling

### Linting

Use `golangci-lint` with these essential linters:
- `errcheck` — detects unchecked errors.
- `gosec` — security checks.
- `govet` — correctness checks (always on).
- `staticcheck` — broad static analysis.
- `ineffassign` — detects dead assignments.
- `wrapcheck` — ensures errors are wrapped.

Recommended `.golangci.yml`:

```yaml
linters:
  enable:
    - errcheck
    - gosec
    - gosimple
    - govet
    - ineffassign
    - staticcheck
    - unused
    - wrapcheck
run:
  timeout: 5m
```

### Code generation

- `go generate` — standard codegen annotation.
- `stringer` — generate `String()` for enums (`go:generate stringer -type=Status`).
- `sqlc` — generate Go code from SQL queries.
- `protoc` + `protoc-gen-go` / `protoc-gen-go-grpc` — gRPC codegen.
- `oapi-codegen` — generate Go server/client from OpenAPI specs.
- `embed` (stdlib) — embed static files into binaries.

### Profiling

```go
import _ "net/http/pprof" // adds /debug/pprof/ routes

// Then:
// go tool pprof http://localhost:8080/debug/pprof/heap
// go tool trace http://localhost:8080/debug/pprof/trace
```

Use `benchstat` to compare benchmark results across changes.

## Common Patterns

### Functional options

```go
type ServerOption func(*Server)

func WithTimeout(t time.Duration) ServerOption {
    return func(s *Server) { s.timeout = t }
}
```

### Graceful shutdown

Always use `signal.NotifyContext` for clean service shutdown.

### OpenTelemetry integration

Use `go.opentelemetry.io/otel` for observability:
- `otel.SetTracerProvider(...)` — distributed tracing.
- `otel.SetMeterProvider(...)` — metrics.
- `otel.SetLoggerProvider(...)` — logs.
- Propagate context through services for trace correlation.

### Wire / dependency injection

For large projects, use `google/wire` for compile-time dependency injection. For small projects, manual construction in `main.go` is preferred.

## Common Pitfalls

1. **Slice/loop closures** — Fixed in Go 1.22 for `for` loops, but still present in `for range` on `map`, `chan` (1.22+ fixed `for` range, so this is now resolved).
2. **`defer` in loops** — defers don't run until function return; resources accumulate. Move loop body to a helper function.
3. **Unbounded goroutine creation** — always bound concurrency with `errgroup.SetLimit` or worker pools.
4. **`http.DefaultClient` timeouts** — it has no timeout by default. Always use a custom client with timeouts.
5. **Map iteration order** — random. Use `maps.Keys` sorted if stable iteration is needed.
6. **Interface nil vs typed nil** — `var r io.Reader = (*bytes.Buffer)(nil)` is not `== nil`. Be careful with return values.
7. **`recover` only works in deferred functions** — must be in the same goroutine.
8. **`time.After` leaks** — not GC'd until expiry; use `time.NewTimer` with `Stop` for long-lived loops.

## Go Proverbs (for reference)

- Don't communicate by sharing memory, share memory by communicating.
- Concurrency is not parallelism.
- Channels orchestrate; mutexes serialize.
- The bigger the interface, the weaker the abstraction.
- Make the zero value useful.
- `interface{}` says nothing.
- Gofmt's style is no one's favorite, yet gofmt is everyone's favorite.
- A little copying is better than a little dependency.
- Syscall must always be guarded with build tags.
- Cgo must always be guarded with build tags.
- Clear is better than clever.
- Reflection is never clear.
- Errors are values.
- Don't just check errors, handle them gracefully.
- Design the architecture, name the components, document the details.
- Documentation is for users.
- Package should have a single purpose.

## When to Reach for External Libraries

| Need | Recommendation |
|------|---------------|
| CLI framework | `spf13/cobra` |
| Advanced HTTP routing | `go-chi/chi` |
| Type-safe SQL | `sqlc.dev` / `sqlc` |
| Validation | `go-playground/validator` |
| Config loading | `spf13/viper` |
| Testing assertions | `stretchr/testify` |
| UUID generation | `google/uuid` |
| Task runner (in Go) | `mage` or `make` |
| gRPC | `google.golang.org/grpc` |
| Worker queues | Stdlib or `gocelery` / `asynq` |
| GraphQL | `99designs/gqlgen` |
| Object storage | `aws/aws-sdk-go-v2` (S3, etc.) |
| JWT | `golang-jwt/jwt/v5` |
| Rate limiting | Stdlib (`golang.org/x/time/rate`) |
| CSV | Stdlib (`encoding/csv`) |
| HTML templates | Stdlib (`html/template`) |
| Compression | Stdlib (`compress/gzip`) |

## Evaluation Checklist

Before marking a Go implementation as complete:

- [ ] `go vet ./...` passes with zero issues.
- [ ] `golangci-lint run` passes.
- [ ] `go test -race ./...` passes.
- [ ] All public API surface has documentation comments (`// Package ...`, `// Foo ...`).
- [ ] No leaked goroutines (check with `runtime.NumGoroutine` in integration tests).
- [ ] HTTP services set read/write/idle timeouts.
- [ ] Contexts are propagated and cancelled.
- [ ] Errors are wrapped with context.
- [ ] Configuration is validated at startup.
- [ ] No hardcoded secrets, URLs, or credentials.
