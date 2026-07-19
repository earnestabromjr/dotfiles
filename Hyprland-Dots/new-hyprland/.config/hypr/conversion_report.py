#!/usr/bin/env python3
import json
import os
import subprocess
import sys

# Track conversion progress
converted_count = 0
skipped_count = 0
errors_count = 0

# Get the source and destination directories
HYPR_SRC = "/home/terrya/.dotfiles/hypr"
HYPR_DEST = "/home/terrya/.dotfiles/new-hyprland/.config/hypr"

os.makedirs(HYPR_DEST, exist_ok=True)

# Find all .conf files
config_files = []
config_files.extend(subprocess.check_output(["find", HYPR_SRC, "-type", "f", "-name", "*.conf"], text=True).splitlines())

print("Found", len(config_files), "config files")

# Convert each file
for conf_file in config_files:
    conf_file = conf_file.strip()
    if not conf_file.endswith('.conf'):
        continue
        
    dest_file = os.path.join(HYPR_DEST, os.path.basename(conf_file).replace('.conf', '.lua'))
    
    try:
        print(f"Converting {conf_file} -> {dest_file}")
        subprocess.run(["hyprconf2lua", conf_file, "-o", dest_file], check=True)
        converted_count += 1
    except subprocess.CalledProcessError as e:
        print(f"  ERROR converting {conf_file}: {e}")
        errors_count += 1
    except Exception as e:
        print(f"  SKIPPED {conf_file}: {e}")
        skipped_count += 1

print(f"\nConversion complete:")
print(f"  Successfully converted: {converted_count}")
print(f"  Skipped: {skipped_count}")
print(f"  Errors: {errors_count}")
