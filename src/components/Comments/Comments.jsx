import "./Comments.scss";

function Comments({ comments }) {
  return (
    <section className="comments-section">
      <h3 className="comments-section__title">Comments</h3>
      <ul className="comment__list">
        {comments.map((comment) => {
          const timestamp = new Date(comment.timestamp);
          const formattedDate = timestamp.toLocaleDateString("en-US");
          return (
            <li className="comment__item" key={comment.id}>
              <div className="comment">
                <span className="comment__name">{comment.name}</span>
                <span className="comment__date">{formattedDate}</span>
                <p className="comment__text">{comment.comment}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Comments;
