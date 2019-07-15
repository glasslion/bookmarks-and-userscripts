// ==UserScript==
// @name          Skip linkstars 
// @author        Leo
// @namespace     http://github.com/glasslion
// @version       1.2
// @description   Drop the UTM params from a URL when the page loads.
// @extra         Cuz you know they're all ugly n shit.
// @include       http*://www.linkstars.com/*
// ==/UserScript==



function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

if (window.history.replaceState){
  var qs = document.location.search;
  var toUrl = getQueryParams(qs).to;
  console.log(toUrl);
  window.location.href = toUrl;
}
