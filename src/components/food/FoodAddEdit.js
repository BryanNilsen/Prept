import React, { useState, useEffect } from "react";
import APIManager from "../../modules/APIManager";
import FoodForm from "./FoodForm";
import FoodHeader from "./FoodHeader";

const FoodAddEdit = (props) => {
  const user = props.user;
  const [food, setFood] = useState({
    userId: 0,
    name: "",
    qty: "",
    oz: 0,
    servings: 0,
    calPerServing: 0,
    expDate: "",
    container: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...food };
    stateToChange[evt.target.id] = evt.target.value;
    setFood(stateToChange);
  };

  const addEditFood = (evt) => {
    evt.preventDefault();
    const foodItem = { ...food };
    if (
      foodItem.name === "" ||
      foodItem.qty === "" ||
      foodItem.oz === "" ||
      foodItem.container === ""
    ) {
      window.alert("Please complete all fields");
    } else {
      setIsLoading(true);
      // convert input values to integers
      foodItem.qty = parseInt(foodItem.qty);
      foodItem.oz = parseInt(foodItem.oz);
      if (!props.isEdit) {
        foodItem.userId = parseInt(sessionStorage.getItem("userId"));
        APIManager.postNew("foods", foodItem)
          .then(() => props.getUserData())
          .then(() => props.history.push("/food"));
      }
      if (props.isEdit) {
        APIManager.updateResource("foods", foodItem)
          .then(() => props.getUserData())
          .then(() => props.history.push("/food"));
      }
    }
  };

  useEffect(() => {
    props.isEdit &&
      APIManager.getResourceById(
        "foods",
        parseInt(props.match.params.foodId)
      ).then((food) => {
        setFood(food);
        setIsLoading(false);
      });
  }, [props.match.params.foodId, props.isEdit]);

  return (
    <>
      <div className="main_content">
        <FoodHeader user={user} />
        <FoodForm
          food={food}
          handleFieldChange={handleFieldChange}
          isLoading={isLoading}
          addEditFood={addEditFood}
          isEdit={props.isEdit}
        />
      </div>
    </>
  );
};

export default FoodAddEdit;
