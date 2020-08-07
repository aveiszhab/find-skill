/* eslint-disable react/forbid-prop-types */
import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import PropTypes from "prop-types";

const MapContainer = ({ skills }) => {
  const initialState = {
    centre: {
      lat: 53.480759,
      lng: -2.242631,
    },
  };

  return (
    <div>
      <Map
        google={window.google}
        classname="mapcontainer"
        style={{ height: "100%", position: "relative", width: "70%" }}
        zoom={8}
        initialCenter={initialState.centre}
      >
        {skills.map((marker) => {
          return (
            <Marker
              key={marker._id}
              name={marker.name}
              position={{ lat: marker.lat, lng: marker.long }}
            />
          );
        })}
      </Map>
    </div>
  );
};

MapContainer.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API,
})(MapContainer);
