#!/usr/bin/env bash

# Script to show keybinds for qtile
# Author: Earnest Abrom

grep -E '^[^#]' ~/.config/qtile/sxhkd/sxhkdrc | awk '/^[a-zA-Z0-9]/{if (x)print x;x="";}{x=(!x)?$0:x" "$0;}END{print x;}' | column -t -s $'\t' | grep -v '^$' | sed 's/^[ \t]*//'