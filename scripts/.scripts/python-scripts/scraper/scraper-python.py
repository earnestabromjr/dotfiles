#!/usr/bin/env python3
import re
import sys
import requests
from bs4 import BeautifulSoup


def scrape():
    url = sys.argv[1] if len(sys.argv) > 1 else "https://example.com"
    response = requests.get(url)
    if response.status_code != 200:
        print(f"Failed to retrieve the page. Status code: {response.status_code}")
        return
    soup = BeautifulSoup(response.text, "html.parser")
    for line in soup.find_all(string=re.compile("Allow:")):
        print(line)


def search_header(url):
    response = requests.get(url)
    headers = response.headers
    for header, value in headers.items():
        print(f"{header}: {value}")


if __name__ == "__main__":
    if "--scrape" in sys.argv:
        url = sys.argv[1] if len(sys.argv) > 2 else "https://example.com"
        try:
            scrape()
            print(sys.argv[0], "completed successfully.")
        except Exception as e:
            print(f"An error occurred: {e}")
    elif "--search" in sys.argv:
        url = sys.argv[1] if len(sys.argv) > 2 else "https://example.com"
        try:
            search_header(url)
            print(sys.argv[0], "completed successfully.")
        except Exception as e:
            print(f"An error occurred: {e}")
