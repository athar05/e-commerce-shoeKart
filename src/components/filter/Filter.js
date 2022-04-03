import React from "react";
import { useFilter } from "../../context/FilterProvider";

function Filter() {
  const {
    filterState: { byStock, byRating, sortBy, byBrand },
    filterDispatch,
  } = useFilter();

  return (
    <div>
      <div className="content-container col-4-layout">
        <div className="col-1-4 debug ">
          <div className="filters">
            <div className="filter-container">
              <div className="filter-section filter-heading">
                <h2>FILTER</h2>
                <button
                  className="button button-primary button-link"
                  onClick={() => filterDispatch({ type: "CLEAR_FILTERS" })}
                >
                  Clear All
                </button>
              </div>
              <div className="filter-section filter-pricing">
                <h3>Rating Range</h3>
                <form action="">
                  <input
                    type="range"
                    value={byRating}
                    id="rating-slider"
                    step="1"
                    min="0"
                    max="5"
                    list="tickmarks"
                    onChange={(event) =>
                      filterDispatch({
                        type: "FILTER_BY_RATING",
                        payload: event.target.value,
                      })
                    }
                  />
                  <datalist id="tickmarks">
                    <option value="0" label="0"></option>
                    <option value="1" label="1"></option>
                    <option value="2" label="2"></option>
                    <option value="3" label="3"></option>
                    <option value="4" label="4"></option>
                    <option value="5" label="5"></option>
                  </datalist>
                </form>
              </div>
              <div className="filter-section filter-categories">
                <h3>Categories</h3>
                <ul className="checkbox-list">
                  <li className="text-md text-primary">
                    <input
                      type="checkbox"
                      onChange={() =>
                        filterDispatch({ type: "FILTER_BY_STOCK" })
                      }
                      checked={byStock}
                    />
                    Include Out Of Stock
                  </li>
                  <li className="text-md text-primary">
                    <input
                      type="checkbox"
                      onChange={() =>
                        filterDispatch({
                          type: "FILTER_BY_BRAND",
                          payload: "Adidas",
                        })
                      }
                      checked={byBrand === "Adidas"}
                    />{" "}
                    Adidas
                  </li>
                  <li className="text-md text-primary">
                    <input
                      type="checkbox"
                      onChange={() =>
                        filterDispatch({
                          type: "FILTER_BY_BRAND",
                          payload: "Nike",
                        })
                      }
                      checked={byBrand === "Nike"}
                    />{" "}
                    Nike
                  </li>
                  <li className="text-md text-primary">
                    <input
                      type="checkbox"
                      onChange={() =>
                        filterDispatch({
                          type: "FILTER_BY_BRAND",
                          payload: "Converse",
                        })
                      }
                      checked={byBrand === "Converse"}
                    />{" "}
                    Converse
                  </li>
                  <li className="text-md text-primary">
                    <input
                      type="checkbox"
                      onChange={() =>
                        filterDispatch({
                          type: "FILTER_BY_BRAND",
                          payload: "Puma",
                        })
                      }
                      checked={byBrand === "Puma"}
                    />{" "}
                    Puma
                  </li>
                </ul>
              </div>
              <div className="filter-section filter-categories">
                <h3>Sort By</h3>
                <h4>Price</h4>
                <ul className="checkbox-list">
                  <li className="text-md text-primary">
                    <input
                      type="checkbox"
                      onChange={() =>
                        filterDispatch({
                          type: "LOW_TO_HIGH",
                        })
                      }
                      checked={sortBy === "LOW_TO_HIGH"}
                    />{" "}
                    Low To High
                  </li>
                  <li className="text-md text-primary">
                    <input
                      onChange={() =>
                        filterDispatch({
                          type: "HIGH_TO_LOW",
                        })
                      }
                      checked={sortBy === "HIGH_TO_LOW"}
                      type="checkbox"
                    />{" "}
                    High To Low
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
