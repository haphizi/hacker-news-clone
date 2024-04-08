export default function checkFavorite(favorites, story) {
  //  use some method to check if a condition is true, return true if the condition is true or false, iterate on every favorite
  return favorites.some((favorite) => favorite.id === story.id);
}
