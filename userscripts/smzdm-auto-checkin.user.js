// ==UserScript==
// @name         Smzdm auto checkin
// @namespace    https://github.com/glasslion
// @version      0.1
// @description  Smzdm 自动签到
// @author       Leo
// @match        http*://*.smzdm.com/*
// @grant       GM.setValue
// @grant       GM.getValue
// ==/UserScript==


(async function() {
    'use strict';
    var nowDate = new Date().getDate();
    
    if (window.location.pathname === '/') {
        // 首页
        var sign = document.querySelector('.J_punch');
        var text = sign.innerText;
        if(text.indexOf('签到领奖')!=-1){
            sign.click();
        }
        await GM.setValue('smzdmLastCheckinDate', nowDate);
        return
    }

    // 非首页
    var lastDate = await GM.getValue('smzdmLastCheckinDate');
    if (lastDate !== nowDate) {
        window.open('https://www.smzdm.com/', '_blank');
        console.log('今天未签到');
    } else {
        console.log('今天已签到');
    }
})();

