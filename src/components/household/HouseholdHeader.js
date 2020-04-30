import React from "react";
import household_icon from "../../images/household.png";

function HouseholdHeader(props) {
  return (
    <div className="main_content_header">
      <div className="header_lft">
        <div className="imgwrap">
          <img
            src={household_icon}
            alt="household"
            className="main_header_img"
          />
        </div>
        <h1>Household</h1>
      </div>
      <div className="header_details_rt">
        <h1>{props.user.householdMembers.length}</h1>
        <h4>members</h4>
      </div>
    </div>
  );
}

export default HouseholdHeader;
