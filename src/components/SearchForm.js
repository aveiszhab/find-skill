import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

let autoComplete;

const SearchForm = ({ className, title, onClick }) => {
  const ref = useRef();

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

        onClick(latLng);
      });
    };

    onScriptLoad();
  }, [onClick]);

  return (
    <input
      ref={ref}
      placeholder="Enter a City"
      title={title}
      className={className}
    />
  );
};

SearchForm.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchForm;
