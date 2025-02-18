import "./App.scss";
import { useState } from "react";
import Card from "./components/Card/Card";
import photoData from "./data/photos.json";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Filters />
        <h3 className="">Our mission:</h3>
        <h2 className="title">
          Provide photographers a space o share photos of the naighbourhoods
          they cherish,{" "}
          <span className="title__i">expressed in their unique style.</span>
        </h2>
        <section className="photos">
          <ul>
            {photoData.map((photo) => (
              <li key={photo.id}>
                <Card photo={photo} />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
