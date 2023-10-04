// ==UserScript==
// @name        set theme-color meta
// @match       <all_urls>
// ==/UserScript==1e313b

//todo 161b22 for github
var metatag = document.createElement('meta');
metatag.name = "theme-color";
if (document.querySelectorAll('meta[name="theme-color"]').length >= 0) {
    console.log('%c[Userscript - Theme Meta] %ctheme color already set', "color:lime;", "color:unset;");
} else {
    if (window.getComputedStyle(document.body, null).getPropertyValue('background-color') !== "rgba(0, 0, 0, 0)") {
        metatag.content = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
    } else {
        metatag.content = "#000000";
    }
    document.head.appendChild(metatag);
    console.log('%c[Userscript - Theme Meta] %cset theme-color', "color:lime;", "color:unset;");
}