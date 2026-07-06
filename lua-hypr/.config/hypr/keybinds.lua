local mainMod = "SUPER"
local secterm= "ghostty"

-- Mouse Binds
hl.bind(mainMod .. " + mouse:272", hl.dsp.window.drag(), { mouse = true })
hl.bind(mainMod .. " + mouse:273", hl.dsp.window.resize(), { mouse = true })

-- App launchers
hl.bind("SUPER + SHIFT + B", hl.dsp.exec_cmd("chromium"))
hl.bind(mainMod .. " + Return", hl.dsp.exec_cmd("kitty"))
hl.bind(mainMod .. " + T", hl.dsp.exec_cmd(secterm))
hl.bind("SUPER + SHIFT + V", hl.dsp.exec_cmd("pwvucontrol"))
hl.bind("SUPER + SHIFT + Q", hl.dsp.exec_cmd("wlogout -p layer-shell"))
hl.bind("SUPER + SHIFT + F", hl.dsp.exec_cmd("nemo"))

-- System monitors
hl.bind(mainMod .. " + SHIFT + M", hl.dsp.exec_cmd("gnome-system-monitor"))
hl.bind(mainMod .. " + SHIFT + O", hl.dsp.exec_cmd("ghostty -e btop"))

hl.bind(mainMod .. " + Escape", hl.dsp.exec_cmd("hyprctl reload"))
hl.bind(mainMod .. " + Escape", hl.dsp.exec_cmd("notify-send 'Config Reloaded'"))

-- Window operations
hl.bind(mainMod .. " + S", hl.dsp.window.float({ action = "toggle" }))
hl.bind(mainMod .. " + A", hl.dsp.window.pin())
hl.bind(mainMod .. " + Q", hl.dsp.window.close())
hl.bind("SUPER + CONTROL + Q", hl.dsp.exec_cmd("hyprctl kill"))
hl.bind(mainMod .. " + F", hl.dsp.window.fullscreen())
hl.bind(mainMod .. " + M", hl.dsp.window.fullscreen({ mode = "maximized" }))

-- Grouping
hl.bind(mainMod .. " + G", hl.dsp.group.toggle())
hl.bind("ALT + TAB", hl.dsp.group.next())
hl.bind("ALT + SHIFT + TAB", hl.dsp.group.prev())

-- Volume and brightness
hl.bind("XF86AudioRaiseVolume", hl.dsp.exec_cmd("pamixer -i 5"), { locked = true, repeating = true })
hl.bind("XF86AudioLowerVolume", hl.dsp.exec_cmd("pamixer -d 5"), { locked = true, repeating = true })
hl.bind("XF86AudioMute", hl.dsp.exec_cmd("pamixer -t"), { locked = true })
hl.bind("XF86MonBrightnessUp", hl.dsp.exec_cmd("brightnessctl set +10%"), { locked = true, repeating = true })
hl.bind("XF86MonBrightnessDown", hl.dsp.exec_cmd("brightnessctl set 10%-"), { locked = true, repeating = true })
hl.bind("XF86Calculator", hl.dsp.exec_cmd("kcalc"))
hl.bind("XF86AudioPlay", hl.dsp.exec_cmd("playerctl play-pause"), { locked = true })
hl.bind("XF86AudioStop", hl.dsp.exec_cmd("playerctl stop"), { locked = true })
hl.bind("XF86AudioPrev", hl.dsp.exec_cmd("playerctl previous"), { locked = true })
hl.bind("XF86AudioNext", hl.dsp.exec_cmd("playerctl next"), { locked = true })

-- Launchers
hl.bind(mainMod .. " + D", hl.dsp.exec_cmd("$HOME/.nix-profile/bin/fuzzel"))
hl.bind(mainMod .. " + Space", hl.dsp.exec_cmd("pikabar-launcher"))

-- File manager
hl.bind(mainMod .. " + E", hl.dsp.exec_cmd("nautilus"))

-- Focus movement
-- Direction Keys
hl.bind(mainMod .. " + left", hl.dsp.focus({ direction = "left" }))
hl.bind(mainMod .. " + right", hl.dsp.focus({ direction = "right" }))
hl.bind(mainMod .. " + up", hl.dsp.focus({ direction = "up" }))
hl.bind(mainMod .. " + down", hl.dsp.focus({ direction = "down" }))

-- Vim movement
hl.bind(mainMod .. " + h", hl.dsp.focus({ direction = "left" }))
hl.bind(mainMod .. " + j", hl.dsp.focus({ direction = "down" }))
hl.bind(mainMod .. " + k", hl.dsp.focus({ direction = "up" }))
hl.bind(mainMod .. " + l", hl.dsp.focus({ direction = "right" }))

-- Overview
hl.bind(mainMod .. " + o", hl.dsp.exec_cmd("qs ipc -c overview call overview toggle"))

-- Workspace switching
hl.bind("SUPER + 1", hl.dsp.focus({ workspace = 1 }))
hl.bind("SUPER + 2", hl.dsp.focus({ workspace = 2 }))
hl.bind("SUPER + 3", hl.dsp.focus({ workspace = 3 }))
hl.bind("SUPER + 4", hl.dsp.focus({ workspace = 4 }))
hl.bind("SUPER + 5", hl.dsp.focus({ workspace = 5 }))
hl.bind("SUPER + 6", hl.dsp.focus({ workspace = 6 }))
hl.bind("SUPER + 7", hl.dsp.focus({ workspace = 7 }))
hl.bind("SUPER + 8", hl.dsp.focus({ workspace = 8 }))
hl.bind("SUPER + 9", hl.dsp.focus({ workspace = 9 }))
hl.bind("SUPER + 0", hl.dsp.focus({ workspace = 10 }))

-- Move window and follow
hl.bind("SUPER + SHIFT + left", hl.dsp.window.move({ workspace = -1 }))
hl.bind("SUPER + SHIFT + right", hl.dsp.window.move({ workspace = 1 }))
hl.bind("SUPER + SHIFT + up", hl.dsp.window.move({ direction = "up" }))
hl.bind("SUPER + SHIFT + down", hl.dsp.window.move({ direction = "down" }))

-- Previous/next workspace
hl.bind("SUPER + CONTROL + left", hl.dsp.focus({ workspace = "e-1" }))
hl.bind("SUPER + CONTROL + right", hl.dsp.focus({ workspace = "e+1" }))

-- Move window to workspace (with SHIFT)
hl.bind("SUPER + SHIFT + 1", hl.dsp.window.move({ workspace = 1 }))
hl.bind("SUPER + SHIFT + 2", hl.dsp.window.move({ workspace = 2 }))
hl.bind("SUPER + SHIFT + 3", hl.dsp.window.move({ workspace = 3 }))
hl.bind("SUPER + SHIFT + 4", hl.dsp.window.move({ workspace = 4 }))
hl.bind("SUPER + SHIFT + 5", hl.dsp.window.move({ workspace = 5 }))
hl.bind("SUPER + SHIFT + 6", hl.dsp.window.move({ workspace = 6 }))
hl.bind("SUPER + SHIFT + 7", hl.dsp.window.move({ workspace = 7 }))
hl.bind("SUPER + SHIFT + 8", hl.dsp.window.move({ workspace = 8 }))
hl.bind("SUPER + SHIFT + 9", hl.dsp.window.move({ workspace = 9 }))
hl.bind("SUPER + SHIFT + 0", hl.dsp.window.move({ workspace = 10 }))

-- Monitor focus
hl.bind("SUPER + CONTROL + up", hl.dsp.focus({ monitor = "l" }))
hl.bind("SUPER + CONTROL + down", hl.dsp.focus({ monitor = "r" }))
hl.bind(mainMod .. " + tab", hl.dsp.focus({ workspace = "previous" }))

-- Resize active window
hl.bind("SUPER + ALT + left", hl.dsp.window.resize({ x = -20, y = 0 }))
hl.bind("SUPER + ALT + right", hl.dsp.window.resize({ x = 20, y = 0 }))
hl.bind("SUPER + ALT + up", hl.dsp.window.resize({ x = 0, y = -20 }))
hl.bind("SUPER + ALT + down", hl.dsp.window.resize({ x = 0, y = 20 }))

-- VFR toggle
hl.bind(mainMod .. " + F12", hl.dsp.exec_cmd("hyprctl keyword misc:no_vfr 0"))
hl.bind("SUPER + ALT + F12", hl.dsp.exec_cmd("hyprctl keyword misc:no_vfr 1"))

-- Screenshots
hl.bind("CTRL + Print", hl.dsp.exec_cmd("grim ~/Pictures/$(date +'%Y-%m-%d,%H:%M:%S').png; notify-send 'Saved screen'"))
hl.bind("SHIFT + Print", hl.dsp.exec_cmd("grim -g \"$(slurp)\" - | wl-copy; notify-send 'Copied screen'"))
hl.bind("CTRL + SHIFT + Print",
    hl.dsp.exec_cmd(
        "wayfreeze & PID=$!; sleep .1; grim -g \"$(slurp)\" ~/Pictures/$(date +'%Y-%m-%d,%H:%M:%S').png; kill $PID; notify-send 'Saved region'"))
hl.bind("Print",
    hl.dsp.exec_cmd(
        "wayfreeze & PID=$!; sleep .1; grim -g \"$(slurp)\" - | wl-copy; kill $PID; notify-send 'Copied region'"))
