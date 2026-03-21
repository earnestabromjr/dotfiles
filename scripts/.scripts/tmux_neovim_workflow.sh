#!/bin/sh
session="${1:-dev-env}"
tmux start-server
tmux new-session -d -s $session -n "main"
# Open neovim in the first pane (home directory)
tmux send-keys -t $session:main "cd ~/; nvim" Enter
# Split window horizontally to create second pane (equal size by default)
tmux split-window -h -t $session:main -c ~/project
# Open opencode in the second pane (project directory)
tmux send-keys -t $session:main.1 "opencode" Enter
tmux select-window -t $session:main
tmux attach-session -t $session