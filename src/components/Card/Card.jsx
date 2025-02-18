import "./Card.scss";

function Card({ photo }) {
  return (
    <article className="card">
      <img className="card__photo" src={photo.photo} />
      <div className="photographer-container">
        <h3 className="photographer">{photo.photographer}</h3>
      </div>
      <div className="tags-container">
        {photo.tags.map((tag) => (
          <h3 className="tag" key={tag}>
            {tag}
          </h3>
        ))}
      </div>
    </article>
  );
}

export default Card;
