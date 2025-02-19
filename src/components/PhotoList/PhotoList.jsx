import "./PhotoList.scss";
import Card from "../Card/Card";
import photoData from "../../data/photos.json";

function PhotoList({ activeFilter }) {
  let filteredPhotoList = photoData;

  if (activeFilter !== "") {
    filteredPhotoList = photoData.filter((photo) =>
      photo.tags.includes(activeFilter)
    );
  }
  return (
    <section className="photos">
      <ul>
        {filteredPhotoList.map((photo) => (
          <li key={photo.id}>
            <Card photo={photo} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PhotoList;
