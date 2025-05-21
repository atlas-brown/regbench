#!/usr/bin/env bash

TOP=$(git rev-parse --show-toplevel)
cd "$TOP" || exit 1

find . -name "package.json" -not -path "*/node_modules/*" -exec jq -r '.name' {} \;
