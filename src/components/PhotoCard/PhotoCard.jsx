import "./PhotoCard.scss";
import LikeIcon from "../../assets/images/Like_Outline.svg";

function PhotoCard({ photo }) {
  const timestamp = new Date(photo?.timestamp);
  const formattedDate = timestamp.toLocaleDateString("en-US");
  return (
    <article className="photo-card">
      <img className="photo-card__photo" src={photo?.photo} alt="Photo" />
      <div className="photo-card__container">
        {photo?.tags.map((tag, index) => (
          <h3 className="photo-card__tag" key={index}>
            {tag}
          </h3>
        ))}
        <div className="photo-card__likes">
          <img src={LikeIcon} alt="Like icon" />
          <p>{photo?.likes} likes</p>
        </div>
        <p>{formattedDate}</p>
        <h3 className="photo-card__photographer">
          Photo by {photo?.photographer}
        </h3>
      </div>
    </article>
  );
}

export default PhotoCard;
