
source $HOME/antigen.zsh
# If you come from bash you might have to change your $PATH.
export PATH=$HOME/bin:$HOME/.local/bin:/usr/local/bin:$PATH

# Path to your Oh My Zsh installation.
export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="robbyrussell"

plugins=(git aliases systemadmin eza zoxide fzf alias-finder themes mise zsh-interactive-cd zsh-navigation-tools sudo)

source $ZSH/oh-my-zsh.sh


# User configuration

export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='nvim'
# fi

# Compilation flags
export ARCHFLAGS="-arch $(uname -m)"

# TA Aliases
alias v2='NVIM_APPNAME=nvim2k nvim'
alias vl='NVIM_APPNAME=lazyvim nvim'

## Zoxide
alias cd="z"

# Eza
alias ls='eza --icons'
zstyle ':omz:plugins:eza' 'dirs-first' yes
zstyle ':omz:plugins:eza' 'git-status' yesa
zstyle ':omz:plugins:eza' 'header' yes
zstyle ':omz:plugins:eza' 'icons' yes

## Void specific
alias install="sudo xbps-install"
alias update="sudo xbps-install -Su"
alias search="xbps-query"

### ANTIGEN ####
# Load the oh-my-zsh's library.
antigen use oh-my-zsh

# Bundles from the default repo (robbyrussell's oh-my-zsh).
antigen bundle git
antigen bundle heroku
antigen bundle pip
antigen bundle lein
antigen bundle command-not-found

# Syntax highlighting bundle.
antigen bundle zsh-users/zsh-syntax-highlighting
antigen bundle zsh-users/zsh-autosuggestions
antigen bundle zsh-users/zsh-completions

antigen apply


alias l.="ls -d .* --color=auto"
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
eval "$(starship init zsh)"
