(function () {
  "use strict";
  var t = document.getElementById("title");
  "Cartable".split("").forEach(function (ch, i) {
    var s = document.createElement("span");
    s.textContent = ch;
    s.style.animationDelay = (1.05 + i * 0.07).toFixed(2) + "s";
    t.appendChild(s);
  });

  var left = false;
  function go() {
    if (left) return;
    left = true;
    document.getElementById("splash").classList.add("out");
    setTimeout(function () { location.replace("shelf.html"); }, 550);
  }
  var timer = setTimeout(go, 3900);
  function skip() { clearTimeout(timer); go(); }
  document.addEventListener("keydown", skip);
  document.addEventListener("pointerdown", skip);
})();
