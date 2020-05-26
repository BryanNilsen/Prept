import React from "react";

function HouseholdForm(props) {
  return (
    <>
      <div className="login_form_container">
        <form className="login_form">
          <h2>{props.isEdit ? "Edit" : "Add"} Household Member</h2>
          <div className="form">
            <label htmlFor="name">Name:</label>
            <input
              className="form_inputs"
              type="text"
              required
              onChange={props.handleFieldChange}
              id="name"
              placeholder="Name"
              value={props.householdMember.name}
            />
          </div>
          <div className="form">
            <label htmlFor="gender">Gender:</label>
            <select
              className="form_inputs"
              required
              onChange={props.handleFieldChange}
              id="gender"
              value={props.householdMember.gender}
            >
              <option value="">Select</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div className="form">
            <label htmlFor="dob">DOB:</label>
            <input
              className="form_inputs"
              type="date"
              required
              onChange={props.handleFieldChange}
              id="dob"
              placeholder="date of birth"
              value={props.householdMember.dob}
            />
          </div>
          <div className="form">
            <label htmlFor="weight">Weight (lbs):</label>
            <input
              className="form_inputs"
              type="text"
              required
              onChange={props.handleFieldChange}
              id="weight"
              placeholder="weight"
              value={props.householdMember.weight}
            />
          </div>
          <div className="form">
            <label htmlFor="height">Height (inches):</label>
            <input
              className="form_inputs"
              type="text"
              required
              onChange={props.handleFieldChange}
              id="height"
              placeholder="height"
              value={props.householdMember.height}
            />
          </div>

          <button
            type="button"
            className="btn-pink"
            disabled={props.isLoading}
            onClick={props.editMember}
          >
            {props.isEdit ? "Edit" : "Add"}
          </button>
        </form>
      </div>
    </>
  );
}

export default HouseholdForm;
