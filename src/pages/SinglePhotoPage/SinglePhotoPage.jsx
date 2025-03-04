import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import Comments from "../../components/Comments/Comments";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import "./SinglePhotoPage.scss";

function SinglePhotoPage() {
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]);
  const params = useParams();
  const api_key = "api_key=13273d8d-5377-423f-a5e5-50a3b0904a29";

  const loadSinglePhoto = async () => {
    const response = await axios.get(
      `http://localhost:5050/photos/${params.id}`
    );
    setPhoto(response.data);
  };

  const loadingComments = async () => {
    const response = await axios.get(
      `http://localhost:5050/photos/${params.id}/comments`
    );
    setComments(response.data);
  };

  useEffect(() => {
    loadSinglePhoto();
    loadingComments();
  }, []);

  if (photo === null) {
    return <p>Loading Photo...</p>;
  }

  return (
    <>
      <Header />
      <PhotoCard photo={photo} />
      <Form />
      <Comments comments={comments} />
      <Footer />
    </>
  );
}

export default SinglePhotoPage;
