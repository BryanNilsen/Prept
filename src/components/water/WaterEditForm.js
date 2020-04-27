import React, { useState, useEffect } from "react";
import APIManager from "../../modules/APIManager";
import WaterForm from "./WaterForm";
import WaterHeader from "./WaterHeader";

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
        <WaterHeader user={user} />
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
