import "./App.scss";
import { useState } from "react";
import fbLogo from "./assets/images/Facebook.svg";
import instaLogo from "./assets/images/Instagram.svg";
import xLogo from "./assets/images/X_twitter.svg";
import pinLogo from "./assets/images/Pinterest.svg";
import Card from "./components/Card/Card";
import photoData from "./data/photos.json";
import Filters from "./components/Filters/Filters";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1 className="wordmark">Snaps</h1>
      </header>
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
      <footer>
        <h1 className="wordmark">Snaps</h1>
        <div>
          <div>
            <a href="">
              <h3 className="text">For photographers</h3>
            </a>
            <a href="">
              <h3 className="text">Hire talent</h3>
            </a>
            <a href="">
              <h3 className="text">Inspiration</h3>
            </a>
          </div>
          <div>
            <a href="">
              <h3 className="text">About</h3>
            </a>
            <a href="">
              <h3 className="text">Careers</h3>
            </a>
            <a href="">
              <h3 className="text">Support</h3>
            </a>
          </div>
          <div>
            <a href="hhttps://www.facebook.com">
              <img src={fbLogo} className="logo" alt="Facebook logo" />
            </a>
            <a href="https://x.com">
              <img src={xLogo} className="logo" alt="X logo" />
            </a>
            <a href="https://www.instagram.com">
              <img src={instaLogo} className="logo" alt="Instagram logo" />
            </a>
            <a href="https://www.pinterest.com/">
              <img src={pinLogo} className="logo" alt="Pinterest logo" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
