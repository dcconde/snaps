import filtersData from "../../data/tags.json";

function Filters() {
  console.log(filtersData);
  return (
    <section className="filters">
      <h2 className="filters__title">Filters</h2>
      <ul className="filters__list">
        {filtersData.map((filters) => (
          <h3 className="filters__item" key={filters}>
            {filters}
          </h3>
        ))}
      </ul>
    </section>
  );
}

export default Filters;
