import React from "react";
import food_icon from "../../images/grocery.png";

function FoodHeader(props) {
  return (
    <div className="main_content_header">
      <div className="header_lft">
        <div className="imgwrap">
          <img src={food_icon} alt="food" className="main_header_img" />
        </div>
        <h1>Food</h1>
      </div>
      <div className="header_details_rt">
        <h1>{!isNaN(props.days) ? props.days : "0"}</h1>
        <h4>days</h4>
      </div>
    </div>
  );
}

export default FoodHeader;
