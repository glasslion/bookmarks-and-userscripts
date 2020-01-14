// ==UserScript==
// @name Hide Zhihu's Stupid Page Titile
// @namespace https://github.com/glasslion/
// @version 0.1
// @match https://www.zhihu.com/question/*
// @license MIT
// @grant none
// ==/UserScript==
(function() {
    'use strict';
    for (const el of document.querySelectorAll('.PageHeader .QuestionHeader-title')) {
        el.remove();
    }
})();
