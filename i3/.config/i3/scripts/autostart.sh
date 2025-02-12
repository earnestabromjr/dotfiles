# Set caps to escape (do this early since it's independent)
setxkbmap -option "caps:escape" &

# Set monitor
xrandr --output eDP-1 --off --output HDMI-1 --mode 1920x1080 --pos 0x0 --rotate normal --output DP-1 --off --output DP-2 --off --output DP-3 --off --output DP-4 --off

# Get primary monitor
export MONITOR=$(polybar -m | tail -1 | sed -e 's/:.*$//g')

# Terminate already running bar instances
killall -q polybar
# Wait until the processes have been shut down
while pgrep -u $UID -x polybar >/dev/null; do sleep 1; done

# Create logs directory if it doesn't exist
mkdir -p /tmp/polybar

# Launch polybar with IPC enabled
echo "---" | tee -a /tmp/polybar/primary.log
ENABLE_IPC=1 polybar --reload 2>&1 | tee -a /tmp/polybar/primary.log & disown

echo "Bars launched with IPC and auto-reload enabled..."
