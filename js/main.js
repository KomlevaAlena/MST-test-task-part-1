(function () {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) d(e);
    new MutationObserver((e) => {
      for (const t of e) if (t.type === "childList") for (const i of t.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && d(i);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        e.crossOrigin === "use-credentials" ? (t.credentials = "include") : e.crossOrigin === "anonymous" ? (t.credentials = "omit") : (t.credentials = "same-origin"),
        t
      );
    }
    function d(e) {
      if (e.ep) return;
      e.ep = !0;
      const t = n(e);
      fetch(e.href, t);
    }
  })();
  function s() {
    let o = document.querySelector(".mine-header"),
      r = o.offsetHeight;
    window.addEventListener("scroll", function () {
      window.scrollY > 1 ? (o.classList.add("header_fixed"), (document.body.style.paddingTop = r + "px")) : (o.classList.remove("header_fixed"), (document.body.style.paddingTop = "0"));
    });
  }
  window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("load", () => {
      s();
    });
  });
  