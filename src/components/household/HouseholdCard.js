import React from "react";
import water_icon from "../../images/water.png";
import food_icon from "../../images/grocery.png";

function HouseholdCard(props) {

  return (
    <>
      <section className="card household_card">
        <div className="household_details">
        <div className="card_title">{props.member.name}</div>
        <div className="card_status"><img src={water_icon} alt="water bottle" /> 1.5 gallons per day</div>
        <div className="card_status"><img src={food_icon} alt="groceries" /> 2000 calories per day</div>
        </div>
        <div className="edit-delete_btns">
          <button className="edit">edit</button>
          <button className="delete">delete</button>
        </div>
      </section>
    </>
  );
}

export default HouseholdCard;