#!/usr/bin/env bash
set -x
set -e

while read -r line; do
  pkg_name=$(echo "$line" | grep -oE 'https://www\.npmjs\.org/package/[^)]+' | awk -F/ '{print $NF}')
  if [ -n "$pkg_name" ]; then
    npm pack "$pkg_name" >/dev/null 2>&1
  fi
  tarball=$(find . -name "$pkg_name-*.tgz" | head -n 1)
  if [ -n "$tarball" ]; then
    mkdir -p "$pkg_name"
    tar -xzf "$tarball" -C "$pkg_name" --strip-components=1
    rm "$tarball"
  fi
done < "$1"
