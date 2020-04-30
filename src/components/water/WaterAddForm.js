import React, { useState } from "react";
import APIManager from "../../modules/APIManager";
import WaterForm from "./WaterForm";
import WaterHeader from "./WaterHeader";

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
      // prevent multiple form submissions
      setIsLoading(true);
      // convert input values to integers
      newWaterItem.qty = parseInt(newWaterItem.qty);
      newWaterItem.oz = parseInt(newWaterItem.oz);
      APIManager.postNew("waters", newWaterItem)
        .then(() => props.getUserData())
        .then(() => props.history.push("/water"));
    }
  };

  return (
    <>
      <div className="main_content">
        <WaterHeader user={user} />
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
