#/bin/sh
browserify-sa
babel ./dist/copy-text-to-clipboard-browser.js --out-file ./dist/copy-text-to-clipboard-browser-es2015.js
uglifyjs dist/copy-text-to-clipboard-browser-es2015.js > dist/copy-text-to-clipboard-browser-es2015.min.js
