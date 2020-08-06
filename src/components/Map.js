import React from "react";
import GoogleMapReact from "google-map-react";
import "../styles/Map.css";

const Map = () => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
        defaultCenter={{
          lat: 53.480759,
          lng: -2.242631,
        }}
        defaultZoom={11}
      />
    </div>
  );
};
export default Map;
