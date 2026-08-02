#!/usr/bin/env python3
import os
import sys


def parse_txt(file_path):
    """
    Parses a text file and returns its content as a list of lines.

    :param file_path: Path to the text file to be parsed.
    :return: List of lines in the text file.
    """
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.readlines()
    return [
        line.strip() for line in content if line.strip()
    ]  # Remove empty lines and strip whitespace


def find_lines_with_prefix(parsed_text, prefix):
    for line in parsed_text:
        if line.startswith(prefix):
            print(line)


if __name__ == "__main__":

    if len(sys.argv) > 1:
        file_path = sys.argv[1]
    else:
        file_path = os.path.expanduser("~/.scripts/scraper/robots.txt")
    prefix = "Allow:"
    parsed_text = parse_txt(file_path)
    find_lines_with_prefix(parsed_text, prefix)
    print(f"Lines starting with '{prefix}' have been printed from {file_path}.")
