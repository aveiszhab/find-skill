/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useRef, useState } from "react";
import PropTypes, { array } from "prop-types";

const Map = ({ options, className, title, onMount, onMountProps }) => {
  const ref = useRef();
  const [map, setMap] = useState();

  useEffect(() => {
    const onScriptLoad = () => {
      setMap(new window.google.maps.Map(ref.current, options));
    };
    onScriptLoad();
  }, [options]);
  if (map && typeof onMount === `function`) onMount(map, onMountProps);

  return <div {...{ ref, className, title }} />;
};

Map.defaultProps = {
  options: {
    center: { lat: 53.480759, lng: -2.242631 },
    zoom: 8,
  },
};

Map.propTypes = {
  options: PropTypes.object,
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
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
