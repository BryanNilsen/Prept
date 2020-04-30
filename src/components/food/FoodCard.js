import React from "react";
import APIManager from "../../modules/APIManager";

function FoodCard(props) {
  const deleteFood = (id) => {
    APIManager.deleteResource("foods", id).then(() => props.getUserData());
  };

  const today = new Date();
  const expDate = new Date(props.food.expDate);
  const isExpired = () => expDate < today;

  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const isExpiring = () => today < expDate && expDate < addDays(today, 10);

  const convertedDate = new Intl.DateTimeFormat("en-US").format(expDate);

  return (
    <>
      {/* change classnames */}
      <section className="card household_card">
        <div className="household_details">
          <div className="">
            <strong>{props.food.name}</strong>
          </div>
          <div className="card_status">
            {props.food.qty} x {props.food.oz} oz. {props.food.container}
            {props.food.qty > 1 && "s"}
          </div>
          <div className={isExpired() ? "card_status expired" : "card_status"}>
            expires: {convertedDate}
          </div>
        </div>
        <div className="card_middle-lg">
          <strong>
            {(
              props.food.qty *
              props.food.servings *
              props.food.calPerServing
            ).toLocaleString()}
            <span className="smaller">cal.</span>
          </strong>
        </div>
        <div className="edit-delete_btns">
          <button
            className="edit"
            onClick={() => props.history.push(`/food/edit/${props.food.id}`)}
          >
            edit
          </button>
          <button className="delete" onClick={() => deleteFood(props.food.id)}>
            delete
          </button>
        </div>
      </section>
    </>
  );
}

export default FoodCard;
