#!/usr/bin/env python3
from os.path import basename, exists
from urllib.request import urlretrieve


def download_file(url):
    filename = basename(url)
    if not exists(filename):
        local, _ = urlretrieve(url, filename)
        print(f"Downloaded {filename} to {local}")
    return filename


if __name__ == "__main__":
    download_file("https://www.google.com/robots.txt")
    print("File downloaded successfully.")
