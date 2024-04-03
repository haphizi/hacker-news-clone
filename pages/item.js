import view from "../utils/view.js";
import Story from "../components/Story.js";

export default async function Item() {
  const story = await getStory();
  const hasComments = story.comments.length > 0;

  view.innerHTML = `<div>${Story(story)}</div>
  <hr/>
  ${
    hasComments
      ? story.comments.map((comment) => JSON.stringify(comment)).join("")
      : "No comments"
  }
  `;
}

// get the remainder of the hash uri using split method into 2 parts of array
// we want the 2nd part which is the string of the id, so use bracket notation to the 2nd index which is 1
async function getStory() {
  const storyId = window.location.hash.split("?id=")[1];
  //   console.log(storyId);
  const response = await fetch(
    `https://node-hnapi.herokuapp.com/item/${storyId}`
  );
  const story = await response.json();
  return story;
}
