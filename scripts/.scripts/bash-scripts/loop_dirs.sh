#!/bin/bash

### Create directories in a loop based on user input

read -rp "How many directories do you want to create? " count

# Validate that count is a positive integer
if ! [[ "$count" =~ ^[1-9][0-9]*$ ]]; then
    echo "Error: please enter a positive whole number."
    exit 1
fi

for ((i = 1; i <= count; i++)); do
    read -rp "Enter name for directory $i of $count: " dir_name

    if [[ -z "$dir_name" ]]; then
        echo "Skipping empty name."
        continue
    fi

    if [[ -d "$dir_name" ]]; then
        echo "Directory '$dir_name' already exists. Skipping."
        continue
    fi

    mkdir -p -- "$dir_name"
    echo "Created: $dir_name"
done

echo "Done."
