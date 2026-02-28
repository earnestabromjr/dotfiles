#!/bin/env bash

# Apps to start on dwl launch

# Kill already running duplicate process
_ps="waybar mako swaybg"
for _prs in $_ps; do
  if [ "$(pidof "${_prs}")" ]; then
    killall -9 "${_prs}"
  fi
done

# Start our applications
swaybg --output '*' --mode center --image "$HOME/Pictures/backgrounds/riot_13.jpg" &
mako &
# waybar &
somebar &
foot --server &

for portal in xdg-desktop-portal-gtk xdg-desktop-portal-wlr xdg-desktop-portal; do
  pkill -e "$portal"
done

# Start xdg-desktop-portal-wlr and xdg-desktop-portal-gtk
/usr/libexec/xdg-desktop-portal-wlr &
/usr/libexec/xdg-desktop-portal-gtk &

sleep 1

# Start main xdg-desktop-portal
/usr/libexec/xdg-desktop-portal &

# Polkit agent (check if available)
if [ -x "/usr/libexec/polkit-gnome-authentication-agent-1" ]; then
  /usr/libexec/polkit-gnome-authentication-agent-1 &
elif [ -x "/usr/lib/mate-polkit/polkit-mate-authentication-agent-1" ]; then
  /usr/lib/xfce-polkit/xfce-polkit &
fi

# Ensure dbus environment
exec dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP=wlroots
