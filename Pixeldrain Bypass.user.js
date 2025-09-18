// ==UserScript==
// @name         pixeldrain bypass
// @version      2.0.0
// @match        https://pixeldrain.com/u/*
// ==/UserScript==

(function() {
    'use strict';
    
    // Extract the file ID from the current URL
    const currentUrl = window.location.href;
    const fileIdMatch = currentUrl.match(/pixeldrain\.com\/u\/([a-zA-Z0-9]+)/);
    
    if (fileIdMatch && fileIdMatch[1]) {
        const fileId = fileIdMatch[1];
        const newUrl = `https://pd.cybar.xyz/${fileId}`;
        
        // Redirect to the new URL
        window.location.replace(newUrl);
    }
})();