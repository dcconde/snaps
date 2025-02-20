import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom"; will use to wrap photo and make it a link
import axios from "axios";
import "./Card.scss";

function Card({ photo }) {
  return (
    <article className="card">
      <img className="card__photo" src={photo.photo} alt="Photo" />
      <div className="photographer-container">
        <h3 className="photographer">{photo.photographer}</h3>
      </div>
      <div className="tags-container">
        {photo.tags.map((tag, index) => (
          <h3 className="tag" key={index}>
            {tag}
          </h3>
        ))}
      </div>
    </article>
  );
}

export default Card;
