#!/usr/bin/env python3
"""Create directories in a loop based on user input."""

from pathlib import Path


def main() -> None:
    raw = input("How many directories do you want to create? ").strip()

    try:
        count = int(raw)
        if count < 1:
            raise ValueError
    except ValueError:
        print("Error: please enter a positive whole number.")
        raise SystemExit(1)

    for i in range(1, count + 1):
        dir_name = input(f"Enter name for directory {i} of {count}: ").strip()

        if not dir_name:
            print("Skipping empty name.")
            continue

        path = Path(dir_name)
        if path.is_dir():
            print(f"Directory '{dir_name}' already exists. Skipping.")
            continue

        path.mkdir(parents=True, exist_ok=True)
        print(f"Created: {dir_name}")

    print("Done.")


if __name__ == "__main__":
    main()
