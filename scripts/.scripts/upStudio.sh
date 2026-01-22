#!/bin/env bash

# This script is used to update all packages from flatpaks to brew, pacstall and UBS

echo "Updating Flatpaks..."
flatpak update -y;

echo "Updating Brew packages..."
brew update && brew upgrade;

echo "Updating Pacstall packages..."
pacstall --update && pacstall --upgrade;

echo "Updating snap packages..."
snap refresh;

echo "Updating Studio"
sudo apt-get update && sudo apt-get upgrade -y;

