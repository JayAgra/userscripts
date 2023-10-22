// ==UserScript==
// @name        9733 casino free fake internet points
// @match       https://www.9733inc.com/index/gamble.php
// ==/UserScript==

if (Number(document.getElementsByTagName("span")[0].innerText) <= 4800) {
    window.location.reload();
}