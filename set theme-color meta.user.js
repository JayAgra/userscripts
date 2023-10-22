// ==UserScript==
// @name        set theme-color meta
// @match       <all_urls>
// ==/UserScript==

const sites = {
    "duckduckgo.com": "#111217",
    "github.com": "#000",
    "sequoia.instructure.com": "#282828",
    "www.youtube.com": "#0f0f0f",
    "9733inc.com": "rgba(2,0,36,1)",
    "bandcamp.com": "#4c9ebf",
    "codingbat.com": "#000",
    "www.last.fm": "#d92323"
}
if (Object.hasOwn(sites, window.location.host)) {
    document.head.insertAdjacentHTML("afterbegin", `<meta name="theme-color" content="${sites[window.location.host]}">`);
    console.log('%c[Userscript - Theme Meta] %cset theme-color', "color:lime;", "color:unset;");
} else {
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
}