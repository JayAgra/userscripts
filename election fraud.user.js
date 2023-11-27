// ==UserScript==
// @name        election fraud
// @match       https://www.mercurynews.com/2023/11/13/vote-now-bay-area-news-group-girls-athlete-of-the-week-92/
// ==/UserScript==
const wait = ms => new Promise(res => setTimeout(res, ms));
async function fraud() {
    document.getElementById("PDI_answer58299064").checked = "true";
    document.getElementById("pd-vote-button12979587").click();
    await wait(100);
    window.location.reload(true);
}
fraud();