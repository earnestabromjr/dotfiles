#!/usr/bin/env bash
DND=$(dms ipc call notifications getDoNotDisturb 2>/dev/null)

if [ "$DND" = "true" ]; then
  echo "{\"text\": \" DND\", \"class\": \"dnd\", \"tooltip\": \"Do Not Disturb enabled\"}"
else
  echo "{\"text\": \" \", \"class\": \"normal\", \"tooltip\": \"Notifications enabled\"}"
fi
