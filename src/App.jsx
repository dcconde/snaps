import "./App.scss";
import { useState } from "react";
import Card from "./components/Card/Card";
import photoData from "./data/photos.json";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [filterMenuIsOpen, setFilterMenuIsOpen] = useState(false);

  return (
    <>
      <Header
        filterMenuIsOpen={filterMenuIsOpen}
        setFilterMenuIsOpen={setFilterMenuIsOpen}
      />
      <main>
        <Filters filterMenuIsOpen={filterMenuIsOpen} />
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
