!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var e,n=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");n.addEventListener("click",(function(){document.body.style.backgroundColor=t(),e=setInterval((function(){document.body.style.backgroundColor=t()}),1e3),n.disabled=!0,o.disabled=!1})),o.addEventListener("click",(function(){clearInterval(e),n.disabled=!1,o.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.9fc9e2c0.js.map