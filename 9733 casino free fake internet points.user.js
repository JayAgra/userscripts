// ==UserScript==
// @name        9733 casino free fake internet points
// @match       https://www.9733inc.com/index/gamble.php
// ==/UserScript==

if (Number(document.querySelector("body > center:nth-child(1) > div > span > b").innerText) <= 6250) {
    window.location.reload();
}