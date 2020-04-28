import React from "react";
import Calculations from "../../modules/Calculations";
import water_icon from "../../images/water.png";

function WaterHeader(props) {
  // variables - img src icon / alt
  // variables - h1 text
  // variables - details calculation

  return (
    <div className="main_content_header">
      <div className="header_lft">
        <div className="imgwrap">
          <img src={water_icon} alt="water" className="main_header_img" />
        </div>
        <h1>Water</h1>
      </div>
      <div className="header_details_rt">
        <h1>{Calculations.calculateDaysOfWaterPerHousehold(props.user)}</h1>
        <h4>days</h4>
      </div>
    </div>
  );
}

export default WaterHeader;
