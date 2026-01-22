#!/bin/env bash

# This script creates a list of packages imported by Java code
#
grep '^import' *.java | \
  sed -e 's/.*import *//' -e 's/;.*$//' | \
  sort -u > list
