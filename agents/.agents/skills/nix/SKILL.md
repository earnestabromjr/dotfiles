---
name: nix
description: Expert in Nix configuration language, Nix package management, and running Nix in non-NixOS environments. Use when the user asks about .nix files, nix-shell, nix develop, flakes, home-manager, or package management outside NixOS.
---

# Nix Expert

Expert guidance on the Nix package manager and configuration language, with a focus on using Nix on non-NixOS systems (macOS, Ubuntu, Fedora, Arch, etc.).

## General Principles

- **Declarative configuration**: Define the desired state, not the steps to achieve it.
- **Reproducibility**: Nix derivations produce identical outputs given identical inputs.
- **Immutability**: Store paths are content-addressed; `/nix/store` paths never change.
- **Isolation**: Each derivation builds in an isolated environment with explicit inputs.
- **Flakes first**: Use `flake.nix` for reproducible, composable Nix projects.

## Nix Language Fundamentals

### Core Syntax

```nix
# Attribute set
{ name = "value"; version = "1.0"; }

# Function
{ pkgs, ... }: pkgs.stdenv.mkDerivation { ... }

# Let bindings
let
  version = "1.0";
  name = "myapp-${version}";
in
  { inherit name version; }

# With expression
with pkgs; [ curl jq git ]

# Conditionals
if condition then "yes" else "no"

# Recursion
rec {
  a = 1;
  b = a + 1;
}

# Inherit (shorthand for copying attributes)
{ inherit (pkgs) curl git; }
```

### Common Functions

```nix
# Built-in functions
builtins.toString 42          # "42"
builtins.attrNames { a = 1; } # [ "a" ]
builtins.map (x: x * 2) [ 1 2 3 ]  # [ 2 4 6 ]
builtins.filter (x: x > 2) [ 1 2 3 4 ]  # [ 3 4 ]
builtins.fetchTarball { url = "..."; sha256 = "..."; }
builtins.fromJSON (builtins.readFile ./config.json)

# Import from files
import ./default.nix
import <nixpkgs> { }
```

### String Operations

```nix
# Interpolation
"hello-${name}"

# Multiline
''
  first line
  second line
  variable: ${toString x}
''

# Indentation stripping (stripIndent)
builtins.readFile ./script.sh
lib.stripIndent ''
  line 1
  line 2
''
```

## Nixpkgs & Derivations

### Basic Derivation

```nix
{ pkgs ? import <nixpkgs> { } }:

pkgs.stdenv.mkDerivation {
  pname = "myapp";
  version = "1.0.0";
  src = ./.;
  
  nativeBuildInputs = [ pkgs.cmake ];
  buildInputs = [ pkgs.openssl ];
  
  buildPhase = ''
    cmake .
    make
  '';
  
  installPhase = ''
    make install PREFIX=$out
  '';
  
  meta = with pkgs.lib; {
    description = "My application";
    license = licenses.mit;
    maintainers = [ ];
    platforms = platforms.all;
  };
}
```

### Fetchers

```nix
# Fetch from GitHub
pkgs.fetchFromGitHub {
  owner = "owner";
  repo = "repo";
  rev = "v1.0.0";
  sha256 = "sha256-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
}

# Fetch from URL
pkgs.fetchurl {
  url = "https://example.com/archive.tar.gz";
  sha256 = "sha256-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
}

# Fetch from Git
pkgs.fetchgit {
  url = "https://github.com/owner/repo.git";
  rev = "v1.0.0";
  sha256 = "sha256-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
}

# Fetch NPM package
pkgs.fetchNpm {
  packageName = "my-package";
  version = "1.0.0";
  sha256 = "sha256-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
}
```

## Flakes (Recommended)

### Flake Structure

```nix
{
  description = "My Nix project";
  
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    flake-compat = {
      url = "github:edolstra/flake-compat";
      flake = false;
    };
  };
  
  outputs = { self, nixpkgs, flake-utils, flake-compat }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        packages.default = pkgs.stdenv.mkDerivation {
          pname = "myproject";
          version = "0.1.0";
          src = ./.;
          # ...
        };
        
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs
            python3
            git
          ];
          
          shellHook = ''
            echo "Entering dev shell"
            export MY_VAR="value"
          '';
        };
        
        apps.default = {
          type = "app";
          program = "${self.packages.${system}.default}/bin/myapp";
        };
      }
    );
}
```

### Flake Commands

```bash
# Enter development shell
nix develop

# Build default package
nix build

# Build specific package
nix build .#mypackage

# Run an app
nix run

# Update flake inputs
nix flake update

# Update specific input
nix flake lock --update-input nixpkgs

# Show flake metadata
nix flake metadata

# Check flake outputs
nix flake check

# Show flake info
nix flake show
```

## Non-NixOS Environments

### Installation

```bash
# Single-user installation (recommended for non-NixOS)
sh <(curl -L https://nixos.org/nix/install) --no-daemon

# Multi-user installation (requires systemd, not available on all non-NixOS)
sh <(curl -L https://nixos.org/nix/install)

# Verify installation
nix --version
```

### Configuration (~/.config/nix/nix.conf)

```conf
# Enable flakes and new CLI
experimental-features = nix-command flakes

# Keep build dependencies for development
keep-outputs = true
keep-derivations = true

# Use binary cache
substituters = https://cache.nixos.org https://nix-community.cachix.org
trusted-public-keys = cache.nixos.org-1:6NCHdD59X431o0gWypbMrAURkbJ16ZPMQFGspcDShjY= nix-community.cachix.org-1:mB9FSh9qf2dCimDSUo8Zy7bkq5CX+/rkCWyvRCYg3Fs=
```

### Nix Profile (User Packages)

```bash
# Install a package to user profile
nix profile install nixpkgs#git
nix profile install nixpkgs#nodejs
nix profile install nixpkgs#python3

# List installed packages
nix profile list

# Remove a package
nix profile remove git

# Update all packages
nix profile update

# Diff profile changes
nix profile diff-closures
```

### Nix Shell (Temporary Environments)

```bash
# Enter shell with packages
nix-shell -p git python3 curl jq

# Enter pure shell (no host environment)
nix-shell --pure -p nodejs

# Run a command in nix environment
nix-shell --run "node --version"

# Use specific nixpkgs version
nix-shell -I nixpkgs=channel:nixos-24.05 -p git

# Enter shell from flake
nix develop

# Run command from flake
nix develop --command bash
```

### Nix-Shell for Development

```nix
# shell.nix for non-flake projects
{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    # Languages
    nodejs
    python3
    go
    rustc
    cargo
    
    # Tools
    git
    jq
    yq
    ripgrep
    fd
    
    # Libraries
    openssl
    zlib
  ];
  
  shellHook = ''
    # Set environment variables
    export EDITOR=vim
    
    # Create virtual environment
    python3 -m venv .venv
    source .venv/bin/activate
    
    # Or for Node.js
    # npm install
  '';
  
  # For native dependencies (Linux)
  LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [
    pkgs.openssl
    pkgs.zlib
  ];
}
```

### Home Manager (User Environment Management)

```nix
# flake.nix for home-manager
{
  description = "Home Manager configuration";
  
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    home-manager = {
      url = "github:nix-community/home-manager";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };
  
  outputs = { nixpkgs, home-manager, ... }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      homeConfigurations.terry = home-manager.lib.homeManagerConfiguration {
        inherit pkgs;
        modules = [ ./home.nix ];
      };
    };
}

# home.nix - User environment configuration
{ pkgs, ... }:
{
  home.username = "terry";
  home.homeDirectory = "/home/terry";
  home.stateVersion = "24.05";
  
  programs.git = {
    enable = true;
    userName = "Terry";
    userEmail = "terry@example.com";
    extraConfig = {
      pull.rebase = true;
      init.defaultBranch = "main";
    };
  };
  
  programs.zsh = {
    enable = true;
    enableAutosuggestions = true;
    enableCompletion = true;
    shellAliases = {
      ll = "ls -la";
      gs = "git status";
      gp = "git push";
    };
    initExtra = ''
      export PATH="$HOME/.local/bin:$PATH"
    '';
  };
  
  programs.neovim = {
    enable = true;
    defaultEditor = true;
    plugins = with pkgs.vimPlugins; [
      vim-nix
      telescope-nvim
      nvim-treesitter
    ];
  };
  
  programs.tmux = {
    enable = true;
    clock24 = true;
    keyMode = "vi";
  };
  
  packages = with pkgs; [
    ripgrep
    fd
    jq
    yq
    tree
    htop
    curl
    wget
  ];
}
```

### Flake Template for Non-NixOS

```nix
# flake.nix - Minimal setup for non-NixOS projects
{
  description = "Development environment";
  
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };
  
  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          # Packages available in the shell
          buildInputs = with pkgs; [
            # Add your packages here
          ];
          
          # Shell initialization
          shellHook = ''
            echo "Development environment loaded"
          '';
        };
      }
    );
}
```

## Advanced Patterns

### Overlays

```nix
# Overlay to modify nixpkgs
(final: prev: {
  mypackage = prev.mypackage.overrideAttrs (oldAttrs: {
    version = "2.0.0";
    src = prev.fetchFromGitHub {
      owner = "owner";
      repo = "mypackage";
      rev = "v2.0.0";
      sha256 = "sha256-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
    };
    buildInputs = oldAttrs.buildInputs ++ [ final.openssl ];
  });
})

# Apply overlay
pkgs = import <nixpkgs> {
  overlays = [
    (import ./overlay.nix)
  ];
};
```

### Custom Packages

```nix
# pkgs/myapp/default.nix
{ pkgs, lib, fetchFromGitHub, ... }:

pkgs.stdenv.mkDerivation {
  pname = "myapp";
  version = "1.0.0";
  
  src = fetchFromGitHub {
    owner = "myorg";
    repo = "myapp";
    rev = "v1.0.0";
    sha256 = "sha256-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
  };
  
  nativeBuildInputs = with pkgs; [ cmake pkg-config ];
  buildInputs = with pkgs; [ openssl zlib ];
  
  cmakeFlags = [
    "-DCMAKE_BUILD_TYPE=Release"
  ];
  
  meta = with lib; {
    description = "My awesome application";
    homepage = "https://github.com/myorg/myapp";
    license = licenses.mit;
    maintainers = [ ];
    platforms = platforms.all;
  };
}
```

### Development Shells with Tools

```nix
# devShells with language-specific tooling
{
  devShells = {
    # Rust development
    rust = pkgs.mkShell {
      buildInputs = with pkgs; [
        cargo
        rustc
        rust-analyzer
        clippy
        rustfmt
      ];
      RUST_SRC_PATH = "${pkgs.rust.packages.stable.rustPlatform.rustLibSrc}";
    };
    
    # Python development
    python = pkgs.mkShell {
      buildInputs = with pkgs; [
        python3
        python3Packages.pip
        python3Packages.virtualenv
        python3Packages.pyright
      ];
      shellHook = ''
        python3 -m venv .venv
        source .venv/bin/activate
      '';
    };
    
    # Node.js development
    node = pkgs.mkShell {
      buildInputs = with pkgs; [
        nodejs
        nodePackages.pnpm
        nodePackages.typescript
        nodePackages.typescript-language-server
      ];
    };
  };
}
```

## Common Commands

### Package Management

```bash
# Search for packages
nix search nixpkgs git
nix search nixpkgs "node.*server"

# Show package info
nix eval nixpkgs#git.version
nix eval --json nixpkgs#git.meta.description

# Build a package
nix build nixpkgs#git
nix build nixpkgs#git --print-out-paths

# Install to profile
nix profile install nixpkgs#git

# Garbage collection
nix-collect-garbage
nix-collect-garbage -d  # Delete old generations
nix-store --optimise     # Optimize store

# Show store paths
nix-store -q --references /nix/store/...
nix-store -q --requisites /nix/store/...
```

### Development

```bash
# Enter development shell
nix develop
nix develop --impure  # Allow impure operations

# Run a command
nix develop --command node --version

# Use a specific flake output
nix develop .#devShells.x86_64-linux.default

# Evaluate expressions
nix eval --expr 'builtins.currentSystem'
nix eval --expr 'with import <nixpkgs> {}; lib.version'

# Generate lock file
nix flake lock
nix flake lock --update-input nixpkgs
```

### Debugging

```bash
# Show why a package is in the closure
nix why-depends /nix/store/... /nix/store/...

# Show dependency graph
nix-store -q --graph /nix/store/...

# Trace build errors
nix-build --keep-failed
nix-build --keep-going

# Show build log
nix-store -l /nix/store/...

# Check reproducibility
nix build --check
```

## Troubleshooting Non-NixOS

### Common Issues

```bash
# "error: file 'nixpkgs' was not found"
# Fix: Set NIX_PATH or use flakes
export NIX_PATH=nixpkgs=channel:nixos-unstable

# "error: experimental feature 'flakes' not enabled"
# Fix: Enable in ~/.config/nix/nix.conf
echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf

# "error: could not find binary cache"
# Fix: Configure substituters
nix-build --option substituters "https://cache.nixos.org"

# "error: cannot open '/etc/nix/nix.conf'"
# Fix: Create the file or use single-user install
mkdir -p /etc/nix
echo "experimental-features = nix-command flakes" > /etc/nix/nix.conf
```

### PATH Management

```bash
# Add Nix to shell config (~/.bashrc or ~/.zshrc)
if [ -e ~/.nix-profile/etc/profile.d/nix.sh ]; then
  . ~/.nix-profile/etc/profile.d/nix.sh
fi

# Or for single-user installation
. /home/$USER/.nix-profile/etc/profile.d/nix.sh

# Add user packages to PATH
export PATH="$HOME/.nix-profile/bin:$PATH"
```

### Editor Integration

```nix
# VS Code with Nix support
pkgs.vscode-with-extensions.override {
  extensions = with pkgs.vscode-extensions; [
    bbenoist.nix
    arrterian.nix-env-selector
  ];
}

# For non-NixOS, use nix profile to install VS Code extensions
nix profile install nixpkgs#vscode-extensions.bbenoist.nix
```

## Evaluation Checklist

Before finalizing a Nix configuration:

- [ ] `nix flake check` passes (for flakes)
- [ ] `nix-build` succeeds without errors
- [ ] `nix develop` enters the shell successfully
- [ ] `nix profile install` works for user packages
- [ ] No hardcoded paths or URLs with mutable hashes
- [ ] SHA256 hashes are correct (use `nix-prefetch-url` or `nix hash`)
- [ ] `meta` attributes are populated (description, license, platforms)
- [ ] Build inputs are minimal (don't pull unnecessary dependencies)
- [ ] Shell hook doesn't fail on missing tools
- [ ] Garbage collection doesn't break configurations
