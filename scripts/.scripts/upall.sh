#!/usr/bin/env bash

# Checks if each package manager exists and updates all packages

command -v brew >/dev/null 2>&1 && { echo "Updating brew ..."; brew upgrade -y; }

command -v flatpak >/dev/null 2>&1 && { echo "Updating Flatpaks..."; flatpak update -y; }

command -v pacstall >/dev/null 2>&1 && { echo "Updating pacstall"; pacstall -UpP; }

command -v snap >/dev/null 2>&1 && { echo "Updating snap apps..."; sudo snap refresh; }
