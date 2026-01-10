-- Pull in the wezterm API
local wezterm = require("wezterm")

-- This will hold the configuration.
local config = wezterm.config_builder()

-- This is where you actually apply your config choices.
--
config.font = wezterm.font("Hack Nerd Font Mono")
config.color_scheme = "Tokyo Night Storm"
config.window_background_opacity = 0.8
config.window_decorations = "RESIZE"
config.tab_bar_at_bottom = true
return config
