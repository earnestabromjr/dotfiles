local wezterm = require('wezterm')
local ssh_domains = require('extra.ssh')
return {
	-- color scheme
	color_scheme = "Dark Ocean",
	--window opacity reduced
	window_background_opacity = .85,
	-- make sure you use a font you have installed
	font = wezterm.font 'Hack Nerd Font',
	font_size = 10.5,
	-- scroll bar
	enable_scroll_bar = true,
	-- Custom Key Bindings
	-- disable_default_key_bindings = true,
	-- ssh_domains = ssh_domains,
}
