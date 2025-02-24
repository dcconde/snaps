import { useState } from "react";
import Header from "../../components/Header/Header";
import Filters from "../../components/Filters/Filters";
import PhotoList from "../../components/PhotoList/PhotoList";
import Footer from "../../components/Footer/Footer";
import "./HomePage.scss";

function HomePage() {
  const [filterMenuIsOpen, setFilterMenuIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");
  const [isHomePage, setIsHomePage] = useState(true);

  return (
    <>
      <Header
        filterMenuIsOpen={filterMenuIsOpen}
        setFilterMenuIsOpen={setFilterMenuIsOpen}
        isHomePage={isHomePage}
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

export default HomePage;
