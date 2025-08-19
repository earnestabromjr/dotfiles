#!/bin/bash

### Script to enter Distrobox Container

echo "Enter the name of the Distrobox container:"
read container_name

echo "Entering Distrobox container '$container_name'..."
distrobox-enter "$container_name"
