// ==UserScript==
// @name Auto Reconnect Google Colab 
// @namespace https://github.com/glasslion/
// @version 1.1
// @description Automatically reconnect to Colab's session without clicking button.
// @author PartMent
// @match https://colab.research.google.com/*
// @match http://colab.research.google.com/*
// @match https://*.research.google.com/*
// @match http://*.research.google.com/*
// @license MIT
// @grant none
// ==/UserScript==


//Keep Page Active

setInterval(function () {
    var ok = document.getElementById('connect');
    if(ok.textContent.includes("重新连接") || ok.textContent.includes("Connect") || ok.textContent.includes("connect") || ok.textContent.includes("CONNECT")) {
        console.log('Reconnecting...');
        ok.click();
        console.log('Connected');
    }
}, 1000*60);
