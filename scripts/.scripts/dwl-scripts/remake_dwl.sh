#!/bin/env bash

# 
# Script to make and install dwl

cd "$HOME/.config/dwl" || exit

if [ -f config.h ]; then
    if [ -f config.h.bak ]; then
        rm config.h.bak
    fi
    mv config.h config.h.bak
fi

make && sudo make install
