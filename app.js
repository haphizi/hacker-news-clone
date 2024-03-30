/*
concepts included:
1) fetching news articles from HN API
2) routing with multiple pages
3) breaking app into components
4) managing state with reducers

*/

import RouterHandler from "./router.js";
class App {
  constructor() {
    new RouterHandler();
  }
}

new App();
