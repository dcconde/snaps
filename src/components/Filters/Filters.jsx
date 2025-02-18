import filtersData from "../../data/tags.json";
import "./Filters.scss";

function Filters({ filterMenuIsOpen }) {
  return (
    <section
      className="filters"
      style={{ display: filterMenuIsOpen ? "block" : "none" }}
    >
      <h2 className="filters__title">Filters</h2>
      <ul className="filters__list">
        {filtersData.map((filter) => (
          <li className="filters__item" key={filter}>
            {filter}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Filters;
