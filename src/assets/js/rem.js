(function (doc, win) {
  var docEl = doc.documentElement;
  var resizeEvt = "orientationchange" in window ? "orientationchange" : "resize";
  var recalc = function () {
      var clientWidth = document.body.clientWidth;
      if(clientWidth>1920){
        clientWidth = 1920
      }
      if (!clientWidth) return;
      var toFS = 100 * (clientWidth / 1920);
      docEl.style.fontSize = toFS + "px";
      setTimeout(() => {
        var ft = parseInt(getComputedStyle(docEl).fontSize);
        if (toFS != ft) {
          docEl.style.fontSize = toFS + "px";
        }
      }, 1000);
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
