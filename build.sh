#!/usr/bin/env bash

set -euo pipefail

HUGO_VERSION="0.164.0"
BUILD_TEMP_DIR="$(mktemp -d)"
HUGO_CACHEDIR="${PWD}/.vercel/cache/hugo"

cleanup() {
  rm -rf "${BUILD_TEMP_DIR}"
}

trap cleanup EXIT

echo "Installing Hugo ${HUGO_VERSION}..."
curl -sfL -o "${BUILD_TEMP_DIR}/hugo.tar.gz" "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_linux-amd64.tar.gz"
tar -xzf "${BUILD_TEMP_DIR}/hugo.tar.gz" -C "${BUILD_TEMP_DIR}"

export HUGO_CACHEDIR
"${BUILD_TEMP_DIR}/hugo" version
"${BUILD_TEMP_DIR}/hugo" --gc --minify
