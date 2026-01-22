#!/bin/env bash

# This script is used to update all packages from flatpaks to aur and arch repo

echo "Updating AUR packages..."
yay -Syu --noconfirm --sudoloop

echo "Updating Flatpaks..."
flatpak update -y
