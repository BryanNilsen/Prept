import React, { useState } from 'react';
import APIManager from "../../modules/APIManager"

const HouseholdAddForm = props => {
  const [householdMember, setHouseholdMember] = useState({ userId: 0, name: "", dob: "", weight: 0, height: 0 });
  const [isLoading, setIsLoading] = useState(false);


  const handleFieldChange = evt => {
    const stateToChange = { ...householdMember };
    stateToChange[evt.target.id] = evt.target.value;
    setHouseholdMember(stateToChange);
  };

  const constructNewHouseholdMember = evt => {
    evt.preventDefault();
    const newHouseholdMember = {...householdMember};
    newHouseholdMember.userId = parseInt(sessionStorage.getItem("userId"))
    
    if (newHouseholdMember.name === "" || newHouseholdMember.dob === "") {
      window.alert("Please input name and dob");
    } else {
      setIsLoading(true);
      APIManager.postNew("householdMembers", newHouseholdMember)
        .then(() => props.history.push("/household"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Name"
            />
            <label htmlFor="name">Name</label>

            <input
              type="date"
              required
              onChange={handleFieldChange}
              id="dob"
              placeholder="date of birth"
            />
            <label htmlFor="dob">Date of Birth</label>

            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="weight"
              placeholder="weight"
            />
            <label htmlFor="weight">Weight</label>


            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="height"
              placeholder="height"
            />
            <label htmlFor="height">Height</label>
          </div>

          <div>
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewHouseholdMember}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default HouseholdAddForm