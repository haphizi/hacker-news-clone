import view from "../utils/view.js";
import Story from "../components/Story.js";
import baseUrl from "../utils/baseUrl.js";
import Comment from "../components/Comment.js";

export default async function Item() {
  let story = null;
  let hasComments = false;
  let hasError = false;

  try {
    story = await getStory();
    hasComments = story.comments.length > 0;
  } catch (error) {
    hasError = true;
    console.error(error);
  }

  if (hasError) {
    view.innerHTML = `<div class="error">Error fetching story</div>`;
  }

  view.innerHTML = `<div>${Story(story)}</div>
  <hr/>
  ${
    hasComments
      ? story.comments.map((comment) => Comment(comment)).join("")
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
    `${baseUrl}/item/${storyId}`
  );
  const story = await response.json();
  return story;
}
