import React, { useState, useEffect } from "react";
import APIManager from "../../modules/APIManager";
import household_icon from "../../images/household.png";

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
      APIManager.updateResource("householdMembers", updatedMember).then(() =>
        props.history.push("/household")
      );
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
        <div className="main_content_header">
          <div className="imgwrap">
            <img
              src={household_icon}
              alt="household"
              className="main_header_img"
            />
          </div>
          <h1>Household</h1>
        </div>
        <div className="login_form_container">
          <form className="login_form">
            <h2>Edit Household Member</h2>
            <div className="form">
              <label htmlFor="name">Name:</label>
              <input
                className="form_inputs"
                type="text"
                required
                onChange={handleFieldChange}
                id="name"
                placeholder="Name"
                value={householdMember.name}
              />
            </div>
            <div className="form">
              <label htmlFor="gender">Gender:</label>
              <input
                className="form_inputs"
                type="text"
                required
                onChange={handleFieldChange}
                id="gender"
                placeholder="Gender"
                value={householdMember.gender}
              />
            </div>
            <div className="form">
              <label htmlFor="dob">DOB:</label>
              <input
                className="form_inputs"
                type="date"
                required
                onChange={handleFieldChange}
                id="dob"
                placeholder="date of birth"
                value={householdMember.dob}
              />
            </div>
            <div className="form">
              <label htmlFor="weight">Weight (lbs):</label>
              <input
                className="form_inputs"
                type="text"
                required
                onChange={handleFieldChange}
                id="weight"
                placeholder="weight"
                value={householdMember.weight}
              />
            </div>
            <div className="form">
              <label htmlFor="height">Height (inches):</label>
              <input
                className="form_inputs"
                type="text"
                required
                onChange={handleFieldChange}
                id="height"
                placeholder="height"
                value={householdMember.height}
              />
            </div>

            <button
              type="button"
              className="btn-pink"
              disabled={isLoading}
              onClick={editHouseholdMember}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HouseholdEditForm;
