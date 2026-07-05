require("env")
require("exec")
require("keybinds")
require("monitors")

hl.config({
    general = {
        layout = "dwindle",
        allow_tearing = 1,
        gaps_in = 2,
        gaps_out = 6,
        border_size = 2,
        col = {
            active_border = { colors = { "rgba(0DB7D4FF)", "rgba(7AA2F7FF)", "rgba(9778D0FF)" }, angle = 45 },
            inactive_border = "rgba(04404aaa)",
        },
    },
})

hl.config({
    xwayland = {
        use_nearest_neighbor = 0,
        force_zero_scaling = 1,
        create_abstract_socket = 1,
    },
})

hl.config({
    input = {
        repeat_rate = 50,
        repeat_delay = 300,
        numlock_by_default = 1,
        left_handed = 0,
        kb_options = "caps:swapescape",
        follow_mouse = 2,
        accel_profile = "flat",
    },
})

hl.curve("windowIn", { type = "bezier", points = { { 0.06, 0.71 }, { 0.25, 1 } } })
hl.curve("windowResize", { type = "bezier", points = { { 0.04, 0.67 }, { 0.38, 1 } } })

hl.animation({ leaf = "windowsIn",  enabled = true, speed = 1, bezier = "windowIn",     style = "slide" })
hl.animation({ leaf = "windowsOut", enabled = true, speed = 1, bezier = "windowIn",     style = "slide" })
hl.animation({ leaf = "windowsMove", enabled = true, speed = 0.75, bezier = "windowResize" })
hl.animation({ leaf = "fade",       enabled = true, speed = 1,   bezier = "default" })
hl.animation({ leaf = "workspaces", enabled = true, speed = 1,   bezier = "default" })

hl.config({
    dwindle = {
        preserve_split = 1,
    },
})

hl.config({
    render = {
        direct_scanout = 1,
    },
})

hl.config({
    opengl = {
        nvidia_anti_flicker = 0,
    },
})

hl.config({
    cursor = {
        no_hardware_cursors = 0,
        enable_hyprcursor = 1,
        use_cpu_buffer = 0,
        sync_gsettings_theme = 1,
    },
})

hl.config({
    decoration = {
        rounding = 32,
        rounding_power = 1.15,
        blur = {
            enabled = false,
            xray = false,
            size = 2,
            passes = 3,
            new_optimizations = true,
            noise = 0.01,
            contrast = 1.6,
            brightness = 1.1,
        },
        shadow = {
            enabled = 0,
            range = 6,
            render_power = 2,
            offset = "0 0",
            color = "rgba(1A1A1AEE)",
            color_inactive = "rgba(1A1A1AEE)",
        },
    },
})

hl.config({
    misc = {
        vrr = 2,
        disable_hyprland_guiutils_check = true,
        enable_swallow = false,
        swallow_regex = "^(kitty)$",
        disable_hyprland_logo = true,
        disable_splash_rendering = true,
        focus_on_activate = true,
        animate_manual_resizes = true,
        animate_mouse_windowdragging = true,
        mouse_move_enables_dpms = true,
        key_press_enables_dpms = true,
        middle_click_paste = false,
    },
})

hl.config({
    debug = {
        overlay = 0,
        damage_blink = 0,
        damage_tracking = 2,
    },
})
