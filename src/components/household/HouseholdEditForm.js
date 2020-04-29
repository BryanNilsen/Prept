import React, { useState, useEffect } from "react";
import APIManager from "../../modules/APIManager";
import HouseholdForm from "./HouseholdForm";
import HouseholdHeader from "./HouseholdHeader";

const HouseholdEditForm = (props) => {
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

  const editHouseholdMember = (evt) => {
    evt.preventDefault();
    const updatedMember = { ...householdMember };
    if (updatedMember.name === "" || updatedMember.dob === "") {
      window.alert("Please input name and dob");
    } else {
      setIsLoading(true);
      // convert input values to integers
      updatedMember.weight = parseInt(updatedMember.weight);
      updatedMember.height = parseInt(updatedMember.height);
      APIManager.updateResource("householdMembers", updatedMember)
        .then(() => props.getUserData())
        .then(() => props.history.push("/household"));
    }
  };

  useEffect(() => {
    APIManager.getResourceById(
      "householdMembers",
      parseInt(props.match.params.memberId)
    ).then((member) => {
      setHouseholdMember(member);
      setIsLoading(false);
    });
  }, [props.match.params.memberId]);

  return (
    <>
      <div className="main_content">
        <HouseholdHeader user={props.user} />
        <HouseholdForm
          householdMember={householdMember}
          handleFieldChange={handleFieldChange}
          isLoading={isLoading}
          editMember={editHouseholdMember}
          isEdit={true}
        />
      </div>
    </>
  );
};

export default HouseholdEditForm;
