import { useEffect, useState } from "react";
import axios from "axios";
import "./Filters.scss";

function Filters({ activeFilter, setActiveFilter }) {
  const [filters, setFilters] = useState([]);
  const api_key = "api_key=13273d8d-5377-423f-a5e5-50a3b0904a29";

  const getFilters = async () => {
    try {
      const response = await axios.get(`http://localhost:5050/tags`);

      setFilters(response.data);
    } catch (error) {
      console.error("Error fetching filters:", error);
    }
  };

  useEffect(() => {
    getFilters();
  }, []);

  if (filters.length === 0) {
    return <p>Loading Filters...</p>;
  }

  return (
    <section className="filters">
      <div className="filters__container">
        <h2 className="filters__title">Filters</h2>
        <ul className="filters__list">
          {filters.map((filter, index) => (
            <li
              className={`filters__item ${
                activeFilter === filter ? "filters__item--active" : ""
              }`}
              key={index}
              onClick={() =>
                activeFilter === filter
                  ? setActiveFilter("")
                  : setActiveFilter(filter)
              }
            >
              {filter}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Filters;
