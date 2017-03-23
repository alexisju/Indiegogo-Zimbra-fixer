// ==UserScript==
// @name        Indiegogo zimbra fixer
// @description A simple script to fix images display of Indiegogo Newsletter on Zimbra webmail.
// @author			alexisju
// @namespace   webmail.web4all.fr
// @include     https://webmail.web4all.fr/*
// @version     1
// @grant       none
// @run-at			document-end
// @license			GPL v3 or later version
// @downloadURL		https://raw.githubusercontent.com/alexisju/indiegogo-zimbra-fixer/master/indiegogo-zimbra-fixer.user.js
// ==/UserScript==


document.body.innerHTML = document.body.innerHTML.replace('pnsrc','src');
