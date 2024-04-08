/*
concepts included:
1) fetching news articles from HN API
2) routing with multiple pages
3) breaking app into components
4) managing state with reducers

*/

import RouterHandler from "./router.js";
import store from "./store.js";

// The hashchange event is fired when the fragment identifier of the URL has changed (the part of the URL beginning with and following the # symbol)
window.onhashchange = () => {
  setActiveLink();
};

// when the hash detects change, on a certain hash, add the class active else remove the class for the underlining
function setActiveLink() {
  const links = document.querySelectorAll(".header-link");
  links.forEach((link) => {
    const linkPath = link.getAttribute("href");
    const currentPath = window.location.hash;
    if (currentPath === linkPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

class App {
  constructor() {
    new RouterHandler();
  }
}

new App();
