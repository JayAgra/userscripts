// ==UserScript==
// @name         fix youtube shorts
// @license      MIT
// @match        *://www.youtube.com/shorts/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const FORWARD_KEY = "ArrowRight";
    const BACKWARD_KEY = "ArrowLeft";
    const FORWARD_KEY_LG = "l"
    const BACKWARD_KEY_LG = "j"
    const SECONDS_TO_SEEK = 3;
    const SECONDS_TO_SEEK_LG = 6;

    waitForElm("#shorts-player").then((ytPlayer) => {
        const actions = {
            [FORWARD_KEY]: () => ytPlayer.seekBy(SECONDS_TO_SEEK),
            [BACKWARD_KEY]: () => ytPlayer.seekBy(-SECONDS_TO_SEEK),
            [FORWARD_KEY_LG]: () => ytPlayer.seekBy(SECONDS_TO_SEEK_LG),
            [BACKWARD_KEY_LG]: () => ytPlayer.seekBy(-SECONDS_TO_SEEK_LG)
        }

        const keysPressed = new Set();
        addEventListener("keydown", e => {
            const key = e.key;
            if (!ytPlayer.getVideoData().isListed // not on shorts page
                || e.target.nodeName == "INPUT" || e.target.id == "contenteditable-root" // target is input box
                || !actions[key] || keysPressed.has(key)) return;
            actions[key]();
            keysPressed.add(key);
        });
        addEventListener("keyup", e => keysPressed.delete(e.key));
        addEventListener("visibilitychange",() => keysPressed.clear()); // prevents keys not being removed when new tab is opened while key down
    });

    function waitForElm(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }

            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }
})();