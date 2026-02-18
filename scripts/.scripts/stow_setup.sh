#!/bin/usr/env bash

# Usual apps
stow_apps=("neovim", "ripgrep", "nodejs", "npm", "rustup", "fzf", "unzip", "bat", "zoxid", "zsh", "tmux")


# funct to determine package manager
get_package_manager() {
  if [ -x "$(command -v apt)" ]; then
    echo "sudo apt update && sudo apt install -y"
  elif [ -x "$(command -v yum)" ]; then
    echo "sudo yum update && sudo yum install -y "
  elif [ -x "$(command -v brew)" ]; then
    echo "brew update -y && brew install -y"
  elif [ -x "$(command -v pacman)" ]; then
    echo "sudo pacman -Sy --noconfirm"
  else
    echo "unknown"
  fi
}

package_manager=$(get_package_manager)
# Install stow_apps
for app in "$stow_apps"; do
    if package_manager == "unknown"; then
	echo "No package manager, install manually"
	sleep 5
	exit 1
    fi
    package_manager app;
    
done

# Check if stow is installed
if ! command -v stow &> /dev/null; then
  echo "stow is not installed. Installing..."
  
  # Detect the package manager
  if [ -x "$(command -v apt)" ]; then
    # Ubuntu/Debian-based systems
    sudo apt update && sudo apt install -y stow
  elif [ -x "$(command -v yum)" ]; then
    # RHEL/CentOS-based systems
    sudo yum install -y stow
  elif [ -x "$(command -v brew)" ]; then
    # macOS with Homebrew
    brew install stow
  elif [ -x "$(command -v pacman)" ]; then
    # Arch Linux-based systems
    sudo pacman -S stow
  else
    echo "Unsupported package manager. Please install stow manually."
    exit 1
  fi
  
  echo "stow installed successfully."
else
  echo "stow is already installed."
fi

# Download dotfiles
cd ~/ &&
git clone git@github.com:earnestabromjr/dotfiles.git .dotfiles && 
cd ~/.dotfiles || return
stow_files(){
    if command -v stow &> /dev/null; then
	echo "Stowing configs"
	if command -v 
}

