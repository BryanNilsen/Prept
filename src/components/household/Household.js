import React, { useState, useEffect } from "react";
import Calculations from "../../modules/Calculations";
import HouseholdCard from "./HouseholdCard";
import HouseholdHeader from "./HouseholdHeader";

const Household = (props) => {
  const user = props.user;
  const getUserData = props.getUserData;

  const [needsTotals, setNeedsTotals] = useState({
    water: 0,
    calories: 0,
  });

  useEffect(() => {
    const water = Calculations.getTotalWaterNeededPerHouseholdPerDay(
      user.householdMembers
    );
    const calories = Calculations.getTotalCaloriesNeededPerHouseholdPerDay(
      user.householdMembers
    );
    setNeedsTotals({ water, calories });
  }, [user.householdMembers]);

  return (
    <>
      <div className="main_content">
        <HouseholdHeader user={user} />

        <div>
          <h2>Total daily needs for your household:</h2>
          <h3>
            {needsTotals.water} oz. - (
            {Calculations.convertOzToGallons(needsTotals.water)} gal.) water
            needed per household per day
          </h3>
          <h3>Total Calories needed per day: {needsTotals.calories}</h3>
        </div>
        <button
          className="btn-pink"
          onClick={() => {
            props.history.push("/household/new");
          }}
        >
          + add members
        </button>
        <h4>click card for details</h4>
        {/* begin member cards */}
        {user.householdMembers.map((member) => (
          <HouseholdCard
            key={member.id}
            member={member}
            user={user}
            getUserData={getUserData}
            {...props}
          />
        ))}
        {/* end member cards */}
      </div>
    </>
  );
};

export default Household;
