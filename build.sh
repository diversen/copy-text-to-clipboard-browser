#!/bin/sh
browserify node_modules/copy-text-to-clipboard/ -s copyTextToClipboard -o copy-text-to-clipboard.js -t [ babelify --presets [ es2015 ] ]
