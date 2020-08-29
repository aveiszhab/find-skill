import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import Alert from "./Alert";
import { postSkill } from "../requests/requests";
import "../styles/AddSkills.css";

const Skills = () => {
  const initialState = {
    fields: {
      name: "",
      skill: "",
      description: "",
      postcode: "",
      free: true,
      professional: false,
      email: "",
    },
    alert: {
      message: "",
      success: false,
    },
    validationErrors: {},
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);
  const [validationErrors, setvalidationErrors] = useState(
    initialState.validationErrors
  );
  // POST skill
  const handleValidation = () => {
    const errors = {};
    let formIsValid = true;

    if (!fields.name) {
      formIsValid = false;
      errors.name = "Required field";
    }
    if (!fields.postcode) {
      formIsValid = false;
      errors.postcode = "Required field";
    }

    if (!fields.postcode.match(/[A-Z]{1,2}[0-9]{1,2}[A-Z]?\s?[0-9][A-Z]{2}/i)) {
      formIsValid = false;
      errors.postcode = "Invalid postcode";
    }

    if (!fields.skill) {
      formIsValid = false;
      errors.skill = "Required field";
    }
    if (!fields.description) {
      formIsValid = false;
      errors.description = "Required field";
    }
    if (!fields.email) {
      formIsValid = false;
      errors.email = "Required field";
    }
    setvalidationErrors(errors);
    return formIsValid;
  };

  const handleAddSkill = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    if (handleValidation()) {
      postSkill(fields, setAlert);
    }
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Alert message={alert.message} success={alert.isSuccess} />
      <div className="AddSkill">
        <h3>Add a skill</h3>
        <form className="add-form" onSubmit={handleAddSkill}>
          <label className="label" htmlFor="name">
            Your name:
            <input
              className="input"
              type="text"
              placeholder="Add your name"
              id="name"
              name="name"
              value={fields.name}
              onChange={handleFieldChange}
            />
            {!validationErrors.name && fields.name && (
              <FontAwesomeIcon className="okIcon" icon={faCheckCircle} />
            )}
            {validationErrors.name && (
              <FontAwesomeIcon
                className="notOkIcon"
                icon={faExclamationCircle}
              />
            )}
          </label>

          <label className="label" htmlFor="skill">
            Skill title:
            <input
              className="input"
              type="text"
              placeholder="Short desrcription of your skill e.g. 'Fixing Bikes'"
              id="skill"
              name="skill"
              value={fields.skill}
              onChange={handleFieldChange}
            />
            {!validationErrors.skill && fields.skill && (
              <FontAwesomeIcon className="okIcon" icon={faCheckCircle} />
            )}
            {validationErrors.skill && (
              <FontAwesomeIcon
                className="notOkIcon"
                icon={faExclamationCircle}
              />
            )}
          </label>

          <label className="label" htmlFor="description">
            Description:
            <input
              className="input"
              type="text"
              placeholder="Describe your skills with few sentences"
              id="description"
              name="description"
              value={fields.description}
              onChange={handleFieldChange}
            />
            {!validationErrors.description && fields.description && (
              <FontAwesomeIcon className="okIcon" icon={faCheckCircle} />
            )}
            {validationErrors.description && (
              <FontAwesomeIcon
                className="notOkIcon"
                icon={faExclamationCircle}
              />
            )}
          </label>

          <label className="label" htmlFor="postcode">
            Postcode:
            <input
              className="input"
              type="text"
              placeholder="Add your postcode e.g 'SK17 7DW'"
              id="postcode"
              name="postcode"
              value={fields.postcode}
              onChange={handleFieldChange}
            />
            {!validationErrors.postcode && fields.postcode && (
              <FontAwesomeIcon className="okIcon" icon={faCheckCircle} />
            )}
            {validationErrors.postcode && (
              <FontAwesomeIcon
                className="notOkIcon"
                icon={faExclamationCircle}
              />
            )}
          </label>

          <label className="label" htmlFor="free">
            Free Service:
            <select
              title="free"
              className="select"
              id="free"
              name="free"
              value={fields.free}
              onChange={handleFieldChange}
            >
              <option value="true">Yes</option>
              <option value="false">For fee</option>
            </select>
          </label>

          <label className="label" htmlFor="professional">
            Professional service:
            <select
              title="professional"
              className="select"
              id="professional"
              name="professional"
              value={fields.professional}
              onChange={handleFieldChange}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>

          <label className="label" htmlFor="email">
            Contact email address:
            <input
              className="input"
              type="email"
              placeholder="Add your email address"
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
            />
            {!validationErrors.email && fields.email && (
              <FontAwesomeIcon className="okIcon" icon={faCheckCircle} />
            )}
            {validationErrors.email && (
              <FontAwesomeIcon
                className="notOkIcon"
                icon={faExclamationCircle}
              />
            )}
          </label>

          <button className="add-button" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Skills;
