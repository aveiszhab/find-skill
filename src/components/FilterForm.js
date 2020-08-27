import React from "react";
import { Link } from "react-router-dom";
import "../styles/FilterForm.css";

const FilterForm = () => {
  return (
    <div>
      <Link to="?free=true">Free</Link>
      <Link to="?free=false">For charge</Link>
    </div>
  );
};

export default FilterForm;
