import "./Comments.scss";

function Comments({ comments }) {
  return (
    <section className="Comment">
      <h3>Comments</h3>
      <ul className="Comment__list">
        {comments.map((comment) => (
          <li className="comment__item" key={comment.id}>
            <h4>{comment.name}</h4>
            <h4>{comment.timestamp}</h4>
            <p>{comment.comment}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Comments;
