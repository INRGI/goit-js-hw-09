!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");function r(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}var n=null;e.setAttribute("disabled","true"),t.addEventListener("click",(function(){document.body.style.backgroundColor=r(),n=setInterval((function(){document.body.style.backgroundColor=r()}),1e3),t.setAttribute("disabled","true"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled"),e.setAttribute("disabled","true")}))}();
//# sourceMappingURL=01-color-switcher.414db086.js.map