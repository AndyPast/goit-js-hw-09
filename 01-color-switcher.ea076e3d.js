!function(){var t,n={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};n.startBtn.addEventListener("click",(function(){n.stopBtn.disabled=!1,n.startBtn.disabled=!0,t=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}),1e3)})),n.stopBtn.disabled=!0,n.stopBtn.addEventListener("click",(function(){n.startBtn.disabled=!1,n.stopBtn.disabled=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.ea076e3d.js.map
