import React, { useState, useEffect } from "react";
import Calculations from "../../modules/Calculations";
import HouseholdCard from "./HouseholdCard";
import household_icon from "../../images/household.png";

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
        <div className="main_content_header">
          <div className="imgwrap">
            <img
              src={household_icon}
              alt="household"
              className="main_header_img"
            />
          </div>
          <h1>Household</h1>
        </div>
        <h3>{user.householdMembers.length} household members to prep for</h3>
        <h3>
          {needsTotals.water} oz. - (
          {Calculations.convertOzToGallons(needsTotals.water)} gal.) water
          needed per household per day
        </h3>
        <h3>Total Calories needed per day: {needsTotals.calories}</h3>
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
            // getHouseholdMembers={getHouseholdMembers}
            {...props}
          />
        ))}

        {/* end member cards */}
      </div>
    </>
  );
};

export default Household;
