// ==UserScript==
// @name        canvas dashboard theme-color
// @match       https://sequoia.instructure.com/*
// ==/UserScript==

// should be same as --j-custom-primary
document.querySelectorAll('meta[name="theme-color"]')[0].content = "#282828"
// document.querySelectorAll('meta[name="theme-color"]')[0].content = "#002244"