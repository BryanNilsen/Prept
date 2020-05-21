import React from "react";
import supplies_icon from "../../images/supplies.png";

function SuppliesHeader(props) {
  return (
    <div className="main_content_header">
      <div className="header_lft">
        <div className="imgwrap">
          <img src={supplies_icon} alt="supplies" className="main_header_img" />
        </div>
        <h1>Supplies</h1>
      </div>
      <div className="header_details_rt">
        <h1>
          ??
          {/* {props.days}/{props.user.waterGoal} */}
        </h1>
        <h4>??</h4>
      </div>
    </div>
  );
}

export default SuppliesHeader;
