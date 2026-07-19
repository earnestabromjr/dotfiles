#    _                _    _       _
#  / \   _ __   __ _| | _(_)_ __ ( )___
#  / _ \ | '_ \ / _` | |/ / | '_ \|// __|
# / ___ \| | | | (_| |   <| | | | | \__ \
#/_/   \_\_| |_|\__,_|_|\_\_|_| |_| |___/
#

# If you come from bash you might have to change your $PATH.
<<<<<<< HEAD
export PATH=$HOME/bin:/usr/local/bin:$HOME/.local/bin:/home/linuxbrew/.linuxbrew/bin:$PATH
=======
export PATH=$HOME/bin:/usr/local/bin:/home/linuxbrew/.linuxbrew/bin:$HOME/.local/bin:$HOME/.cargo/bin:$PATH
>>>>>>> pikaos

# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="rgm" # set by `omz`

plugins=(git aliases npm ubuntu systemadmin systemd fzf zoxide npm node themes ssh-agent tmux colorize zsh-interactive-cd mise)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
if [[ -n $SSH_CONNECTION ]]; then
  export EDITOR='vim'
else
  export EDITOR='nvim'
fi

# Compilation flags
export ARCHFLAGS="-arch x86_64"
export PATH=$PATH:~/.scripts/bin
export LIBVIRT_DEFAULT_URI='qemu:///system'
export EDITOR="nvim"
export VISUAL="nvim"
export MANPAGER="nvim +Man!"

if [ -e /nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh ]; then
    . /nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh
fi

<<<<<<< HEAD
# Antigen 
source $HOME/.dotfiles/antigen.zsh
=======
# Zprofile
source $HOME/.zprofile

# Antigen
source $HOME/antigen.zsh
>>>>>>> pikaos

antigen use oh-my-zsh

antigen bundle git
antigen bundle command-not-found
antigen bundle zsh-users/zsh-syntax-highlighting
antigen bundle zsh-users/zsh-autosuggestions
antigen bundle zsh-users/zsh-completions
antigen bundle hlissner/zsh-autopair

antigen apply


#
# Executes commands at the start of an interactive session.
#
# Authors:
#   Sorin Ionescu <sorin.ionescu@gmail.com>
#

# Source Prezto.
if [[ -s "${ZDOTDIR:-$HOME}/.zprezto/init.zsh" ]]; then
  source "${ZDOTDIR:-$HOME}/.zprezto/init.zsh"
fi

# Customize to your needs...

# Neovim Switcher
# https://gist.github.com/elijahmanor/b279553c0132bfad7eae23e34ceb593b
#
alias vl="NVIM_APPNAME=lazyvim nvim"
alias vk="NVIM_APPNAME=kickstart nvim"
alias vc="NVIM_APPNAME=NvChad nvim"
alias va="NVIM_APPNAME=AstroNvim nvim"
alias vv="nvim"
alias vim="nvim"
alias s="kitten ssh"
alias f="fastfetch"

# Flatpak Aliases
alias flatse="flatpak search "
alias flatin="flatpak install "

# PikaOS pikman Aliases
alias pikse="pikman search "
alias pikin="pikman install "

# Pacman Aliases
alias paci="sudo pacman -S"
alias pacu="sudo pacman -Suy"
alias pacr="sudo pacman -R"
alias pacs="sudo pacman -Ss"

alias yays="yay -Ss "
alias yayi="yay -S "
alias yayu="yay -Sy"
alias update="yay -Suy; flatpak update"

# Fedora Aliases
alias dnf="sudo dnf"
alias dnfu="sudo dnf update"
alias dnfse="dnf search "
alias dnfi="dnf install "
alias dnfr="dnf remove "

# Pikaos Aliases
alias pks="pikman search "
alias pki="pikman install "
alias pkr="pikman remove "
alias pku="pikman update "

# Brew aliases
alias brewcode="/home/linuxbrew/.linuxbrew/bin/opencode"

# Home Manager aliases
alias hm="home-manager"
alias hms="home-manager switch"

#search content with ripgrep
alias rg="rg --sort path"

#get the error messages from journalctl
alias jctl="journalctl -p 3 -xb"

alias nb="$EDITOR ~/.bashrc"
alias nz="$EDITOR ~/.zshrc"
alias nf="$EDITOR ~/.config/fish/config.fish"
alias nfastfetch="$EDITOR ~/.config/fastfetch/config.jsonc"

#give the list of all installed desktops - xsessions desktops
alias xd="ls /usr/share/xsessions"
alias xdw="ls /usr/share/wayland-sessions"

#give a list of the kernels installed
alias kernel="ls /usr/lib/modules"
alias kernels="ls /usr/lib/modules"

function nvims() {
  items=("default" "kickstart" "LazyVim" "NvChad" "AstroNvim")
  config=$(printf "%s\n" "${items[@]}" | fzf --prompt=" Neovim Config  " --height=~50% --layout=reverse --border --exit-0)
  if [[ -z $config ]]; then
    echo "Nothing selected"
    return 0
  elif [[ $config == "default" ]]; then
    config=""
  fi
  NVIM_APPNAME=$config nvim $@
}

# bindkey "^[a "nvims\n""

# Personal Aliases
alias l.="ls -d .* --color=auto"

# Lsd
alias ls="lsd"

#alias zoxide
alias cd="z"
alias sha1="openssl sha1"
alias mkdir="mkdir -pv"
alias diff="colordiff"
alias mount="mount | column -t"
alias h="history"
alias j="jobs -l"

alias path="echo -e ${PATH//:/\\n}"
alias now="date +'%T'"
alias nowtime="now"
alias nowdate="date +'%d-%m-%Y'"

alias vi="nvim"
alias vis="nvim '+set si'"
alias edit="nvim"
alias svi="sudo -E vi"

# Stop after sending count ECHO_REQUEST packets
alias ping="ping -c 5"
# Do not wait interval 1 second, go fast
alias fastping="ping -c 100 -s.2"

# Show open ports
alias ports="netstat -tulanp"

# do not delete / or prompt if deleting more than 3 files at a time #
alias rm='rm -I --preserve-root'

# confirmation #
alias mv="mv -i"
alias cp="cp -i"
alias ln="ln -i"

# Parenting changing perms on / #
alias chown="chown --preserve-root"
alias chmod="chmod --preserve-root"
alias chgrp="chgrp --preserve-root"


# Become root
alias root="sudo -i"
alias su="sudo -i"

# Pass options to free
alias meminfo="free -m -l -t"

## Get top process eating memory
alias psmem="ps auxf | sort -nr -k 4"
alias psmem10="ps auxf | sort -nr -k 4 | head -10"

## Get top process eating cpu
alias pcpu="ps auxf | sort -nr -k 3"
alias pcpu10="ps auxf | sort -nr -k 3 | head -10"

# Get server cpu info
alias cpuinfo="lscpu"

# Resume wget by default
alias wget="wget -c"

# top is btop
alias top="btop"

alias df="df -H"
alias du="du -ch"

# Xonsh
  alias xonsh="$HOME/.xonsh-env/bin/xonsh"

# Functions
function y() {
	local tmp="$(mktemp -t "yazi-cwd.XXXXXX")" cwd
	yazi "$@" --cwd-file="$tmp"
	IFS= read -r -d '' cwd < "$tmp"
	[ -n "$cwd" ] && [ "$cwd" != "$PWD" ] && builtin cd -- "$cwd"
	rm -f -- "$tmp"
}

<<<<<<< HEAD
=======
eval "$(zoxide init zsh)"
# eval "$(atuin init zsh)"
eval "$(starship init zsh)"
eval "$(mise activate zsh)"
eval "$(devbox global shellenv)"
>>>>>>> pikaos

# pnpm
export PNPM_HOME="/home/terrya/.local/share/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end

<<<<<<< HEAD
# Evals
eval "$(zoxide init zsh)"
eval "$(starship init zsh)"
eval "$(mise activate zsh)"
# eval "$(/usr/bin/mise activate zsh)"
# eval "$(atuin init zsh)"

# WSL related aliases
alias winhome="pushd /mnt/c/Users/$USER/"


# Added by Antigravity CLI installer
export PATH="/home/terrya/.local/bin:$PATH"
=======
fpath+=~/.zfunc; autoload -Uz compinit; compinit

zstyle ':completion:*' menu select
>>>>>>> pikaos
