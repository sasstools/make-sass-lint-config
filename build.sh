#!/bin/sh

npm i browserify make-sass-lint-config
browserify index.js > convert.js
