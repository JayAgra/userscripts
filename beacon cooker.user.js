// ==UserScript==
// @name        beacon cooker
// @match       *://*/*
// @run-at      document-start
// @weight      800
// ==/UserScript==

(function() {
    'use strict';
    navigator.sendBeacon = function(url, data) {
        console.log(`%cFuck You – Beacon API disabled%c\nURL Passed: ${url}`, "font-size: x-large; color: green", "all: inherit");
        // console.log(data);
        return true;
    };
})();