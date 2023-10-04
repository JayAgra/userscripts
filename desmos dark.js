// ==UserScript==
// @name          Desmos Dark
// @include       https://www.desmos.com/calculator*
// @run-at        document-start
// ==/UserScript==
(function() {var css = [
	".dcg-grapher { filter: invert(100%); background: beige; }",
	".dcg-pillbox-container { filter: invert(100%); }",
	".dcg-exppanel-outer,.dcg-options-menu-container { filter: invert(100%); }",
	".dcg-expression-top-bar { background: linear-gradient(#eaeaea, #fcfcfc) !important; }",
	".dcg-keys-container { filter: invert(100%); }",
	".dcg-show-keypad-container { filter: invert(100%); }",
	".dcg-exppanel .dcg-expressionitem.dcg-selected .dcg-tab, .dcg-exppanel .dcg-expressionitem.dcg-dragging .dcg-tab {",
	"    background: #000000 !important;",
	"}",
	".dcg-exppanel .dcg-expressionitem.dcg-selected, .dcg-exppanel .dcg-expressionitem.dcg-dragging {",
	"    border-color: #000000 !important;",
	"    border-right: 1px solid #000000 !important;",
	"}",
	".dcg-tooltipped-error {",
	"    color: #00ffff;",
	"}",
	".dcg-btn-blue {",
	"    background: #AD7036;",
	"}",
	".dcg-popover {",
	"    filter: invert(100%);",
	"}",
	".modal,.dcg-google-icon { filter: invert(100%); }",
	".dcg-expressions-branding, .dcg-graphpaper-branding {",
	"    width: 250px;",
	"    margin-left: -125px;",
	"}",
	".dcg-powered-by { font-size: 0; }",
	".dcg-icon-desmos {display: none;}",
	".graph-preview { filter: invert(100%); }",
	".preview-graph-area { filter: invert(100%); }",
	".dcg-expressionitem.dcg-expressiontext .dcg-icon-text { opacity: 1 !important; }"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
