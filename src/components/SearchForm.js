import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "../styles/SearchForm.css";

let autoComplete;

const SearchForm = ({ className, title, onFill, onPick }) => {
  const ref = useRef();
  const [selectedOption, setSelectedOption] = useState();

  const onValueChange = (e) => {
    setSelectedOption(Number(e.target.value));
  };

  // console.log("sopt", selectedOption);

  useEffect(() => {
    const onScriptLoad = async (input) => {
      autoComplete = await new window.google.maps.places.Autocomplete(
        ref.current,
        input
      );
      autoComplete.setComponentRestrictions({
        country: "gb",
      });
      autoComplete.setTypes(["(cities)"]);

      autoComplete.setFields(["geometry"]);
      autoComplete.addListener("place_changed", () => {
        const place = autoComplete.getPlace();

        const latititude = place.geometry.location.lat();
        const longitude = place.geometry.location.lng();
        const latLng = { lat: latititude, lng: longitude };

        onFill(latLng);
      });
    };

    onScriptLoad();
  }, [onFill]);

  return (
    <div className="searchform-container">
      <h4>Pick your town</h4>
      <input
        ref={ref}
        placeholder="Enter a City"
        title={title}
        className={className}
      />
      <h4>Pick the search radius</h4>
      <form className="radius-container" onSubmit={onPick(selectedOption || 8)}>
        <label className="radio" htmlFor="8">
          <input
            id="8"
            type="radio"
            value="8"
            checked={selectedOption === 8}
            onChange={onValueChange}
          />
          Large
        </label>

        <label className="radio" htmlFor="9">
          <input
            id="9"
            type="radio"
            value="9"
            checked={selectedOption === 9}
            onChange={onValueChange}
          />
          Medium
        </label>

        <label className="radio" htmlFor="12">
          <input
            id="12"
            type="radio"
            value="12"
            checked={selectedOption === 12}
            onChange={onValueChange}
          />
          Small
        </label>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onFill: PropTypes.func.isRequired,
  onPick: PropTypes.func.isRequired,
};

export default SearchForm;
