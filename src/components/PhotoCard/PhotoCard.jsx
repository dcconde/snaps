import "./PhotoCard.scss";

function PhotoCard({ photo }) {
  //   const timestamp = new Date(photo?.timestamp);
  //   const formattedDate = timestamp.toLocaleDateString("en-USA");

  return (
    <article className="PhotoCard">
      <img className="PhotoCard__photo" src={photo?.photo} alt="Photo" />
      <div className="PhotoCard__container">
        {photo?.tags.map((tag, index) => (
          <h3 className="PhotoCard__tag" key={index}>
            {tag}
          </h3>
        ))}
        <div>
          <img src="#" alt="Like icon" />
          <p>{photo?.likes}</p>
        </div>
        <p>{photo?.timestamp}</p>
        <h3>Photo by {photo?.photographer}</h3>
      </div>
    </article>
  );
}

export default PhotoCard;
