export default function Story(story) {
  //   console.log(story);
  // format styling and include index for each story
  return `
  <div class="story">
    <div>
        <span class="gray">${story.index}</span>
        <span class="upvote">▲</span>
        <a href="${story.url}">${story.title}</a>
        <span>(${story.domain})</span>
    </div>
    <div>
        <div class="gray">
        ${story.points} point by ${story.user} ${story.time_ago}
        <a href="#/item?id=${story.id}>
        ${story.comments_count}  comments
        </a>
        <span class="favourite">
        <img src="https://icon.now.sh/heart/ccc">
        Add to favourites</span>
        </div>
    </div>
  </div>`;
}
