import React, { useState, useEffect } from "react";
import Map from "./Map";
import SkillCard from "./SkillCard";
import Alert from "./Alert";
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
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    setAlert({ message: "", isSuccess: false });
    listSkills(setSkills, setAlert);
  }, []);

  return (
    <div className="skills">
      <div>
        <Map className="map" />
      </div>
      <div className="skillcards">
        <Alert message={alert.message} success={alert.isSuccess} />
        {skills.map((skill) => (
          <SkillCard key={skill._id} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
