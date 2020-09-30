// ==UserScript==
// @name         hckrnews Open in New Tab
// @namespace    http://github.com/glasslion
// @version      0.1
// @description  Open links in new tabs for hckrnews!
// @author       Leo
// @match        https://hckrnews.com/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(document).on('click', '#entries .row a', function(e){
        e.preventDefault();
        var url = $(this).attr('href');
        window.open(url, '_blank');
    });
})();
