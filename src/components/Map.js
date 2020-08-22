/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useRef, useState } from "react";
import PropTypes, { array } from "prop-types";

const Map = ({ options, className, onMount, onMountProps }) => {
  const ref = useRef();
  const [map, setMap] = useState();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const onScriptLoad = () => {
      setMap(new window.google.maps.Map(ref.current, options));
    };
    if (!window.google) {
      const script = document.createElement(`script`);
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API}`;
      document.head.append(script);

      script.addEventListener("load", () => {
        onScriptLoad();
      });
    } else {
      onScriptLoad();
    }
  }, [options]);
  if (map && typeof onMount === `function`) onMount(map, onMountProps);

  return <div {...{ ref, className }} />;
};

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

function shouldNotUpdate(prevOptions, nextOptions) {
  return (
    prevOptions.options.center.lat === nextOptions.options.center.lat &&
    prevOptions.options.center.lng === nextOptions.options.center.lng &&
    prevOptions.options.zoom === nextOptions.options.zoom &&
    prevOptions.onMountProps === nextOptions.onMountProps
  );
}

export default React.memo(Map, shouldNotUpdate);
