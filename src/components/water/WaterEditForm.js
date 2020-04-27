import React, { useState, useEffect } from "react";
import APIManager from "../../modules/APIManager";
import Calculations from "../../modules/Calculations";
import water_icon from "../../images/water.png";
import WaterForm from "./WaterForm";

const WaterEditForm = (props) => {
  const user = props.user;
  const [water, setWater] = useState({
    userId: 0,
    name: "",
    qty: "",
    oz: 0,
    container: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...water };
    stateToChange[evt.target.id] = evt.target.value;
    setWater(stateToChange);
  };

  const editWater = (evt) => {
    evt.preventDefault();
    const updatedWater = { ...water };
    if (
      updatedWater.name === "" ||
      updatedWater.qty === "" ||
      updatedWater.oz === "" ||
      updatedWater.container === ""
    ) {
      window.alert("Please complete all fields");
    } else {
      setIsLoading(true);
      APIManager.updateResource("waters", updatedWater)
        .then(() => props.getUserData())
        .then(() => props.history.push("/water"));
    }
  };

  useEffect(() => {
    APIManager.getResourceById(
      "waters",
      parseInt(props.match.params.waterId)
    ).then((water) => {
      setWater(water);
      setIsLoading(false);
    });
  }, [props.match.params.waterId]);

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
          water={water}
          handleFieldChange={handleFieldChange}
          isLoading={isLoading}
          editWater={editWater}
          isEdit={true}
        />
      </div>
    </>
  );
};

export default WaterEditForm;
