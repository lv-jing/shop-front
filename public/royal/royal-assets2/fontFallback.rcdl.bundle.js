(window["RCDLjsonFunction"]=window["RCDLjsonFunction"]||[]).push([[31],{196:function(e,t,n){"use strict";n.r(t);var a=n(416);var i=n.n(a);var c=n(417);RCDL.utilities.fontFallback={init:function init(){if(!RCDL.utilities.fontFallback.checked){var e=null;var t=window.document.documentElement.getAttribute("lang");switch(t){case"en":t="default";break;default:t="Roboto"}if(t!=="default"){e=document.createElement("script");e.onload=function(){WebFont.load({google:{families:[t]}})};e.src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";document.head.appendChild(e)}RCDL.utilities.fontFallback.checked=true}},active:sessionStorage.getItem("rcdl-fontfallback")!=="active"?false:"active",checked:false};t["default"]={fn:function(){var e=Object(c["a"])(i.a.mark(function _callee(){return i.a.wrap(function _callee$(e){while(1){switch(e.prev=e.next){case 0:return e.abrupt("return",RCDL.utilities.fontFallback.init());case 1:case"end":return e.stop()}}},_callee)}));function fn(){return e.apply(this,arguments)}return fn}(),trigger:{selector:[]}}}}]);