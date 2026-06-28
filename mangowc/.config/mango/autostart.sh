#!/usr/bin/env bash
# mangowc autostart
# Called by `exec-once=~/.config/mango/autostart.sh` in config.conf

# Notification daemon
swaync >/dev/null 2>&1 &

# Status bar (Waybar with mangowc config)
# waybar -c ~/.config/mango/config.jsonc -s ~/.config/mango/style.css >/dev/null 2>&1 &

# DMS (desktop manager)
dms run >/dev/null 2>&1

# Wallpaper via dms
if ! dms ipc call wallpaper get >/dev/null 2>&1; then
  swaybg -i ~/Pictures/wallpapers/wallhaven-purpleworld.jpg >/dev/null 2>&1 &
fi

# Polkit agent
/usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1 >/dev/null 2>&1 ||
  /usr/lib/xfce-polkit/xfce-polkit >/dev/null 2>&1 &

# Clipboard manager (wl-clip-persist keeps clipboard after app closes)
wl-clip-persist --clipboard regular >/dev/null 2>&1 &

# XDG portal
/usr/lib/xdg-desktop-portal-wlr >/dev/null 2>&1 &
