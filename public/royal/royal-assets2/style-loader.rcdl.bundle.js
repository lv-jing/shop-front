(window["RCDLjsonFunction"]=window["RCDLjsonFunction"]||[]).push([[2],{414:function(e,t,n){"use strict";var r=function getTarget(){var e={};return function memorize(t){if(typeof e[t]==="undefined"){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement){try{n=n.contentDocument.head}catch(e){n=null}}e[t]=n}return e[t]}}();e.exports=function(e,t){t=t||{};t.attributes=typeof t.attributes==="object"?t.attributes:{};if(typeof t.attributes.nonce==="undefined"){var i=true?n.nc:undefined;if(i){t.attributes.nonce=i}}var o=document.createElement("link");o.rel="stylesheet";o.href=e;Object.keys(t.attributes).forEach(function(e){o.setAttribute(e,t.attributes[e])});if(typeof t.insert==="function"){t.insert(o)}else{var a=r(t.insert||"head");if(!a){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}a.appendChild(o)}return function(e){if(typeof e==="string"){o.href=e}else{o.parentNode.removeChild(o)}}}}}]);