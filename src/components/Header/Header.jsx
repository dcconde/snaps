import "./Header.scss";
import filtersIcon from "../../assets/images/Filter.svg";

function Header({ filterMenuIsOpen, setFilterMenuIsOpen }) {
  // const handleClick = (event) => console.log(event);

  return (
    <header>
      <h1 className="title">Snaps</h1>
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
