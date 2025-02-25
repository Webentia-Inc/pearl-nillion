#!/bin/bash
for port in {3000..3010}; do
  pid=$(sudo lsof -t -i :$port)
  if [ -n "$pid" ]; then
    echo "Killing process on port $port (PID: $pid)"
    sudo kill -9 $pid
  else
    echo "No process found on port $port"
  fi
done

// Commands: 
// chmod +x kill-ports.sh
// ./kill-ports.sh