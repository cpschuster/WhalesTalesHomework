#!/usr/bin/env bash

set -e

if [ ! -d "node" ]; then
    curl -sL https://git.io/n-install | N_PREFIX=$(pwd)/node bash -s -- -y lts
fi

export N_PREFIX="$(pwd)/node"; [[ :$PATH: == *":$N_PREFIX/bin:"* ]] || PATH+=":$N_PREFIX/bin"

npm install

./node_modules/inliner/cli/index.js index.html > index.all.html