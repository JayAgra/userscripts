// ==UserScript==
// @name        beacon cooker
// @match       *://*/*
// ==/UserScript==

(function() {
    'use strict';
    navigator.sendBeacon = function() {
        console.log("%cFuck You – Beacon API disabled", "font-size: x-large; color: green");
        return false;
    };
})();