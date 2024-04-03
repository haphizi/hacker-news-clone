import Story from "../components/Story.js";
import view from "../utils/view.js";
import baseUrl from "../utils/baseUrl.js";

export default async function Stories(path) {
  const stories = await getStories(path);
  const hasStories = stories.length > 0;
// set the index for each story so we can label each of it in display
  view.innerHTML = `<div>
  ${
    hasStories
      ? stories.map((story, i) => Story({ ...story, index: i + 1 })).join("")
      : "No stories"
  }
  </div>`;
}

async function getStories(path) {
  const isHomeRoute = path === "/";
  const isNewRoute = path === "/new";
  if (isHomeRoute) {
    path = "/news";
  } else if (isNewRoute) {
    path = "/newest";
  }
  const response = await fetch(`${baseUrl}${path}`);
  const stories = await response.json();
  return stories;
}

// function will receive the path and that make the appropriate request from the endpoint data api

// https://node-hnapi.herokuapp.com/news

// / (Top) -> /news
// /new (New) -> /newest
// /ask (Ask) -> /ask
// /show (Show) -> /show
