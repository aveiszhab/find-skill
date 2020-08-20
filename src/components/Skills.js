import React, { useState, useEffect } from "react";
import GoogleApiWrapper from "./Map";
import { listSkills } from "../requests/requests";
import "../styles/Skills.css";

const Skills = () => {
  const initialState = {
    skills: [],
    alert: {
      message: "",
      success: false,
    },
  };

  const [skills, setSkills] = useState(initialState.skills);

  useEffect(() => {
    listSkills(setSkills);
  }, []);

  return (
    <div className="skills">
      <div>
        <GoogleApiWrapper className="map" skills={skills} />
      </div>
    </div>
  );
};

export default Skills;
