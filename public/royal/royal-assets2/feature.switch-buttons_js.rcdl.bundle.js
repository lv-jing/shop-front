(window["RCDLjsonFunction"]=window["RCDLjsonFunction"]||[]).push([[27],{188:function(t,e,a){"use strict";a.r(e);var n=a(416);var r=a.n(n);var i=a(417);var c=a(4);var s=a.n(c);var l=a(8);var u=a.n(l);var o=a(0);var f=a.n(o);RCDL.features.switchButtons=function(t,e){var a;f()(a=u()(t)).call(a,function(a){var n;var r=typeof e==="undefined"?window.document:e.parentNode;var i=r.querySelectorAll(t[a]);var c="";var l=false;var o=false;f()(n=u()(i)).call(n,function(e){var n,r;var u=i[e].textContent;l=s()(n=t[a]).call(n,"icon")!==-1;o=s()(r=t[a]).call(r,"text")!==-1;if(i[e].getAttribute("data-btn-"+a+"-active")!=="true"){i[e].setAttribute("data-btn-"+a+"-active","true");i[e].addEventListener("click",function(){c=i[e].getAttribute(t[a].replace(/(\[|\])/g,""));if(l){c=JSON.parse(c.replace(/'/g,'"'));var n=c[0];var r=c[c.length-1];if(RCDL.utilities.hasClass(i[e],n)){RCDL.utilities.modifyClass("remove",i[e],n);RCDL.utilities.modifyClass("add",i[e],r)}else{RCDL.utilities.modifyClass("remove",i[e],r);RCDL.utilities.modifyClass("add",i[e],n)}}if(o){i[e].textContent=i[e].textContent===c?u:c}})}})})};e["default"]={fn:function(){var t=Object(i["a"])(r.a.mark(function _callee(t){return r.a.wrap(function _callee$(e){while(1){switch(e.prev=e.next){case 0:return e.abrupt("return",RCDL.features.switchButtons(["[data-rc-switch-icon]","[data-rc-switch-text]"],t));case 1:case"end":return e.stop()}}},_callee)}));function fn(e){return t.apply(this,arguments)}return fn}(),trigger:{selector:["[data-rc-switch-icon]","[data-rc-switch-text]"]}}}}]);