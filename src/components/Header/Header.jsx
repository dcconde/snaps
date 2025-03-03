import { Link } from "react-router-dom";
import "./Header.scss";
import filtersIcon from "../../assets/images/Filter.svg";

function Header({ filterMenuIsOpen, setFilterMenuIsOpen, isHomePage }) {
  // const handleClick = (event) => console.log(event);

  return (
    <header>
      <Link to={"/"}>
        <h1 className="header__title">Snaps</h1>
      </Link>
      <div className="btn">
        <button
          className={`filters-btn ${filterMenuIsOpen ? "open" : "closed"}`}
          onClick={() => setFilterMenuIsOpen(!filterMenuIsOpen)}
        >
          Filters <img src={filtersIcon} alt="Filter Icon" />
        </button>
      </div>
    </header>
  );
}

export default Header;
