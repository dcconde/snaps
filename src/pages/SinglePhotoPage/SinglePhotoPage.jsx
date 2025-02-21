import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import "./SinglePhotoPage.scss";

function SinglePhotoPage() {
  const [photo, setPhoto] = useState(null);
  const params = useParams(); //this is the hook that returns the object the user is currently on
  const api_key = "api_key=13273d8d-5377-423f-a5e5-50a3b0904a29";

  const loadSinglePhoto = async () => {
    const response = await axios.get(
      `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${params.id}?${api_key}`
    );
    setPhoto(response.data);
  };

  useEffect(() => {
    loadSinglePhoto();
  }, []);

  if (photo === null) {
    return <p>Loading Photo...</p>;
  }
  return (
    <>
      {/* <Header /> */}
      {/* create a card component */}
      {/* create a form and post axios request */}
    </>
  );
}

export default SinglePhotoPage;
