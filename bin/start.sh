#!/bin/sh

PATH="./node_modules/.bin:${PATH}"

[ -z "${PORT}" ] && PORT=8080

webpack-dev-server \
  --colors \
  --display-chunks \
  --display-error-details \
  --display-reasons \
  --history-api-fallback \
  --output-public-path http://127.0.0.1:${PORT}/ \
  --port ${PORT} \
  --progress
