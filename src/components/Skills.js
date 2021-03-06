import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Map from "./Map";
import SkillCard from "./SkillCard";
import Legend from "./Legend";
import SearchForm from "./SearchForm";
import FilterForm from "./FilterForm";
import { listSkills, filterSkills } from "../requests/requests";
import "../styles/Skills.css";

const Skills = () => {
  const initialState = {
    skills: [],
    alert: {
      message: "",
      success: false,
    },
    location: null,
  };

  // Get data from API
  const [skills, setSkills] = useState(initialState.skills);

  useEffect(() => {
    listSkills(setSkills);
  }, []);

  // Get filtered data from API

  const { search } = useLocation();

  useEffect(() => {
    filterSkills(search, setSkills);
  }, [search]);

  // Google Map
  const [activeMarkerId, setActivemarkerId] = useState();
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [selectedZoom, setSelectedZoom] = useState();
  // console.log("szoom", selectedZoom);
  const selectedSkill = skills.find((skill) => skill._id === activeMarkerId);
  const [searchLocation, setSearchLocation] = useState({
    lat: 53.480759,
    lng: -2.242631,
  });

  const handleSearchLocation = (latLng) => {
    setSearchLocation(latLng);
  };

  const handleSelectedZoom = (dist) => {
    setSelectedZoom(dist);
  };

  const addMarkers = (map, skillsArray) => {
    skillsArray.forEach((skill) => {
      const marker = new window.google.maps.Marker({
        map,
        position: { lat: Number(skill.lat), lng: Number(skill.long) },
        title: skill._id,
      });

      if (skill.professional) {
        marker.setIcon(
          "http://labs.google.com/ridefinder/images/mm_20_green.png"
        );
      } else {
        marker.setIcon(
          "http://labs.google.com/ridefinder/images/mm_20_red.png"
        );
      }

      const infoWindow = new window.google.maps.InfoWindow({
        content: skill.name,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
        setActivemarkerId(marker.title);
      });

      infoWindow.addListener("closeclick", () => {
        setActivemarkerId("");
      });

      map.addListener("click", () => {
        if (infoWindow) infoWindow.close();
      });
    });
  };

  useEffect(() => {
    const buildScript = () => {
      if (!window.google) {
        const script = document.createElement(`script`);
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API}&libraries=places`;
        document.head.append(script);

        script.addEventListener("load", () => {
          setIsScriptLoaded(true);
        });
      } else {
        setIsScriptLoaded(true);
      }
    };
    buildScript();
  }, []);

  return (
    <div className="skills">
      {isScriptLoaded && (
        <Map
          className="map"
          title="map"
          onMount={addMarkers}
          onMountProps={skills}
          options={{ center: searchLocation, zoom: selectedZoom }}
        />
      )}
      <div className="sidebar">
        {isScriptLoaded && (
          <SearchForm
            className="searchform"
            title="searchform"
            onFill={handleSearchLocation}
            onPick={handleSelectedZoom}
          />
        )}

        <FilterForm />

        <div className="skillcard-container">
          {!selectedSkill && (
            <p className="infotext">For details click on any marker</p>
          )}
          {selectedSkill && <SkillCard skill={selectedSkill} />}
        </div>

        <Legend />
      </div>
    </div>
  );
};

export default Skills;
