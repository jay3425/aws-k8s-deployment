#!/bin/bash
echo "=== Server Health: $(date) ==="
df -h / | tail -1
free -m | grep Mem
docker ps --format "table {{.Names}}\t{{.Status}}"
