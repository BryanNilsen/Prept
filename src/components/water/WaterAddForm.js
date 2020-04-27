import React, { useState } from "react";
import APIManager from "../../modules/APIManager";
import Calculations from "../../modules/Calculations";
import water_icon from "../../images/water.png";
import WaterForm from "./WaterForm";

const WaterAddForm = (props) => {
  const user = props.user;
  const [waterItem, setwaterItem] = useState({
    userId: 0,
    name: "",
    qty: 0,
    oz: 0,
    container: "",
  });

  // prevent user from entering form multiple times by using this to disable buttons
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...waterItem };
    stateToChange[evt.target.id] = evt.target.value;
    setwaterItem(stateToChange);
  };

  const constructNewWaterItem = (evt) => {
    evt.preventDefault();
    const newWaterItem = { ...waterItem };
    newWaterItem.userId = parseInt(sessionStorage.getItem("userId"));

    // make sure user doesn't put in strings for numbers
    if (!Number(newWaterItem.qty) || !Number(newWaterItem.oz)) {
      alert("Please Enter a Number for Quantity and Ounces");
      return;
    }

    if (
      newWaterItem.name === "" ||
      newWaterItem.qty === 0 ||
      newWaterItem.oz === 0 ||
      newWaterItem.container === ""
    ) {
      window.alert("Please complete all fields");
    } else {
      setIsLoading(true);
      APIManager.postNew("waters", newWaterItem)
        .then(() => props.getUserData())
        .then(() => props.history.push("/water"));
    }
  };

  return (
    <>
      <div className="main_content">
        <div className="main_content_header">
          <div className="header_lft">
            <div className="imgwrap">
              <img src={water_icon} alt="water" className="main_header_img" />
            </div>
            <h1>Water</h1>
          </div>
          <div className="header_details_rt">
            <h1>{Calculations.calculateDaysOfWaterPerHousehold(user)}</h1>
            <h4>days</h4>
          </div>
        </div>
        <WaterForm
          water={waterItem}
          handleFieldChange={handleFieldChange}
          isLoading={isLoading}
          editWater={constructNewWaterItem}
          isEdit={false}
        />
      </div>
    </>
  );
};

export default WaterAddForm;
