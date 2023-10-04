// ==UserScript==
// @name        fuck the college board
// @match       *://apstudents.collegeboard.org/*
// ==/UserScript==

//cb? more like cbt
document.getElementsByClassName("cb-program-name")[0].children[0].innerHTML = " College Board's Victims"
var fuckthecb = document.createElement('strike')
fuckthecb.innerHTML = "AP Students";
document.getElementsByClassName("cb-program-name")[0].insertBefore(fuckthecb, document.getElementsByClassName("cb-program-name")[0].firstChild)