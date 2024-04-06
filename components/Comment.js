export default function Comment(comment) {
  //   console.log(comment);

  // check the length of the comment if it has more than 0 in its array
  // use recursive technique to call the function itself until the condition changes
  // this is to map the each level of comment existed to a parent comment (level 0)
  // use level prop to format each level comment with proper indentation
  
  const hasNestedComments = comment.comments.length > 0;
  return `
      <div class="nested-comments-${comment.level}">
        <p class="comment-header">
          ${comment.user} | ${comment.time_ago}
        </p>
        ${comment.content}
        ${
          hasNestedComments
            ? comment.comments.map((comment) => Comment(comment)).join("")
            : ""
        }
      </div>
    `;
}
