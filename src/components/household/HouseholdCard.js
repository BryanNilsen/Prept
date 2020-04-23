import React from "react";
import APIManager from "../../modules/APIManager";
import Calculations from "../../modules/Calculations";
import water_icon from "../../images/water.png";
import food_icon from "../../images/grocery.png";

function HouseholdCard(props) {
  const deleteHouseholdMember = (id) => {
    APIManager.deleteResource("householdMembers", id).then(() =>
      props.getUserData()
    );
  };

  return (
    <>
      <section className="card household_card">
        <div className="household_details">
          <div className="card_title">
            <strong>{props.member.name}:</strong>{" "}
            {Calculations.getAge(props.member)}yrs{" - "}
            {Calculations.convertInToFeet(props.member.height)}
            {" - "}
            {props.member.weight}lbs.
          </div>
          <div className="card_status">
            <img src={water_icon} alt="water bottle" />
            {Calculations.getWaterPerPersonPerDay(props.member)} ounces per day
          </div>
          <div className="card_status">
            <img src={food_icon} alt="groceries" />
            {Calculations.getCaloriesPerPersonPerDay(
              props.member
            ).toLocaleString()}{" "}
            calories per day
          </div>
        </div>
        <div className="edit-delete_btns">
          <button
            className="edit"
            onClick={() =>
              props.history.push(`/household/edit/${props.member.id}`)
            }
          >
            edit
          </button>
          <button
            className="delete"
            onClick={() => deleteHouseholdMember(props.member.id)}
          >
            delete
          </button>
        </div>
      </section>
    </>
  );
}

export default HouseholdCard;
