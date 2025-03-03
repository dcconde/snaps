import "./Card.scss";

function Card({ photo }) {
  return (
    <article className="card">
      <div className="photographer-container">
        <img className="card__photo" src={photo?.photo} alt="Photo" />
        <h3 className="card__photographer">{photo?.photographer}</h3>
      </div>
      <div className="tags-container">
        {photo?.tags.map((tag, index) => (
          <h3 className="tag" key={index}>
            {tag}
          </h3>
        ))}
      </div>
    </article>
  );
}

export default Card;
