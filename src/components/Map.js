/* eslint-disable react/forbid-prop-types */
import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import PropTypes from "prop-types";

const MapContainer = ({ skills }) => {
  const initialState = {
    centre: {
      lat: 53.480759,
      lng: -2.242631,
    },
    activeMarker: {},
    showingInfoWindow: false,
    selectedPlace: {},
  };

  const [activeMarker, setActiveMarker] = useState(initialState.activeMarker);
  const [showingInfoWindow, setShowingInfoWindow] = useState(
    initialState.showingInfoWindow
  );
  const [selectedPlace, setSelectedPlace] = useState(
    initialState.selectedPlace
  );

  const onMarkerClick = (props, marker) => {
    setActiveMarker(marker);
    setSelectedPlace(props);
    setShowingInfoWindow(true);
  };

  const onInfoWindowClose = () => {
    setActiveMarker(null);
    setShowingInfoWindow(false);
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
              skill={marker.skill}
              description={marker.description}
              free={marker.free}
              professional={marker.professional}
              position={{ lat: marker.lat, lng: marker.long }}
              onClick={onMarkerClick}
            />
          );
        })}
        <InfoWindow
          marker={activeMarker}
          onClose={onInfoWindowClose}
          visible={showingInfoWindow}
        >
          <div className="infowindow">
            <h3>{selectedPlace.name}</h3>
            <h3>{selectedPlace.skill}</h3>
            <h5>{selectedPlace.description}</h5>
            <p>{selectedPlace.free ? "Free" : "For charge"}</p>
            <p>
              {selectedPlace.professional ? "Professional" : "Non-professional"}
            </p>
          </div>
        </InfoWindow>
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
