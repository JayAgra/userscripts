// ==UserScript==
// @name         window visibility
// @match       *://*/*
// ==/UserScript==

let events_to_block = [
  "visibilitychange",
  "webkitvisibilitychange",
  "mozvisibilitychange",
  "hasFocus",
  "blur",
  "focus"
]

for (let event_name of events_to_block) {
  document.addEventListener(event_name, function (event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
  }, true);
}

for (let event_name of events_to_block) {
  window.addEventListener(event_name, function (event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
  }, true);
}


document.hasFocus = function () { return true; };
document.onvisibilitychange = null;
Object.defineProperty(document, "visibilityState", { value: "visible" });
Object.defineProperty(document, "hidden", { value: false });
Object.defineProperty(document, "mozHidden", { value: false });
Object.defineProperty(document, "webkitHidden", { value: false });
Object.defineProperty(document, "webkitVisibilityState", { value: "visible" });