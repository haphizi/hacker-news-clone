import Story from "../components/Story.js";
import view from "../utils/view.js";
import baseUrl from "../utils/baseUrl.js";
import store from "../store.js";
import checkFavorite from "../utils/checkFavorite.js";

// provide an additional piece of data whether the story has been favourited or not.

export default async function Stories(path) {
  const { favorites } = store.getState();
  console.log(favorites);
  const stories = await getStories(path);
  const hasStories = stories.length > 0;

  // set the index for each story so we can label each of it in display
  view.innerHTML = `<div>
  ${
    hasStories
      ? stories
          .map((story, i) =>
            Story({
              ...story,
              index: i + 1,
              isFavorite: checkFavorite(favorites, story),
            })
          )
          .join("")
      : "No stories"
  }
</div>`;

  document.querySelectorAll(".favorite").forEach((favoriteButton) => {
    favoriteButton.addEventListener("click", async function () {
      const story = JSON.parse(this.dataset.story);
      const isFavorited = checkFavorite(favorites, story);
      store.dispatch({
        type: isFavorited ? "REMOVE_FAVORITE" : "ADD_FAVORITE",
        payload: { favorite: story },
      });

      await Stories(path);
    });
  });
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
