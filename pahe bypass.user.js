// ==UserScript==
// @name         pahe bypass
// @version      0.90
// @match        https://teknoasian.com/*
// @match        https://intercelestial.com/*
// @match        https://linegee.net/*
// @match        https://spacetica.com/*
// @match        https://pahe.plus/*
// @match        https://oii.la/*
// @match        https://uii.io/*
// @match        https://wp2hostt.com/*
// @match        https://wordcounter.icu/*
// @match        https://tpi.li/*
// @match        https://blogmystt.com/*
// @match        https://old.pahe.plus/*
// @match        https://hosttbuzz.com/*
// @match        https://policiesreview.com/*
// @match        https://healthylifez.com/*
// @match        https://insurancemyst.com/*
// @match        https://*.gdflix.dad/file/*
// @match        https://pixeldrain.com/*
// @match        https://hostingbixby.com/*
// @match        https://policiesbuzzz.com/*
// ==/UserScript==

(function() {
    'use strict';

    let site = window.location.hostname;

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

    if (site === "spacetica.com" || site === "old.pahe.plus") {
        addStyle(`
            .btn.btn-primary.btn-xs, a:has(button) {
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
            a > button {
                height: 100%;
                width: 100%;
                border-radius: 0;
                font-size: 10vw;
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
            * {
                overflow: hidden;
            }
        `);
    } else if (site === "blogmystt.com" || site === "wp2hostt.com" || site === "intercelestial.com" || site === "hosttbuzz.com" || site === "policiesreview.com" ||
               site === "healthylifez.com" || site === "insurancemyst.com" || site === "hostingbixby.com" || site === "policiesbuzzz.com") {
        addStyle(`
            .qc-cmp2-persistent-link {
                z-index: 0;
            }
            #qc-cmp2-container {
                display: none;
            }
            div.wait > center > img,
            #lite-human-verif-button {
                position: fixed;
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                z-index: 2147483645 !important;
                background: green;
                opacity: 1 !important;
            }
            #startButton > *,
            #getnewlink > * {
                display: none;
            }
            #generater > img {
                display: none;
            }
            #generater,
            #lite-start-sora-a,
            #startButton,
            .humanVerify .verify {
                position: fixed !important;
                height: 100%;
                width: 50%;
                z-index: 2147483645 !important;
                background: red !important;
                opacity: 1 !important;
                cursor: pointer;
                border: 0;
                outline: 0;
                border-radius: 0;
                box-shadow: unset;
            }
            .skipcontent {
                position: fixed !important;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                z-index: 2147483646 !important;
                margin: auto;
                background: purple !important;
                opacity: 1 !important;
                cursor: pointer;
                border: 0;
                outline: 0;
                border-radius: 0;
                box-shadow: unset;
            }
            #showlink,
            #lite-end-sora-button,
            #getnewlink,
            .postnext {
                position: fixed !important;
                height: 100%;
                width: 50%;
                z-index: 2147483645 !important;
                background: blue !important;
                opacity: 1 !important;
                cursor: pointer;
                border: 0;
                outline: 0;
                border-radius: 0;
                box-shadow: unset;
            }
            #getnewlink, #startButton {
                display: flex !important;
                height: 100% !important;
                width: 50% !important;
                border: 0;
                outline: 0;
                margin: 0 !important;
                border-radius: 0;
                color: transparent;
            }
            @media only screen and (orientation: landscape) {
                #generater,
                #lite-start-sora-a,
                #startButton,
                .humanVerify .verify {
                    left: 0;
                }
                #showlink,
                #lite-end-sora-button,
                #getnewlink,
                .postnext {
                    right: 0;
                }
                #generater, #showlink,
                #lite-start-sora-a,
                #lite-end-sora-button,
                #startButton, #getnewlink,
                .humanVerify .verify,
                .postnext {
                    top: 0;
                    height: 100%;
                    width: 50%;
                }
            }
            @media only screen and (orientation: portrait) {
                #generater,
                #lite-start-sora-a,
                #startButton {
                    top: 0;
                }
                #showlink,
                #lite-end-sora-button,
                #getnewlink {
                    bottom: 0;
                }
                #generater, #showlink,
                #lite-start-sora-a,
                #lite-end-sora-button,
                #startButton, #getnewlink,
                .humanVerify .verify,
                .postnext {
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
                z-index: 2147483644 !important;
                background: black;
                opacity: 1;
            }
            #soralink-human-verif-main-cxxd {
                display: none;
            }
            * {
                overflow: hidden;
            }
        `);
    } else if (site === "linegee.net") {
        addStyle(`
            .btn {
                position: fixed !important;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                z-index: 2147483645 !important;
                background: olive !important;
                opacity: 1 !important;
                cursor: pointer;
                border: 0;
                outline: 0;
                border-radius: 0;
                box-shadow: unset;
                color: transparent !important;
            }
            #backdrop {
                position: fixed;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                z-index: 2147483644 !important;
                background: black;
                opacity: 1;
            }
        `);
    } else if (site === "oii.la" || site === "tpi.li") {
        addStyle(`
            * {
                overflow: hidden !important;
            }
            html, body {
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: darkseagreen;
            }
            html > *:not(body) {
                display: none;
            }
            body > *:not(form) {
                position: fixed;
                top: -200svh;
                left: -200svw;
            }
            body > a.get-link {
                position: fixed;
                height: 100% !important;
                width: 100% !important;
                z-index: 2147483645 !important;
                background: forestgreen;
                opacity: 1 !important;
                left: 0;
                top: 0;
                border-radius: 0 !important;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 0 !important;
                font-size: calc((5svh + 5svw) / 2);
            }
            body > a.get-link:hover, body > a.get-link:focus {
                background: forestgreen;
            }
        `);
    } else if (site === "teknoasian.com") {
        addStyle(`
            html > body, html > body *, html > body *::before, html > body *::after {
                background: black !important;
                color: black !important;
                border: 0 !important;
                box-shadow: none !important;
                text-shadow: none !important;
                cursor: default;
            }
            input, .avatar, textarea, img {
                opacity: 0 !important;
            }
            #backdrop {
                position: fixed;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                z-index: 2147483644 !important;
                background: black;
                opacity: 1;
            }
            .humanVerify .verify {
                background: yellow !important;
            }
            .Skipper .skipcontent {
                background: orange !important;
            }
            form .postnext {
                background: red !important;
            }
            .humanVerify .verify, .Skipper .skipcontent, form .postnext {
                height: 5rem;
                width: 100svw;
                position: absolute;
                left: 0;
                z-index: 2147483645 !important;
            }
        `);
    } else if (site === "wordcounter.icu") {
        addStyle(`
            * {
                overflow: hidden !important;
            }
            html, body {
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: black;
            }
            html > *:not(body) {
                display: none;
            }
            button#getlink, #invisibleCaptchaShortlink, a.get-link[href]:not(.disabled) {
                position: fixed;
                height: 100% !important;
                width: 100% !important;
                /*width: 50%;*/
                z-index: 2147483645 !important;
                background: darkslateblue;
                opacity: 1 !important;
                left: 0;
                top: 0;
                border-radius: 0 !important;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 0 !important;
                font-size: calc((5svh + 5svw) / 2);
            }
            a.get-link[href]:not(.disabled) {
                background: forestgreen;
            }
            #backdrop {
                position: fixed;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                z-index: 2147483644 !important;
                background: black;
                opacity: 1;
            }
            body > div:has(iframe[title*='recaptcha']) {
                z-index: 2147483647;
            }
        `);
    }

    const makeZERO = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>";

    try {
        let element;

        element = document.createElement("div");
        element.id = "backdrop";
        document.body.appendChild(element);
    } catch {}

    function eraseImages() {
        let allImg = document.querySelectorAll('[src*=".png"],[src*=".jpg"],[src*=".gif"],[src*=".webp"]');

        for (let x = 0; x < allImg.length; x++) {
            allImg[x].src = makeZERO;
        }
    }

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

    function clickLinks() {
        if (window.doneClick !== true) {
            if (window.location.origin.match(/pahe\.plus/) || window.location.origin.match(/oii\.la/) || window.location.origin.match(/tpi\.li/)) {
                let linkbtn = document.querySelector('.get-link:not(.disabled)');
                window.location.assign(linkbtn.href);
                window.doneClick = true;
            } else if (window.location.origin.match(/wp2hostt\.com/)) {
                let linkbtn = document.querySelector('button#getlink');
                linkbtn.click();
                window.doneClick = true;
            } else if (window.location.origin.match(/linegee\.net/)) {
                let scripts = document.querySelectorAll('script');
                for (let x = 0; x < scripts.length; x++) {
                    if (scripts[x].textContent.match(/location\.href.*atob/)) {
                        if (document.readyState.match(/complete/i)) {
                            let base64 = scripts[x].textContent.replace(/[\t\s]/g,'').replace(/^.*location.href.*atob\('(.*)'\).*/,'$1');
                            setTimeout(() => {
                                window.location.href = window.location.href + atob(base64);
                            }, 5000);
                            window.doneClick = true;
                        }
                    }
                }
            }
        }

        if (window.location.origin.match(/wordcounter\.icu/) && document.readyState === 'complete') {
            if (document.querySelector('#invisibleCaptchaShortlink') && window.doneClick1 !== true) {
                document.querySelector('#invisibleCaptchaShortlink').click();
                window.doneClick1 = true;
            }
            if (document.querySelector('a.get-link[href]:not(.disabled)') && window.doneClick2 !== true) {
                window.location.assign(document.querySelector('a.get-link[href]:not(.disabled)').href);
                window.doneClick2 = true;
            }
        }
    }

    function pullButton() {
        // Bring the captcha/link to the foreground
        if (site === "oii.la" || site === "tpi.li") {
            try {
                let formX = document.querySelector('form:not(.td-search-form):not(.go-link)');
                if (formX.getAttribute('moved') !== 'true') {
                    document.body.appendChild(formX);
                    formX.setAttribute('moved','true');
                    formX.querySelector('button').removeAttribute('onclick');
                    formX.querySelector('button').removeAttribute('disabled');
                }
            } catch {}

            try {
                let linkX = document.querySelector('a.get-link[href]:not(.disabled)');
                if (linkX.getAttribute('moved') !== 'true') {
                    document.body.appendChild(linkX);
                    linkX.setAttribute('moved','true');
                    linkX.removeAttribute('onclick');
                    linkX.removeAttribute('disabled');
                }
            } catch {}
        }
    }

    function clearOnclick() {
        // Remove onclick ads
        let onAds = document.querySelectorAll('*[onclick*="window.open"]');

        for (let x = 0; x < onAds.length; x++) {
            onAds[x].removeAttribute('onclick');
        }

        // Weird links
        let anAds = document.querySelectorAll('*[href*="https:///"]');

        for (let x = 0; x < anAds.length; x++) {
            anAds[x].removeAttribute('href');
        }
    }

    function blogmysttAutomatic() {
        // Autoclick blogmystt
        let first = document.querySelector('a#startButton'),
            second = document.querySelector('button#getnewlink');

        if (window.clickFirst !== 'true') {
            try {
                first.click();
                window.clickFirst = 'true';
            } catch {}
        }
        if (window.clickSecond !== 'true') {
            try {
                second.click();
                window.clickSecond = 'true';
            } catch {}
        }
    }

    function autoTeknoasian() {
        if (document.readyState !== 'complete' && document.readyState !== 'interactive') {return;}

        // redo the scripts
        /*function redoOne() {
            if (document.querySelector('script[exist="true"]')) {return;}

            let allScript = document.querySelectorAll('script:not([src])');

            for (let x = 0; x < allScript.length; x++) {
                if (allScript[x].textContent.match(/isTrusted/) && allScript[x].textContent.match(/\.humanVerify/)) {
                    let newScript = document.createElement('script');
                    newScript.setAttribute('type','text/javascript');
                    newScript.setAttribute('exist','true');
                    newScript.innerHTML = allScript[x].textContent.replace(/!e\.isTrusted/g, 'e.isTrusted')
                                                                  .replace(/button\.verify/g, 'h4')
                                                                  .replace(/^[\s\S]*?(document.querySelector.*humanVerify>h4)/, '$1')
                                                                  .replace(/(xxc.submit[\s\S\n]*xxc.submit)[\s\S\n]*$/,'$1();}});}}}, 1000);});');

                    document.body.appendChild(newScript);
                }
            }
        }*/

        // scroll to buttons
        let verify = document.querySelector('.humanVerify .verify'),
            // verifySecret = document.querySelector('.humanVerify > h4'),
            skipcontent = document.querySelector('.Skipper > .skipcontent'),
            postnext = document.querySelector('.postnext');

        if (verify) {
            verify.scrollIntoView({ behavior: 'auto', block: 'center' });

            if (window.clickOne !== 'true') {
                // redoOne();

                try {
                    // verifySecret.click();
                    verify.click();
                    window.clickOne = 'true';
                } catch {}
            }
        }

        if (skipcontent) {
            skipcontent.scrollIntoView({ behavior: 'auto', block: 'center' });

            if (window.clickTwo !== 'true') {
                try {
                    setTimeout(() => {
                        skipcontent.click();
                    }, 2000);
                    window.clickTwo = 'true';
                } catch {}
            }
        }

        if (postnext) {
            postnext.scrollIntoView({ behavior: 'auto', block: 'center' });

            if (window.clickThree !== 'true') {
                try {
                    setTimeout(() => {
                        postnext.closest('form').submit();
                    }, 1000);
                    window.clickThree = 'true';
                } catch {}
            }
        }
    }

    function pixeldad() {
        if (!window.location.href.match(/gdflix\.dad/) || window.pixeldad == true) {return;}

        let pd = document.querySelector('a[href*="pixeldrain"]'),
        pdid = pd.href.replace(/.*file\/(.*)\?.*/,'$1'),
        pdn = document.querySelectorAll('.list-group-item')[0].textContent.replace(/^.*\: /,'');

        pd.href = 'https://gamedriveorg.pd24.workers.dev/api/file/' + pdid + '?' + encodeURI(pdn);

        window.pixeldad = true;
    }

    setInterval(function() {
        try{clickLinks();} catch{}
        try{fixAdblockBackdrop();} catch{}
        try{pullButton();} catch{}
        try{clearOnclick();} catch{}
        try{blogmysttAutomatic();} catch{}
        try{eraseImages();} catch{}
        try{autoTeknoasian();} catch{}
        try{pixeldad();} catch {}
    }, 10);
})();