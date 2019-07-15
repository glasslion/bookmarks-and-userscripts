// ==UserScript==
// @name         Minify Medium Images
// @namespace     http://github.com/glasslion
// @version      0.1
// @description  Change Medium image size to low resolutions
// @author       Leo
// @match        https://towardsdatascience.com/*
// @match        https://medium.com/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

        $('.progressiveMedia-image').each(function(i, el){
            var $this = jQuery(el);
            var url = $this.attr('src');
            if(url){
                url = url.replace(/max\/\d+\//, 'max/600/');
                $this.attr('src', url);
            }
            url = $this.attr('data-src');
            if(url){
                url = url.replace(/max\/\d+\//, 'max/600/');
                $this.attr('data-src', url);
            }
        })

        $('.progressiveMedia-thumbnail').remove();
})();
