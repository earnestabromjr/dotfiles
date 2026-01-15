# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Overview
This is a personal Neovim configuration based on [LazyVim](https://github.com/LazyVim/LazyVim), a Neovim configuration distribution built on top of lazy.nvim. LazyVim provides sensible defaults and an extensive plugin ecosystem that can be extended through custom configurations.

## Architecture

### Configuration Structure
The configuration follows LazyVim's standard directory layout:

- **`init.lua`**: Entry point that bootstraps lazy.nvim, loads LazyVim core, and initializes custom plugin configurations (Oil file manager and stylelint LSP)
- **`lua/config/`**: Core configuration directory containing LazyVim overrides
  - `lazy.lua`: Plugin manager setup and LazyVim bootstrapping
  - `options.lua`: Vim options overrides (Python LSP settings, cursorline)
  - `keymaps.lua`: Custom keybindings (Oil file manager binding)
  - `autocmds.lua`: Custom autocommands (currently empty)
- **`lua/plugins/`**: Custom plugin specifications that extend or override LazyVim defaults
  - Each file returns a table of plugin specs that lazy.nvim processes
  - Plugins are automatically loaded from this directory
  - `example.lua` is disabled (returns empty table) but serves as documentation

### Plugin Management
This configuration uses [lazy.nvim](https://github.com/folke/lazy.nvim) for plugin management. The system works as follows:
- LazyVim core plugins are imported automatically via `{ "LazyVim/LazyVim", import = "lazyvim.plugins" }`
- Custom plugins in `lua/plugins/*.lua` are imported via `{ import = "plugins" }`
- Plugin specs can add new plugins, override LazyVim defaults, or disable plugins entirely
- The `lazy-lock.json` file locks plugin versions for reproducibility

### LazyVim Extras
LazyVim extras are pre-configured plugin bundles for specific languages or features. Enabled extras are tracked in `lazyvim.json` and include:
- **AI integrations**: Claude Code, Codeium, GitHub Copilot, Copilot Chat
- **Languages**: Python, TypeScript, Go, Elixir, Zig, Nix, JSON, YAML, Markdown, TOML
- **Formatters**: Prettier, Black, Biome
- **Linters**: ESLint
- **Editors**: Telescope, FZF, Harpoon2, Aerial, Inc-rename, Snacks picker
- **Coding**: nvim-cmp, mini-surround, Yanky
- **Utilities**: Chezmoi, dot files, mini-hipatterns, VSCode integration

### Custom Plugins
Key custom plugins configured in this setup:
- **Oil.nvim**: File manager accessible via `<leader>o` that provides a buffer-based directory editor
- **vim-tmux-navigator**: Seamless navigation between Neovim splits and tmux panes using `<C-h/j/k/l>`
- **Colorschemes**: Multiple themes installed (OneDark, Kanagawa, Catppuccin, Cyberdream, Solarized Osaka, Rose Pine, Tokyo Night)
- **LSP Servers**: Configured for Bash, C/C++, CSS, Docker, Go, HTML, JSON, Python (Pyright + Ruff), Rust, TypeScript, YAML
- **Stylelint LSP**: Manually configured in init.lua for CSS/SCSS/Less with auto-fix on save/format

### LSP Configuration
LSP servers are configured via `lua/plugins/lsp.lua` using the nvim-lspconfig plugin. The configuration:
- Declares servers in the `servers` table under `opts`
- LazyVim automatically installs servers via Mason when declared
- Custom server settings can be specified in each server's configuration
- Stylelint LSP is an exception, configured directly in init.lua using lspconfig

## Development Commands

### Testing Configuration
Test the configuration by launching Neovim:
```bash
nvim
```

### Plugin Management
Inside Neovim:
- `:Lazy` - Open lazy.nvim UI to manage plugins
- `:Lazy sync` - Update and install plugins
- `:Lazy clean` - Remove unused plugins
- `:Lazy check` - Check for plugin updates

### LSP Management
Inside Neovim:
- `:Mason` - Open Mason UI to manage LSP servers, formatters, and linters
- `:LspInfo` - Show information about active LSP clients
- `:checkhealth` - Run health checks for Neovim and plugins

### Formatting
- **StyLua**: Lua code formatting is configured in `stylua.toml` (2 spaces, 120 column width)
- Format Lua files: `stylua .` (must have stylua installed)

## Key Customizations

### Keymaps
- `<leader>o`: Open Oil file manager in floating window
- `<C-h/j/k/l>`: Navigate between Neovim/tmux splits (vim-tmux-navigator)

### Options
- Python LSP: Uses Pyright for language features and Ruff for linting
- Cursorline enabled globally
- LazyVim defaults are inherited unless explicitly overridden

### Active Colorscheme
Currently set to `kanagawa-wave` (configured in `lua/plugins/myplugins.lua`)

## File Modification Guidelines

### Adding New Plugins
Create or modify files in `lua/plugins/`:
1. Return a table with plugin specs following lazy.nvim format
2. Use LazyVim's plugin override pattern to modify existing plugins
3. Reference `lua/plugins/example.lua` for detailed examples

### Modifying LSP Servers
Edit `lua/plugins/lsp.lua`:
- Add server names to the `servers` table under `opts`
- Provide server-specific settings as needed
- Mason will automatically install the server

### Adding Keymaps
Edit `lua/config/keymaps.lua`:
- Use `vim.keymap.set()` for custom bindings
- LazyVim's default keymaps: https://www.lazyvim.org/keymaps

### Adding Options
Edit `lua/config/options.lua`:
- Set options using `vim.opt` or `vim.g`
- LazyVim's default options: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/options.lua

### Adding Autocommands
Edit `lua/config/autocmds.lua`:
- Use `vim.api.nvim_create_autocmd()` for custom autocommands
- LazyVim's default autocommands: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/autocmds.lua
