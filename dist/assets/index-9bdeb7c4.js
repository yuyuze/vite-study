import { l as lodashExports } from "./vendor-d8bc076d.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const varible = "";
const counter = 1;
console.log(123);
const content = "content_0ra7";
const main = "main_3j82 main_pns1";
const styles$1 = {
  content,
  main
};
const index = "";
const footer = "footer_2t6d";
const styles = {
  footer
};
console.log("styles", styles);
const div = document.createElement("div");
div.className = styles.footer;
document.body.appendChild(div);
console.log("11111111aaaa");
const name = "hello world";
const txt = {
  name
};
console.log("txt", txt);
const mainArr = [];
lodashExports.forEach(mainArr, function(elm) {
  console.log("elm", elm);
});
console.log("styles", styles$1);
console.log("lodash", "111");
console.log("counter", counter);
fetch("/api/users", {
  method: "POST",
  body: JSON.stringify({
    name: 123
  })
});
fetch("/api/userInfo", {
  method: "GET"
});
