/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useRef, useState } from "react";
import PropTypes, { array } from "prop-types";

export default function Map({ options, className, onMount, onMountProps }) {
  const ref = useRef();
  const [map, setMap] = useState();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const onLoad = () =>
      setMap(new window.google.maps.Map(ref.current, options));
    if (!window.google) {
      const script = document.createElement(`script`);
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API}`;
      document.head.append(script);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    }
    onLoad();
  }, [options]);
  if (map && typeof onMount === `function`) onMount(map, onMountProps);

  return <div {...{ ref, className }} />;
}

Map.defaultProps = {
  options: {
    center: { lat: 53.480759, lng: -2.242631 },
    zoom: 8,
  },
};

Map.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.object,
  className: PropTypes.string.isRequired,
  onMount: PropTypes.func.isRequired,
  onMountProps: array.isRequired,
};
