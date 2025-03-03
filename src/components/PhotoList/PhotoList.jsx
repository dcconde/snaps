import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./PhotoList.scss";
import Card from "../Card/Card";

function PhotoList({ activeFilter }) {
  const [photos, setPhotos] = useState([]);
  const api_key = "api_key=13273d8d-5377-423f-a5e5-50a3b0904a29";

  const getPhotos = async () => {
    try {
      const response = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos?${api_key}`
      );
      // console.log(response.data);
      setPhotos(response.data);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  if (photos.length === 0) {
    return <p>Loading Photos...</p>;
  }

  let filteredPhotoList = photos;

  if (activeFilter !== "") {
    filteredPhotoList = photos.filter((photo) =>
      photo.tags.includes(activeFilter)
    );
  }
  return (
    <section className="photos">
      <ul className="photos__list">
        {filteredPhotoList.map((photo) => (
          <li className="photos__item" key={photo.id}>
            <Link className="link" to={`/photos/${photo.id}`}>
              <Card photo={photo} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PhotoList;
