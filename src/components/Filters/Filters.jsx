import filtersData from "../../data/tags.json";
import "./Filters.scss";

function Filters({ activeFilter, setActiveFilter }) {
  return (
    <section className="filters">
      <h2 className="filters__title">Filters</h2>
      <ul className="filters__list">
        {filtersData.map((filter) => (
          <li
            className={`filters__item ${
              activeFilter === filter ? "filters__item--active" : ""
            }`}
            key={filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Filters;
