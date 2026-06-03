export PATH=$HOME/bin:$HOME/.local/bin:/usr/local/bin:$PATH

# Antigen
source $HOME/antigen.zsh
antigen use oh-my-zsh

antigen bundle zsh-users/zsh-syntax-highlighting
antigen bundle zsh-users/zsh-autosuggestions
antigen bundle zsh-users/zsh-completions
antigen bundle hlissner/zsh-autopair
antigen bundle zsh-users/zsh-history-substring-search

antigen apply

export ZSH="$HOME/.oh-my-zsh"
ZSH_THEME="candy-kingdom"

# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git systemadmin systemd fzf aliases themes ssh-agent tmux colorize zsh-interactive-cd dnf docker docker-compose podman zsh-navigation-tools starship zoxide)

source $ZSH/oh-my-zsh.sh

# User configuration

export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
if [[ -n $SSH_CONNECTION ]]; then
  export EDITOR='vim'
else
  export EDITOR='nvim'
fi

# Compilation flags
export ARCHFLAGS="-arch $(uname -m)"

# Aliases
alias kernel="ls /usr/lib/modules"
alias kernels="ls /usr/lib/modules"

# Personal Aliases
alias szc="source ~/.zshrc"
alias cd="z"
alias ls="lsd"
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


## Aliases
alias v='nvim' # default Neovim config
alias vz='NVIM_APPNAME=lazyvim nvim' # LazyVim
alias vc='NVIM_APPNAME=NvChad nvim' # NvChad
alias vk='NVIM_APPNAME=kickstart nvim' # Kickstart
alias va='NVIM_APPNAME=AstroNvim nvim' # AstroVim
alias vl='lvim' # LunarVim
#alias vl='NVIM_APPNAME=nvim-lunarvim nvim' # LunarVim
