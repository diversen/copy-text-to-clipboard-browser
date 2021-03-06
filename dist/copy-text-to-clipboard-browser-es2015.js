"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* Package: copy-text-to-clipboard-browser. Version: 2.0.0. License: MIT. Author: dennis iversen   */(function (f) {
	if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
		module.exports = f();
	} else if (typeof define === "function" && define.amd) {
		define([], f);
	} else {
		var g;if (typeof window !== "undefined") {
			g = window;
		} else if (typeof global !== "undefined") {
			g = global;
		} else if (typeof self !== "undefined") {
			g = self;
		} else {
			g = this;
		}g.copyTextToClipboardBrowser = f();
	}
})(function () {
	var define, module, exports;return function e(t, n, r) {
		function s(o, u) {
			if (!n[o]) {
				if (!t[o]) {
					var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
				}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
					var n = t[o][1][e];return s(n ? n : e);
				}, l, l.exports, e, t, n, r);
			}return n[o].exports;
		}var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
			s(r[o]);
		}return s;
	}({ 1: [function (require, module, exports) {
			var copyTextToClipboard = require('copy-text-to-clipboard');
			module.exports = copyTextToClipboard;
		}, { "copy-text-to-clipboard": 2 }], 2: [function (require, module, exports) {
			'use strict';

			module.exports = function (input) {
				var el = document.createElement('textarea');

				el.value = input;

				// Prevent keyboard from showing on mobile
				el.setAttribute('readonly', '');

				el.style.contain = 'strict';
				el.style.position = 'absolute';
				el.style.left = '-9999px';
				el.style.fontSize = '12pt'; // Prevent zooming on iOS

				var selection = getSelection();
				var originalRange = false;
				if (selection.rangeCount > 0) {
					originalRange = selection.getRangeAt(0);
				}

				document.body.appendChild(el);
				el.select();

				var success = false;
				try {
					success = document.execCommand('copy');
				} catch (err) {}

				document.body.removeChild(el);

				if (originalRange) {
					selection.removeAllRanges();
					selection.addRange(originalRange);
				}

				return success;
			};
		}, {}] }, {}, [1])(1);
});
