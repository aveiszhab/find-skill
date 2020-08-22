import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/SkillCard.css";

const SkillCard = ({ skill }) => {
  return (
    <div className="skillcard">
      <div className=" skillcard-skill">{skill.skill}</div>
      <div className=" skillcard-description">{skill.description}</div>
      <div className=" skillcard-name">
        Name:
        {skill.name}
      </div>
      <div className=" skillcard-postcode">{skill.postcode}</div>
      <div className=" skillcard-free" data-testid="free">
        {skill.name ? `Free: ${skill.free ? "Yes" : "No"}` : null}
      </div>
      <div className=" skillcard-professional" data-testid="professional">
        {skill.name
          ? `Professional: ${skill.professional ? "Yes" : "No"}`
          : null}
      </div>
      <div className="skillcard-email">
        {skill.name && (
          <a href={`mailto:${skill.email}`}>
            <FontAwesomeIcon id="iconId" icon={faEnvelope} />
          </a>
        )}
        Email
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  skill: PropTypes.object.isRequired,
};

export default SkillCard;
