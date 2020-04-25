import React from "react";
import APIManager from "../../modules/APIManager";
// import Calculations from "../../modules/Calculations";
// import water_icon from "../../images/water.png";
// import food_icon from "../../images/grocery.png";

function WaterCard(props) {
  const deleteWater = (id) => {
    APIManager.deleteResource("waters", id).then(() => props.getUserData());
  };

  return (
    <>
      {/* change classnames */}
      <section className="card household_card">
        <div className="household_details">
          <div className="card_title">
            <strong>{props.water.name}</strong>
          </div>
          <div className="card_status">
            {props.water.qty} x {props.water.oz} oz. {props.water.container}
            {props.water.qty > 1 && "s"} ={" "}
            {(props.water.qty * props.water.oz).toLocaleString()}
          </div>
        </div>
        <div className="edit-delete_btns">
          <button
            className="edit"
            onClick={() =>
              props.history.push(`/household/edit/${props.water.id}`)
            }
          >
            edit
          </button>
          <button
            className="delete"
            onClick={() => deleteWater(props.water.id)}
          >
            delete
          </button>
        </div>
      </section>
    </>
  );
}

export default WaterCard;
