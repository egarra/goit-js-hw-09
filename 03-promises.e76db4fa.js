!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i"),i=document.querySelector(".form"),l=i.elements,a=l.delay,u=l.step,c=l.amount;function d(e){var n=e.i,o=e.delay,t=Math.random()>.3;return new Promise((function(e,r){setTimeout((function(){t?e({i:n,delay:o}):r({i:n,delay:o})}),o)}))}i.addEventListener("submit",(function(e){e.preventDefault(),a=Number(a.value),u=Number(u.value);for(var n=0;n<Number(c.value);n++)d({i:n,delay:a}).then((function(e){var n=e.i,o=e.delay;console.log(o),r.Notify.success("Fulfilled promise ".concat(n+1," in ").concat(o,"ms"))})).catch((function(e){var n=e.i,o=e.delay;return r.Notify.failure("Rejected promise ".concat(n+1," in ").concat(o,"ms"))})),a+=u,console.log(a)}))}();
//# sourceMappingURL=03-promises.e76db4fa.js.map
