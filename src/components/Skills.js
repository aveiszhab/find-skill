import React, { useState, useEffect } from "react";
import Map from "./Map";
import SkillCard from "./SkillCard";
import { listSkills } from "../requests/requests";
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

  // Google Map
  const [activeMarkerId, setActivemarkerId] = useState();
  const selectedSkill = skills.find((skill) => skill._id === activeMarkerId);

  const addMarkers = (map, skillsArray) => {
    skillsArray.forEach((skill) => {
      const marker = new window.google.maps.Marker({
        map,
        position: { lat: Number(skill.lat), lng: Number(skill.long) },
        title: skill._id,
      });

      if (skill.free && skill.professional) {
        marker.setIcon(
          "http://labs.google.com/ridefinder/images/mm_20_green.png"
        );
      } else if (skill.free && !skill.professional) {
        marker.setIcon(
          "http://labs.google.com/ridefinder/images/mm_20_yellow.png"
        );
      } else if (!skill.free && skill.professional) {
        marker.setIcon(
          "http://labs.google.com/ridefinder/images/mm_20_purple.png"
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
    });
  };

  return (
    <div className="skills">
      <div>
        <Map className="map" onMount={addMarkers} onMountProps={skills} />
        <div className="skillcard-container" />
        {selectedSkill && <SkillCard skill={selectedSkill} />}
      </div>
    </div>
  );
};

export default Skills;
