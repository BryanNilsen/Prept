import React, { useState } from "react";
import APIManager from "../../modules/APIManager";
import Calculations from "../../modules/Calculations";
import Button from "../buttons/Button";

function FoodCard(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const food = props.food;

  const handleExpand = (evt) => {
    setIsExpanded(!isExpanded);
  };

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
      <section className="card household_card" onClick={() => handleExpand()}>
        <div className="food_details">
          <div className={dateStatus(food)}>
            <strong>{food.name}</strong> - <em>{food.brand}</em>
          </div>
          {isExpanded && (
            <>
              <div className="card_status">
                {food.qty} x {food.oz}oz. {food.container}
                {food.qty > 1 && "s"}
              </div>
              <div className="card_status">
                {food.servings} serving{food.servings > 1 && "s"}
              </div>
              <div className="card_status">
                {food.calPerServing} calories per serving
              </div>
              <div className={dateStatus(food)}>
                {Calculations.isExpiring(food) && "EXPIRING SOON: "}
                {Calculations.isExpired(food) && "EXPIRED: "}
                {dateStatus(food) === "" && "expires: "}
                {convertedDate}
              </div>
            </>
          )}
        </div>
        <div className="card_middle-lg">
          <strong>{Calculations.getFoodCalories(food).toLocaleString()}</strong>
          <span className="smaller">cal.</span>
        </div>
        <div className="edit-delete_btns">
          <Button
            text="edit"
            className="edit"
            callback={() => props.history.push(`/food/edit/${food.id}`)}
          />
          <Button
            text="delete"
            className="delete"
            callback={() => deleteFood(food.id)}
          />
        </div>
      </section>
    </>
  );
}

export default FoodCard;
