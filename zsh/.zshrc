# If you come from bash you might have to change your $PATH.
export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="rgm" # set by `omz`

plugins=(git aliases npm ubuntu systemadmin systemd fzf zoxide npm node themes ssh-agent tmux colorize)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
if [[ -n $SSH_CONNECTION ]]; then
  export EDITOR='vim'
else
  export EDITOR='mvim'
fi

# Compilation flags
export ARCHFLAGS="-arch x86_64"
export PATH=$PATH:~/.scripts/bin
export LIBVIRT_DEFAULT_URI='qemu:///system'
export EDITOR="nvim"
export VISUAL="code"

# if [ -e /home/nesto/.nix-profile/etc/profile.d/nix.sh ]; then . /home/nesto/.nix-profile/etc/profile.d/nix.sh; fi # added by Nix installer

# Antigen 
source $HOME/antigen.zsh

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
alias nvim-lazy="NVIM_APPNAME=lazyvim nvim"
alias nvim-kick="NVIM_APPNAME=kickstart nvim"
alias nvim-chad="NVIM_APPNAME=NvChad nvim"
alias nvim-astro="NVIM_APPNAME=AstroNvim nvim"

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

# Pacman Aliases
alias paci="sudo pacman -S"
alias pacu="sudo pacman -Suy"
alias pacr="sudo pacman -R"
alias pacs="sudo pacman -Ss"

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

eval "$(zoxide init zsh)"
eval "$(atuin init zsh)"
