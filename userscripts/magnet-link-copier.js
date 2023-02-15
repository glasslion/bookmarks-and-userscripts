// ==UserScript==
// @name         Magnet Link Copier
// @namespace    http://github.com/glasslion
// @version      0.1
// @description  Open links in new tabs for hckrnews!
// @author       Leo
// @match        https://thepiratebay.org/*
// @match        https://www.javbus.com/*
// @match        https://www.1377x.to/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js
// @grant        GM_setClipboard
// @grant        GM_notification
// ==/UserScript==



function setClipboard (clipText, magnetLink) {
    // 如果剪贴板里已经是磁链了， 则追加。 否则覆盖。
    if (clipText.indexOf(magnetLink) !== -1) {
        GM_notification({ title: 'Duplicated link, ignored', text: magnetLink });
        return
    }
    if (clipText.startsWith("magnet:")) {
        clipText += "\n" + magnetLink

    } else {
        clipText = magnetLink;
    }
    GM_setClipboard(clipText);
    GM_notification({ title: 'Copied magnet', text: magnetLink });
}

(function () {
    'use strict';
    console.log("Magnet Link Copier Activated");

    $(document).on('click', 'a', function (e) {
        var link = $(this).attr('href');
        if (!link.startsWith("magnet:")) {
            return;
        }
        console.log("clicked magnet link:" + link);

        navigator.clipboard.readText().then(
            (clipText) => setClipboard(clipText, link)
        );
        e.preventDefault();
    });
})();
