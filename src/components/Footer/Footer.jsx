import "./Footer.scss";
import fbLogo from "../../assets/images/Facebook.svg";
import instaLogo from "../../assets/images/Instagram.svg";
import xLogo from "../../assets/images/X_twitter.svg";
import pinLogo from "../../assets/images/Pinterest.svg";

function Footer() {
  return (
    <section className="footer">
      <h1 className="title">Snaps</h1>
      <div className="footer__container">
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
        <div className="logo-container">
          <a href="https://www.facebook.com">
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
    </section>
  );
}

export default Footer;
