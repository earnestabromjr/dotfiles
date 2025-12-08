# GEMINI.md

## Directory Overview

This directory contains configuration files for `niri`, a Wayland compositor, and `dms`, a companion service that provides additional desktop environment features. The configuration is written in the KDL format.

## Key Files

*   **`config.kdl`**: The main configuration file for `niri`. It defines settings for input devices, outputs, layout, animations, keybindings, and startup applications.

*   **`dms/`**: This directory contains configuration files for the `dms` service.
    *   **`binds.kdl`**: Defines keybindings for `dms` features like the application launcher, clipboard manager, and process list.
    *   **`alttab.kdl`**: Configures the appearance of the "alt-tab" recent windows switcher.
    *   **`colors.kdl`**: Defines the color scheme for various UI elements.
    *   **`layout.kdl`**: Configures layout properties like gaps and border widths.
    *   **`wpblur.kdl`**: Contains a rule for wallpaper blurring.

## Usage

These files are used to customize the behavior and appearance of the `niri` window manager and its associated `dms` services. To apply changes, you typically need to reload the `niri` configuration.
