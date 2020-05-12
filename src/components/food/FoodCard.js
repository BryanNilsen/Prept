import React from "react";
import APIManager from "../../modules/APIManager";
import Calculations from "../../modules/Calculations";

function FoodCard(props) {
  const food = props.food;

  const deleteFood = (id) => {
    APIManager.deleteResource("foods", id).then(() => props.getUserData());
  };

  // move this to calculations for universal access
  const expDate = new Date(food.expDate);
  const convertedDate = new Intl.DateTimeFormat("en-US").format(expDate);

  function dateStatus(food) {
    let status = "";
    if (Calculations.isExpired(food)) {
      status += " expired";
    }
    if (Calculations.isExpiring(food)) {
      status += " expiring";
    }
    return status;
  }

  return (
    <>
      {/* change classnames */}
      <section className="card household_card">
        <div className="household_details">
          <div className="">
            <strong>{food.name}</strong>
          </div>
          <div className="card_status">
            {food.qty} x {food.oz} oz. {food.container}
            {food.qty > 1 && "s"}
          </div>
          <div className={dateStatus(food)}>
            {Calculations.isExpiring(food) && "EXPIRING SOON: "}
            {Calculations.isExpired(food) && "EXPIRED: "}
            {dateStatus(food) === "" && "expires: "}
            {convertedDate}
          </div>
        </div>
        <div className="card_middle-lg">
          <strong>
            {(food.qty * food.servings * food.calPerServing).toLocaleString()}
            <span className="smaller">cal.</span>
          </strong>
        </div>
        <div className="edit-delete_btns">
          <button
            className="edit"
            onClick={() => props.history.push(`/food/edit/${food.id}`)}
          >
            edit
          </button>
          <button className="delete" onClick={() => deleteFood(food.id)}>
            delete
          </button>
        </div>
      </section>
    </>
  );
}

export default FoodCard;
