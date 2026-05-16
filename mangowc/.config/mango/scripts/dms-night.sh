#!/usr/bin/env bash
STATUS=$(dms ipc call night status 2>/dev/null)

if echo "$STATUS" | grep -qi "enabled"; then
  TEMP=$(dms ipc call night temperature 2>/dev/null)
  echo "{\"text\": \" $TEMP\", \"class\": \"enabled\", \"tooltip\": \"Night light enabled\\nTemperature: $TEMP\"}"
else
  echo "{\"text\": \" \", \"class\": \"disabled\", \"tooltip\": \"Night light disabled\"}"
fi
