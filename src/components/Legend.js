import React from "react";
import "../styles/Legend.css";

const Legend = () => {
  return (
    <div className="legend">
      <h4>Legend</h4>
      <div>
        <img
          className="icon"
          src="http://labs.google.com/ridefinder/images/mm_20_green.png"
          alt="green"
        />
        <span>Free / Non-Professional service</span>
      </div>
      <div>
        <img
          className="icon"
          src="http://labs.google.com/ridefinder/images/mm_20_yellow.png"
          alt="green"
        />
        <span>Free / Professional service</span>
      </div>
      <div>
        <img
          className="icon"
          src="http://labs.google.com/ridefinder/images/mm_20_purple.png"
          alt="green"
        />
        <span>For charge / Professional service</span>
      </div>
      <div>
        <img
          className="icon"
          src="http://labs.google.com/ridefinder/images/mm_20_red.png"
          alt="green"
        />
        <span>For charge / Non-Professional service</span>
      </div>
    </div>
  );
};

export default Legend;
