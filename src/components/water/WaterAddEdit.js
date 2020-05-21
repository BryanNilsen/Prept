import React, { useState, useEffect } from "react";
import APIManager from "../../modules/APIManager";
import WaterForm from "./WaterForm";
import WaterHeader from "./WaterHeader";
import Calculations from "../../modules/Calculations";

const WaterAddEdit = (props) => {
  const user = props.user;
  const days = Calculations.calculateDaysOfWaterPerHousehold(props.user);
  const [water, setWater] = useState({
    userId: 0,
    name: "",
    qty: 0,
    oz: 0,
    container: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...water };
    stateToChange[evt.target.id] = evt.target.value;
    setWater(stateToChange);
  };

  const addEditWater = (evt) => {
    evt.preventDefault();
    const waterItem = { ...water };
    if (
      waterItem.name === "" ||
      waterItem.qty === "" ||
      waterItem.oz === "" ||
      waterItem.container === ""
    ) {
      window.alert("Please complete all fields");
    } else {
      setIsLoading(true);
      // convert input values to integers
      waterItem.qty = parseInt(waterItem.qty);
      waterItem.oz = parseInt(waterItem.oz);
      if (!props.isEdit) {
        waterItem.userId = user.id;
        APIManager.postNew("waters", waterItem)
          .then(() => props.getUserData())
          .then(() => props.history.push("/water"));
      }
      if (props.isEdit) {
        APIManager.updateResource("waters", waterItem)
          .then(() => props.getUserData())
          .then(() => props.history.push("/water"));
      }
    }
  };

  useEffect(() => {
    props.isEdit &&
      APIManager.getResourceById(
        "waters",
        parseInt(props.match.params.waterId)
      ).then((water) => {
        setWater(water);
        setIsLoading(false);
      });
  }, [props.match.params.waterId, props.isEdit]);

  return (
    <>
      <div className="main_content">
        <WaterHeader user={user} days={days} />
        <WaterForm
          water={water}
          handleFieldChange={handleFieldChange}
          isLoading={isLoading}
          addEditFood={addEditWater}
          isEdit={props.isEdit}
        />
      </div>
    </>
  );
};

export default WaterAddEdit;
