// ==UserScript==
// @name         Github Jupyter Notebook Help
// @namespace    https://github.com/glasslion
// @version      0.1
// @description  Add colab and nbviewer link to jupyter notebooks on Github
// @author       Leo
// @match        https://github.com/*.ipynb
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var rawLink = document.getElementById('raw-url')
    var rawUrl = rawLink.href.replace('/raw/', '/blob/')

    var colabLink = rawLink.cloneNode(true);
    colabLink.innerText = "colab"
    colabLink.href = rawUrl.replace('https://github.com/', 'https://colab.research.google.com/github/')
    rawLink.parentNode.insertBefore(colabLink, rawLink.nextSibling);

    var nbvLink = rawLink.cloneNode(true);
    nbvLink.innerText = "nbviewer"
    nbvLink.href = rawUrl.replace('https://github.com/', 'https://nbviewer.jupyter.org/github/')
    rawLink.parentNode.insertBefore(nbvLink, rawLink.nextSibling);
})();
