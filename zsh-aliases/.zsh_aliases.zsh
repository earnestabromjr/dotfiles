#!/bin/env zsh
#     _                _    _       _     
#   / \   _ __   __ _| | _(_)_ __ ( )___ 
#  / _ \ | '_ \ / _` | |/ / | '_ \|// __|
# / ___ \| | | | (_| |   <| | | | | \__ \
#/_/   \_\_| |_|\__,_|_|\_\_|_| |_| |___/                             
#
# Neovim Switcher
# https://gist.github.com/elijahmanor/b279553c0132bfad7eae23e34ceb593b
#

alias ls="eza --icons"
alias f="fastfetch"

## Neovim
alias vl="NVIM_APPNAME=lazyvim nvim"
alias vk="NVIM_APPNAME=kickstart nvim"
alias vc="NVIM_APPNAME=NvChad nvim"
alias va="NVIM_APPNAME=AstroNvim nvim"
alias vv="nvim"
alias vim="nvim"

# Doom Emacs
alias de="doom emacs"
alias s="kitten ssh"
alias f="fastfetch"

alias flatse="flatpak search "
alias flatin="flatpak install "

# Pacman Aliases
alias paci="sudo pacman -S"
alias pacu="sudo pacman -Suy"
alias pacr="sudo pacman -R"
alias pacs="sudo pacman -Ss"

alias yays="yay -Ss "
alias yayi="yay -S "
alias yayu="yay -Sy"
alias update="yay -Suy; flatpak update"

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

# Functions
function y() {
	local tmp="$(mktemp -t "yazi-cwd.XXXXXX")" cwd
	yazi "$@" --cwd-file="$tmp"
	IFS= read -r -d '' cwd < "$tmp"
	[ -n "$cwd" ] && [ "$cwd" != "$PWD" ] && builtin cd -- "$cwd"
	rm -f -- "$tmp"
}
