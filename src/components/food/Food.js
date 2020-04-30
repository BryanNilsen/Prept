import React from "react";
import Calculations from "../../modules/Calculations";
import FoodHeader from "./FoodHeader";
import FoodCard from "./FoodCard";

const Food = (props) => {
  const user = props.user;
  const getUserData = props.getUserData;
  return (
    <>
      <div className="main_content">
        <FoodHeader user={user} />
        {/* overview */}
        <section className="overview">
          <h3>You've Prept x calories</h3>
          <h4>
            Your household of has enough food for approximately X days for{" "}
            {user.householdMembers.length}{" "}
            {user.householdMembers.length > 1 ? "people" : "person"} .
          </h4>
        </section>

        {/* inventory */}
        <div className="inventory_add">
          <h2>Food Inventory:</h2>
          <button
            className="btn-pink"
            onClick={() => {
              props.history.push("/water/new");
            }}
          >
            + add food
          </button>
        </div>
        {/* foodcards */}
        <h4>click card to expand details</h4>

        {user.foods.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
            user={user}
            getUserData={getUserData}
            {...props}
          />
        ))}
        {/* end water cards */}
      </div>
    </>
  );
};

export default Food;
