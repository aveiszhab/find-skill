import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "../styles/SearchForm.css";

let autoComplete;

const SearchForm = ({ className, title, onFill, onPick }) => {
  const ref = useRef();
  const [selectedOption, setSelectedOption] = useState(8);

  const onValueChange = (e) => {
    setSelectedOption(Number(e.target.value));
  };

  useEffect(() => {
    const onScriptLoad = (input) => {
      autoComplete = new window.google.maps.places.Autocomplete(
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
    <div>
      <p className="infotext">Pick a town for nearby services</p>
      <input
        ref={ref}
        placeholder="Enter a City"
        title={title}
        className={className}
      />
      <p className="infotext">Pick the search radius</p>
      <form className="radius-container" onSubmit={onPick(selectedOption)}>
        <label className="radio" htmlFor="8">
          Large
          <input
            id="8"
            type="radio"
            value="8"
            checked={selectedOption === 8}
            onChange={onValueChange}
          />
          <span className="checkmark" />
        </label>

        <label className="radio" htmlFor="9">
          Medium
          <input
            id="9"
            type="radio"
            value="9"
            checked={selectedOption === 9}
            onChange={onValueChange}
          />
          <span className="checkmark" />
        </label>

        <label className="radio" htmlFor="12">
          Small
          <input
            id="12"
            type="radio"
            value="12"
            checked={selectedOption === 12}
            onChange={onValueChange}
          />
          <span className="checkmark" />
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
