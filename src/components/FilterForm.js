import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import "../styles/FilterForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const FilterForm = () => {
  const { search } = useLocation();
  const history = useHistory();
  const [query, setQuery] = useState("");

  const buildQueryString = (valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      ...valueObj,
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString({
      skill: { $regex: query, $options: "i" },
    });
    history.push(newQueryString);
  };

  const handleReset = (event) => {
    event.preventDefault();
    history.push("/");
    setQuery("");
  };

  return (
    <div className="filterform-container">
      <h4>Search by Skill</h4>
      <form className="search-skill" onSubmit={handleSearch}>
        <input
          title="search-skill-input"
          className="search-skill-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-skill-button" title="search">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <div className="link-container">
        <Link className="link" to={buildQueryString({ free: true })}>
          Free
        </Link>
        <Link className="link" to={buildQueryString({ free: false })}>
          For charge
        </Link>
      </div>
      <button type="submit" onClick={handleReset} className="reset-button">
        Clear Filters
      </button>
    </div>
  );
};

export default FilterForm;
