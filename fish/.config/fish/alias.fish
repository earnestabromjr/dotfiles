alias f="fastfetch"
alias gst="git status"
alias ga="git add"
alias gc="git commit -m"

## Arch based aliases
alias search="paru -Ss"
alias install="paru -S"
alias up="paru -Sy"

## Functions
function mkcd
    mkdir -p $argv
    and cd $argv
end

function y
    set tmp (mktemp -t "yazi-cwd.XXXXXX")
    command yazi $argv --cwd-file="$tmp"
    if read -z cwd <"$tmp"; and [ -n "$cwd" ]; and [ "$cwd" != "$PWD" ]
        builtin cd -- "$cwd"
    end
    rm -f -- "$tmp"
end
