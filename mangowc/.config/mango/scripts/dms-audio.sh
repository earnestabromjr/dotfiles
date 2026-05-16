#!/usr/bin/env bash
STATUS=$(dms ipc call audio status 2>/dev/null)
OUTPUT=$(echo "$STATUS" | grep -oP 'Output: \K[0-9]+%')
INPUT=$(echo "$STATUS" | grep -oP 'Input: \K[0-9]+%')
MUTED=$(echo "$STATUS" | grep -i -c "muted")

VOL=${OUTPUT:-0%}
VOL_NUM=${VOL%\%}

if [ "$MUTED" -gt 0 ] || [ "$VOL_NUM" = "0" ]; then
  TEXT=" Muted"
  CLASS="muted"
elif [ "$VOL_NUM" -le 33 ]; then
  TEXT=" $VOL"
  CLASS="low"
elif [ "$VOL_NUM" -le 66 ]; then
  TEXT=" $VOL"
  CLASS="medium"
else
  TEXT=" $VOL"
  CLASS="high"
fi

echo "{\"text\": \"$TEXT\", \"class\": \"$CLASS\", \"tooltip\": \"Output: $OUTPUT\\nInput: $INPUT\"}"
