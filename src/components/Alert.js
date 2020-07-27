import React from "react";
import "../styles/Alert.css";
import PropTypes from "prop-types";

const Alert = ({ message, success }) => {
  if (!message) return null;
  return (
    <div className={`alert ${success ? "success" : "error"}`}>{message}</div>
  );
};

Alert.propTypes = {
  message: PropTypes.string,
  success: PropTypes.bool,
};
Alert.defaultProps = {
  message: "",
  success: false,
};
export default Alert;
