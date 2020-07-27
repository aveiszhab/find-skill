import React, { useState } from "react";
import Alert from "./Alert";
import { postSkill } from "../requests/requests";

const Skills = () => {
  const initialState = {
    fields: {
      name: "",
      skill: "",
      description: "",
      address: "",
      free: true,
      professional: false,
      email: "",
    },
    alert: {
      message: "",
      success: false,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddSkill = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });

    postSkill(fields, setAlert);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Alert message={alert.message} success={alert.isSuccess} />
      <div className="AddSkill">
        <h3>Add skill</h3>
        <form onSubmit={handleAddSkill}>
          <div className="add-name">
            <label className="label" htmlFor="name">
              Name:
              <input
                className="input"
                type="text"
                placeholder="Add a name"
                id="name"
                name="name"
                value={fields.name}
                onChange={handleFieldChange}
              />
            </label>
          </div>

          <div className="add-skill">
            <label className="label" htmlFor="skill">
              Skill:
              <input
                className="input"
                type="text"
                placeholder="Add a skill"
                id="skill"
                name="skill"
                value={fields.skill}
                onChange={handleFieldChange}
              />
            </label>
          </div>

          <div className="add-description">
            <label className="label" htmlFor="description">
              Description:
              <input
                className="input"
                type="text"
                placeholder="Add a description"
                id="description"
                name="description"
                value={fields.description}
                onChange={handleFieldChange}
              />
            </label>
          </div>

          <div className="add-address">
            <label className="label" htmlFor="address">
              Address:
              <input
                className="input"
                type="text"
                placeholder="Add a address"
                id="address"
                name="address"
                value={fields.address}
                onChange={handleFieldChange}
              />
            </label>
          </div>

          <div className="free-select">
            <label className="label" htmlFor="free">
              Free Service:
              <select
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
          </div>

          <div className="professional-select">
            <label className="label" htmlFor="professional">
              Professional service:
              <select
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
          </div>

          <button className="add-button" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Skills;
