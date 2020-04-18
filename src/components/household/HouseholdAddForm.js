import React, { useState } from "react";
import APIManager from "../../modules/APIManager";
import household_icon from "../../images/household.png";

const HouseholdAddForm = (props) => {
  const [householdMember, setHouseholdMember] = useState({
    userId: 0,
    name: "",
    dob: "",
    weight: 0,
    height: 0,
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
      APIManager.postNew("householdMembers", newHouseholdMember).then(() =>
        props.history.push("/household")
      );
    }
  };

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
            <h2>Add Household Member</h2>
            <div className="form">
              <label htmlFor="name">Name:</label>
              <input
                className="form_inputs"
                type="text"
                required
                onChange={handleFieldChange}
                id="name"
                placeholder="Name"
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
              />
            </div>

            <button
              type="button"
              className="btn-pink"
              disabled={isLoading}
              onClick={constructNewHouseholdMember}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HouseholdAddForm;