import "./Header.scss";
import filtersIcon from "../../assets/images/Filter.svg";

function Header() {
  const handleClick = (event) => console.log(event);

  return (
    <header>
      <h1 className="title">Snaps</h1>
      <div className="btn">
        <button className="filters-btn" onClick={() => handleClick(event)}>
          Filters <img src={filtersIcon} />
        </button>
      </div>
    </header>
  );
}

export default Header;
