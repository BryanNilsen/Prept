import React, { useState } from "react";
import APIManager from "../../modules/APIManager";
import HouseholdForm from "./HouseholdForm";
import HouseholdHeader from "./HouseholdHeader";

const HouseholdAddForm = (props) => {
  const [householdMember, setHouseholdMember] = useState({
    userId: 0,
    name: "",
    dob: "",
    weight: 0,
    height: 0,
    gender: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...householdMember };
    stateToChange[evt.target.id] = evt.target.value;
    setHouseholdMember(stateToChange);
  };

  const constructNewHouseholdMember = (evt) => {
    evt.preventDefault();
    const newHouseholdMember = { ...householdMember };
    newHouseholdMember.userId = parseInt(sessionStorage.getItem("userId"));

    if (newHouseholdMember.name === "" || newHouseholdMember.dob === "") {
      window.alert("Please input name and dob");
    } else {
      setIsLoading(true);
      // convert input values to integers
      newHouseholdMember.weight = parseInt(newHouseholdMember.weight);
      newHouseholdMember.height = parseInt(newHouseholdMember.height);
      APIManager.postNew("householdMembers", newHouseholdMember)
        .then(() => props.getUserData())
        .then(() => props.history.push("/household"));
    }
  };

  return (
    <>
      <div className="main_content">
        <HouseholdHeader user={props.user} />
        <HouseholdForm
          householdMember={householdMember}
          handleFieldChange={handleFieldChange}
          isLoading={isLoading}
          editMember={constructNewHouseholdMember}
          isEdit={false}
        />
      </div>
    </>
  );
};

export default HouseholdAddForm;
