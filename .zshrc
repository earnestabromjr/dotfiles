# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="pygmalion"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment one of the following lines to change the auto-update behavior
# zstyle ':omz:update' mode disabled  # disable automatic updates
# zstyle ':omz:update' mode auto      # update automatically without asking
# zstyle ':omz:update' mode reminder  # just remind me to update when it's time

# Uncomment the following line to change how often to auto-update (in days).
# zstyle ':omz:update' frequency 13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# You can also set it to another string to have that shown instead of the default red dots.
# e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"
# Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.

# Completion fpath
fpath+=${ZSH_CUSTOM:-${ZSH:-~/.oh-my-zsh}/custom}/plugins/zsh-completions/src

plugins=(git aliases npm ubuntu systemadmin systemd fzf zoxide npm node ripgrep themes ssh-agent tmux colorize zsh-syntax-highlighting zsh-interactive-cd zsh-autosuggestions)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
alias rm="rm -I --preserve-root"
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
#
# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
export PATH=$PATH:~/.scripts/bin
export LIBVIRT_DEFAULT_URI='qemu:///system'
export EDITOR="nvim"
export VISUAL="code"

if [ -e /home/nesto/.nix-profile/etc/profile.d/nix.sh ]; then . /home/nesto/.nix-profile/etc/profile.d/nix.sh; fi # added by Nix installer


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
#alias nvim-lazy="NVIM_APPNAME=LazyVim nvim"
#alias nvim-kick="NVIM_APPNAME=kickstart nvim"
#alias nvim-chad="NVIM_APPNAME=NvChad nvim"
#alias nvim-astro="NVIM_APPNAME=AstroNvim nvim"

#function nvims() {
#  items=("default" "kickstart" "LazyVim" "NvChad" "AstroNvim")
#  config=$(printf "%s\n" "${items[@]}" | fzf --prompt=" Neovim Config  " --height=~50% --layout=reverse --border --exit-0)
#  if [[ -z $config ]]; then
#    echo "Nothing selected"
#    return 0
#  elif [[ $config == "default" ]]; then
#    config=""
#  fi
#  NVIM_APPNAME=$config nvim $@
#}

# New neovim switcher
## Aliases
alias v='nvim' # default Neovim config
alias vz='NVIM_APPNAME=LazyVim nvim' # LazyVim
alias vc='NVIM_APPNAME=NvChad nvim' # NvChad
alias vk='NVIM_APPNAME=kickstart nvim' # Kickstart
alias va='NVIM_APPNAME=AstroNvim nvim' # AstroVim
alias vl='lvim' # LunarVim
#alias vl='NVIM_APPNAME=nvim-lunarvim nvim' # LunarVim

# sudo pacman Aliases
alias paci="sudo pacman -S"
alias pacu="sudo pacman -Suy"
alias pacr="sudo pacman -Rs"
alias pacs="sudo pacman -Ss"

#
alias yayI="yay -S"
alias yayU="yay -Suy"
alias yayR="yay -Rs"
alias yayS="yay -Ss"

# Personal Aliases
alias szc="source ~/.zshrc"
alias cd="z"
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

source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

export PATH=/home/ta/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/bin:/usr/bin/site_perl:/usr/bin/vendor_perl:/usr/bin/core_perl:/home/ta/.scripts/bin:/home/ta/.config/emacs/bin
neofetch | lolcat
cpufetch
