#!/usr/bin/env bash

# This is a script to launch distrobox containers with more of my own customizations

# This is an example of the type of commands im running 
## Must figure out hwo to allow for my own vars and env to be applied
### For example when it comes to the image i want to be able to select the images from a dropdown list using fzf
distrobox create -i docker.io/almalinux/8-init --init --name alma-box \ 
--pre-init-hooks "dnf config-manager --enable powertools && dnf -y install epel-release" \ 
--additional-packages "git tmux wget curl fzf zsh zoxide fd ripgrep unzip zip emacs neovim fish nodejs npm rustup fastfetch" \ 
--hostname alma-box -H /home/anakin/Distrobox-Home/almalinux/
