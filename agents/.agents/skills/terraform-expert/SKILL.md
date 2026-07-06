---
name: terraform-expert
description: Expert-level Terraform guidance covering HCL conventions, state management, module design, provider patterns, testing, and production-grade infrastructure-as-code workflows.
---

# Terraform Expert

Act as a senior Terraform practitioner. Follow these principles, patterns, and conventions when working with Terraform configurations.

## General Principles

- **Idempotency first**: Every config should produce the same result when applied repeatedly. Avoid constructs that drift on re-apply.
- **Minimal blast radius**: Organize state and modules so changes affect the smallest feasible surface area.
- **Explicit over implicit**: Prefer explicit resource arguments over `depends_on` or implicit ordering hacks.
- **Favor readability**: Use locals to name magic values. Keep resource blocks under ~50 lines; extract into modules when they grow beyond that.

## Naming Conventions

| Element | Convention | Example |
|---------|-----------|---------|
| Resource name | `snake_case` / descriptive noun | `resource "aws_instance" "web_server"` |
| Module source dir | `kebab-case` | `./modules/s3-bucket` |
| Variable names | `snake_case` | `instance_type` |
| Output names | `snake_case` | `vpc_id` |
| File names | `snake_case.tf` | `variables.tf`, `outputs.tf`, `main.tf` |

## Module Design

Every module should follow a standard layout:

```
modules/my-module/
├── main.tf           # Primary resource definitions
├── variables.tf      # All input variables
├── outputs.tf        # All output values
├── versions.tf       # Required providers and Terraform version constraints
└── README.md         # Usage documentation with examples (use terraform-docs)
```

### Module Best Practices

1. **Cohesion**: A module should encapsulate one logical concept (e.g. one AWS service, one application tier).
2. **No hardcoded provider config**: Modules inherit the provider from root. Only define `required_providers` in `versions.tf`, never a `provider` block.
3. **Expose only what's needed**: Outputs should be minimal — only values consumed by callers.
4. **Use `optional()` for complex variables**: Prefer `optional()` with defaults in `object` types so callers don't need to specify every field.
5. **Version your modules**: Use semantic versioning. Pin module sources to a specific ref, tag, or version.

```hcl
# Example: well-structured module variable
variable "bucket_config" {
  type = object({
    name          = string
    force_destroy = optional(bool, false)
    versioning = optional(object({
      enabled = optional(bool, true)
    }), {})
    tags = optional(map(string), {})
  })
  description = "Configuration for the S3 bucket."
}
```

## Provider Versioning

- Pin major versions of providers in `required_providers` blocks.
- Use `~> X.Y` to allow patch-level upgrades automatically.
- For production, lock to a specific version and review upgrades manually.
- Always commit the `.terraform.lock.hcl` file.

```hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  required_version = ">= 1.5, < 2.0"
}
```

## State Management

- **Remote state is mandatory for teams**: Use S3 (with DynamoDB locking), Terraform Cloud, or Consul.
- **Do not edit state files manually** — use `terraform state` commands.
- **Use workspaces or separate directory structures** to isolate environments.
- **Always enable state locking** to prevent corruption from concurrent operations.

### When to use `terraform_remote_state`

Prefer passing outputs as data sources via `terraform_remote_state` only when modules are in separate state files and there's a clear dependency boundary. For tightly coupled resources within the same state, use module outputs directly or data sources against the actual infrastructure.

## Sensitive Data

- Mark any variable containing secrets, passwords, or keys as `sensitive = true`.
- Never hardcode secrets in `.tf` files. Use:
  - Environment variables via `TF_VAR_*`
  - Vault provider (e.g. `hashicorp/vault`, `aws secretsmanager`)
  - Encrypted variable files (e.g. `terraform.tfvars.enc`)
- Use `sensitive = true` on outputs that expose secret material.

## Testing & Validation

- Use `terraform validate` as a linting step in CI.
- Use `terraform fmt -recursive -check` to enforce style.
- For module testing, use the `terraform test` framework (available in Terraform 1.6+) or Terratest for integration tests.
- Use `precondition` and `postcondition` blocks to assert assumptions in production modules.

```hcl
resource "aws_instance" "web" {
  # ... config ...

  lifecycle {
    postcondition {
      condition     = self.public_ip != ""
      error_message = "Instance must have a public IP assigned."
    }
  }
}
```

## Common Patterns & Pitfalls

### Use `for_each` over `count` for lists of resources

- `for_each` preserves stable Terraform addresses when items are added or removed.
- `count` should only be used for simple conditional creation (`count = var.enabled ? 1 : 0`).

### Avoid `-target` in production

`terraform apply -target` is useful during development but should never be part of a CI/CD pipeline. It leads to incomplete state coverage and untracked dependencies.

### Lifecycle rules

Use `lifecycle` blocks deliberately:

```hcl
lifecycle {
  create_before_destroy = true  # For zero-downtime updates
  prevent_destroy       = true  # For critical infrastructure
  ignore_changes = [
    tags,                        # When external tooling manages tags
  ]
}
```

### Tagging strategy

- Always propagate a consistent set of tags (Environment, Project, ManagedBy, Owner) across all resources.
- Use a `default_tags` provider argument (AWS provider) or a local merged with resource-specific tags.

```hcl
provider "aws" {
  default_tags {
    tags = {
      Environment = var.environment
      ManagedBy   = "Terraform"
      Project     = var.project_name
    }
  }
}
```

## Terraform Registry & Provider Knowledge

When you need current information about a Terraform provider or module:

1. Use `get_latest_provider_version` / `get_latest_module_version` to check versions.
2. Use `search_providers` / `get_provider_details` to look up resource documentation.
3. Use `search_modules` / `get_module_details` for registry module docs.
4. When referencing a module from the Terraform Registry, always pin to a specific version.

## When to Advise Against Terraform

- Infrastructure that changes state faster than the apply cycle (sub-minute autoscaling, ephemeral resources).
- Configuration that depends on runtime application state that Terraform can't observe.
- Simple scripting tasks that would benefit from a config management tool (Ansible, Chef) instead.
