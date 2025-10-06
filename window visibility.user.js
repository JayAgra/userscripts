// ==UserScript==
// @name         window visibility
// @match       *://*/*
// @run-at      document-start
// @weight      900
// ==/UserScript==

document.hasFocus = function () { console.log("Webpage attempted to get document focus status."); return true; };
window.hasFocus = function () { console.log("Webpage attempted to get document focus status."); return true; };

let eventsToBlock = [
    "visibilitychange",
    "webkitvisibilitychange",
    "mozvisibilitychange",
    "hasfocus",
    "pagehide",
    "pageshow",
    "freeze",
    "resume",
    "beforeunload",
    "unload",
    "unloadstart",
    "volumechange",
    "popstate",
    "contextmenu",
]

const originalAddEventListener = HTMLElement.prototype.addEventListener;
HTMLElement.prototype.addEventListener = function(type, listener, options) {
    if (eventsToBlock.includes(type)) {
        if (this instanceof HTMLInputElement || this instanceof HTMLTextAreaElement || this instanceof HTMLSelectElement || this instanceof HTMLButtonElement || this typeof HTMLFormElement) {
            console.log(`Permitted form element listner - ${type} on ${this}`)
            return originalAddEventListener.call(this, type, listener, options);
        }
        console.log(`Blocked ${type} listener creation on ${this}`);
        return;
    }
    return originalAddEventListener.call(this, type, listener, options);
};

document.onvisibilitychange = null;
window.onvisibilitychange = null;
Object.defineProperty(window, "visibilityState", { value: "visible" });
Object.defineProperty(document, "visibilityState", { value: "visible" });
Object.defineProperty(window, "hidden", { value: false });
Object.defineProperty(document, "hidden", { value: false });
Object.defineProperty(window, "onfocus", { get: function () {}, set: function () {}, configurable: true });
Object.defineProperty(document, "onfocus", { get: function () {}, set: function () {}, configurable: true });
Object.defineProperty(window, "onblur", { get: function () {}, set: function () {}, configurable: true });
Object.defineProperty(document, "onblur", { get: function () {}, set: function () {}, configurable: true });
Object.defineProperty(window, "mozHidden", { value: false });
Object.defineProperty(document, "mozHidden", { value: false });
Object.defineProperty(window, "webkitHidden", { value: false });
Object.defineProperty(document, "webkitHidden", { value: false });
Object.defineProperty(window, "webkitVisibilityState", { value: "visible" });
Object.defineProperty(document, "webkitVisibilityState", { value: "visible" });

let fakeStart = performance.now();
let realStart = Date.now();

const originalRaf = window.requestAnimationFrame;
window.requestAnimationFrame = function(callback) {
    return originalRaf.call(window, function(ts) {
        callback(Date.now() - realStart + fakeStart);
    });
};

const BREAKING_SITES = [
    "www.youtube.com",
];

if (BREAKING_SITES.includes(window.location.host)) {
    performance.now = function() {
//         console.log("Webpage attempted to call performance.now.");
        return Date.now() - realStart + fakeStart;
    }
} else {
    performance.now = function() {
//         console.log("Webpage attempted to call performance.now.");
        return Math.round(600000000 * (1 / (Math.random() + 1)));
    }
}
