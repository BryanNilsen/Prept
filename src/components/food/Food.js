import React, { useState, useEffect } from "react";
import Calculations from "../../modules/Calculations";
import FoodHeader from "./FoodHeader";
import FoodCard from "./FoodCard";

const Food = (props) => {
  const user = props.user;
  const getUserData = props.getUserData;
  const days = Calculations.calculateDaysOfFoodPerHousehold(props.user);
  const [sortedFood, setSortedFood] = useState({ foods: [] });

  const goalPercentage = Calculations.goalPercentage(days, user.foodGoal);

  const handleSort = (evt) => {
    const foodSort = [...user.foods];
    if (evt.target.value === "sortAZName") {
      setSortedFood({
        foods: foodSort.sort((a, b) => a.name.localeCompare(b.name)),
      });
    }
    if (evt.target.value === "sortAZBrand") {
      setSortedFood({
        foods: foodSort.sort((a, b) => a.brand.localeCompare(b.brand)),
      });
    }
    if (evt.target.value === "sortZABrand") {
      setSortedFood({
        foods: foodSort.sort((a, b) => b.brand.localeCompare(a.brand)),
      });
    }
    if (evt.target.value === "sortCalAsc") {
      setSortedFood({
        foods: foodSort.sort(
          (a, b) =>
            Calculations.getFoodCalories(a) - Calculations.getFoodCalories(b)
        ),
      });
    }
    if (evt.target.value === "sortCalDesc") {
      setSortedFood({
        foods: foodSort.sort(
          (a, b) =>
            Calculations.getFoodCalories(b) - Calculations.getFoodCalories(a)
        ),
      });
    }
    if (evt.target.value === "sortZAName") {
      setSortedFood({
        foods: foodSort.sort((a, b) => b.name.localeCompare(a.name)),
      });
    }
    if (evt.target.value === "expired") {
      setSortedFood({
        foods: foodSort.filter((food) => Calculations.isExpired(food)),
      });
    }
    if (evt.target.value === "expiring") {
      setSortedFood({
        foods: foodSort.filter((food) => Calculations.isExpiring(food)),
      });
    }
    if (evt.target.value === "") {
      setSortedFood({
        foods: user.foods,
      });
    }
  };

  const handleSearch = (evt) => {
    const foodSort = [...user.foods];
    const input = evt.target.value.toLowerCase();

    setSortedFood({
      foods: foodSort.filter(
        (food) =>
          food.name.toLowerCase().includes(input) ||
          food.brand.toLowerCase().includes(input)
      ),
    });
  };

  useEffect(() => {
    setSortedFood({ foods: user.foods });
  }, [user.foods]);

  return (
    <>
      <div className="main_content">
        <FoodHeader user={user} days={days} goalPercentage={goalPercentage} />
        {/* overview */}
        <section className="overview">
          <h3>
            You've Prept{" "}
            {Calculations.calculateFoodTotal(user.foods).toLocaleString()}{" "}
            calories
          </h3>
          <h4>
            Your household of has enough food for approximately{" "}
            {!isNaN(days) ? days : "0"} days for {user.householdMembers.length}{" "}
            {user.householdMembers.length > 1 ? "people" : "person"}.
          </h4>
          <h4>
            You are {goalPercentage}% of the way toward your goal of{" "}
            {user.foodGoal} days.
          </h4>
        </section>

        {/* inventory */}
        <div className="inventory_add">
          <h2>Food Inventory:</h2>
          <select onChange={handleSort}>
            <option value="">sort / filter</option>
            <option value="sortAZName">Name A-Z</option>
            <option value="sortZAName">Name Z-A</option>
            <option value="sortAZBrand">Brand A-Z</option>
            <option value="sortZABrand">Brand Z-A</option>
            <option value="sortCalAsc">Calories Low-High</option>
            <option value="sortCalDesc">Calories High-Low</option>
            <option value="expired">Expired</option>
            <option value="expiring">Expiring Soon</option>
          </select>
          <input onChange={handleSearch} placeholder="search" />
          <button
            className="btn-pink"
            onClick={() => {
              props.history.push("/food/new");
            }}
          >
            + add food
          </button>
        </div>

        <h5 className="details_header">click card to expand details</h5>
        {/* foodcards */}

        {sortedFood.foods.map((food) => (
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
