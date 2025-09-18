// ==UserScript==
// @name        pahe.in skipper
// @match       https://intercelestial.com/*
// ==/UserScript==

(function() {
    'use strict';

    function addStyle(css) {
        var head, style;
        head = document.querySelector('head');
        if (!head) {
            window.location.reload();
        }
        style = document.createElement('style');
        style.innerHTML = css;
        head.appendChild(style);
    }

    if (window.location.hostname == "linegee.net") {
        addStyle(`.btn.btn-primary.btn-xs {
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    z-index: 2147483647 !important;
                    opacity: 1 !important;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 4rem;
                    border-radius: 0;
                  }
                  #backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    z-index: 2147483646 !important;
                    background: black;
                    opacity: 1;
                  }
                  * {
                    overflow: hidden;
                  }`);
    } else if (window.location.hostname == "intercelestial.com") {
        addStyle(`.qc-cmp2-persistent-link {
                    z-index: 0;
                  }
                  #qc-cmp2-container {
                    display: none;
                  }
                  div.wait > center > img {
                    position: fixed;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 100%;
                    z-index: 2147483646 !important;
                    background: green;
                    opacity: 1 !important;
                  }
                  #generater > img {
                    display: none;
                  }
                  #generater {
                    position: fixed;
                    height: 100%;
                    width: 50%;
                    z-index: 2147483646 !important;
                    background: red;
                    opacity: 1 !important;
                  }
                  #showlink {
                    position: fixed;
                    height: 100%;
                    width: 50%;
                    z-index: 2147483646 !important;
                    background: blue;
                    opacity: 1 !important;
                  }
                  @media only screen and (orientation: landscape) {
                    #generater {
                      left: 0;
                    }
                    #showlink {
                      right: 0;
                    }
                    #generater, #showlink {
                      top: 0;
                      height: 100%;
                      width: 50%;
                    }
                  }
                  @media only screen and (orientation: portrait) {
                    #generater {
                      top: 0;
                    }
                    #showlink {
                      bottom: 0;
                    }
                    #generater, #showlink {
                      left: 0;
                      height: 50%;
                      width: 100%;
                    }
                  }
                  #backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    z-index: 2147483645 !important;
                    background: black;
                    opacity: 1;
                  }
                  #soralink-human-verif-main-cxxd {
                    display: none;
                  }
                  * {
                    overflow: hidden;
                  }`);
    }

    const makeZERO = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 0 0' xml:space='preserve'></svg>";

    let oneClick = false;

    setInterval(function() {
        delayButtons();

        try {
            document.querySelector("#soralink-human-verif-main").src = makeZERO;
        } catch {}
        try {
            document.querySelector("#showlink").src = makeZERO;
        } catch {}
        try {
            if (oneClick === true) {return;}
            document.querySelector('.btn.btn-primary.btn-xs').click();
            oneClick = true;
        } catch {}
    }, 200);

    try {
        let element;

        element = document.createElement("div");
        element.id = "backdrop";
        document.body.appendChild(element);
    } catch {}

    function delayButtons() {
        let countDown = document.querySelectorAll('center span[id^="_"]'),
            generater = document.querySelector('#generater'),
            showlink = document.querySelector('#showlink');

        try {
            if (countDown[0].innerText.match('0 Seconds')) {
                generater.classList.add('ready');
            }
        } catch {}

        try {
            if (countDown[1].innerText.match('0 Seconds')) {
                showlink.classList.add('ready');
            }
        } catch {}
    }

    function fixAdblockBackdrop() {
        let backdrop = document.getElementById('backdrop');

        let backA = backdrop.attributes;

        for (let x = 0; x < backA.length; x++) {
            if (backA[x].name !== 'id') {
                backdrop.removeAttribute(backA[x].name);
            }
        }
    }

    try {
        setInterval(fixAdblockBackdrop, 10);
    } catch {}
})();