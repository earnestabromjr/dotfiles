#!/bin/env bash

# Load .env file if it exists
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [ -f "$SCRIPT_DIR/.env" ]; then
    source "$SCRIPT_DIR/.env"
fi

if [ -z "$IP_ADDRESS" ]; then
    echo "Error: IP_ADDRESS not set in .env or environment."
    exit 1
fi

sudo tailscale set --exit-node="$IP_ADDRESS" --exit-node-allow-lan-access=true
