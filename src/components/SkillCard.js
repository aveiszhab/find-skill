import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/SkillCard.css";

const SkillCard = ({
  name,
  skill,
  description,
  postcode,
  free,
  professional,
  email,
}) => {
  return (
    <div className="skillcard">
      <div className=" skillcard-name">{name}</div>
      <div className=" skillcard-skill">{skill}</div>
      <div className=" skillcard-description">{description}</div>
      <div className=" skillcard-postcode">{postcode}</div>
      <div className=" skillcard-free" data-testid="free">
        {`Free: ${free ? "Yes" : "No"}`}
      </div>
      <div className=" skillcard-professional" data-testid="professional">
        {`Professional: ${professional ? "Yes" : "No"}`}
      </div>
      <div className="skillcard email">
        <a href={`mailto:${email}`}>
          <FontAwesomeIcon id="iconId" icon={faEnvelope} />
        </a>
        Email
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  postcode: PropTypes.string.isRequired,
  free: PropTypes.bool.isRequired,
  professional: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
};

export default SkillCard;
