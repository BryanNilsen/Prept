import React, { useState, useEffect } from "react";
import APIManager from "../../modules/APIManager";
import Calculations from "../../modules/Calculations";
import household_icon from "../../images/household.png";
import HouseholdCard from "./HouseholdCard";

const Household = (props) => {
  const [householdMembers, setHouseholdMembers] = useState([]);
  const [needsTotals, setNeedsTotals] = useState({
    water: 0,
    calories: 0,
  });

  const getHouseholdMembers = () => {
    const userId = sessionStorage.getItem("userId");
    return APIManager.getUserWithHousehold(userId).then((res) => {
      setHouseholdMembers(res.householdMembers);
      return res.householdMembers;
    });
  };

  useEffect(() => {
    getHouseholdMembers().then((members) => {
      const water = Calculations.getTotalWaterNeededPerHouseholdPerDay(members);
      const calories = Calculations.getTotalCaloriesNeededPerHouseholdPerDay(
        members
      );
      setNeedsTotals({ water, calories });
    });
  }, []);

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
        <h3>You have logged {householdMembers.length} members</h3>
        <h3>
          {needsTotals.water} - water in ounces needed per household per day
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

        {householdMembers.map((member) => (
          <HouseholdCard
            key={member.id}
            member={member}
            getHouseholdMembers={getHouseholdMembers}
            {...props}
          />
        ))}

        {/* end member cards */}
      </div>
    </>
  );
};

export default Household;
