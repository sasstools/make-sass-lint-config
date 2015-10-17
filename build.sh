#!/bin/sh

npm i browserify make-sass-lint-config
./node_modules/browserify/bin/cmd.js index.js > convert.js

