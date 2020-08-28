import React from "react";
import "../styles/Legend.css";

const Legend = () => {
  return (
    <div className="legend-container">
      <div>
        <img
          className="icon"
          src="http://labs.google.com/ridefinder/images/mm_20_green.png"
          alt="green"
        />
        <span className='info' >Professional service</span>
      </div>
      <div>
        <img
          className="icon"
          src="http://labs.google.com/ridefinder/images/mm_20_red.png"
          alt="red"
        />
        <span className='info'>Non-Professional service</span>
      </div>
    </div>
  );
};

export default Legend;
