// ==UserScript==
// @name Google Search Language Filter Plus
// @author       Leo
// @include https://www.google.com/*
// @grant none
// ==/UserScript==

(function() {
    function addNewLangFilters() {
        const langList = [
            ['lang_zh-CN', '中文 (简体)'],
            ['lang_ja', '日本語'],
            ['lang_en', 'English'],
        ]
        langList.reverse()
        let langItems = document.querySelectorAll("ul.hdtbU")[0].querySelectorAll(".hdtbItm")
        let primaryLang = langItems[1]
        let search_qs = primaryLang.querySelector('a').href

        for (const [code, name] of langList) {
            let newLang = primaryLang.cloneNode(true)
            let newLink = newLang.querySelector('a')
            newLink.innerHTML = name
            let url = new URL(newLink.href)
            let qs = new URLSearchParams(url.search);
            qs.set('lr', code)
            url.search = qs.toString()
            newLink.href = url.href
            primaryLang.after(newLang)
        }
    }
    function enableSearchTools() {
        document.getElementById('hdtb-tls').click()
    }

    setTimeout(addNewLangFilters, 1000*3)
})();
