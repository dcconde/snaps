// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SinglePhotoPage from "./pages/SinglePhotoPage/SinglePhotoPage";
import { useState } from "react";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PhotoList from "./components/PhotoList/PhotoList";
import "./App.scss";

function App() {
  const [filterMenuIsOpen, setFilterMenuIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");

  return (
    <>
      <Header
        filterMenuIsOpen={filterMenuIsOpen}
        setFilterMenuIsOpen={setFilterMenuIsOpen}
      />
      <main>
        {filterMenuIsOpen && (
          <Filters
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        )}
        <h3 className="">Our mission:</h3>
        <h2 className="title">
          Provide photographers a space o share photos of the naighbourhoods
          they cherish,{" "}
          <span className="title__i">expressed in their unique style.</span>
        </h2>
        <PhotoList activeFilter={activeFilter} />
      </main>
      <Footer />
    </>
  );
}

export default App;
