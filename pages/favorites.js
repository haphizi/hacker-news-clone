import view from "../utils/view";
import store from "../store";
import Story from "../components/Story";
import checkFavorite from "../utils/checkFavorite";

// display the stored favorites array of objs that we have saved
export default function Favorites() {
  const { favorites } = store.getState();
  const hasFavorites = favorites.length > 0;

  view.innerHTML = `${
    hasFavorites
      ? favorites
          .map((story) =>
            Story({
              ...story,
              isFavorite: checkFavorite(favorites, story),
            })
          )
          .join("")
      : "Add some favorites"
  }`;
}
