import React, { useState, useEffect } from "react";
import Calculations from "../../modules/Calculations";
import WaterCard from "./WaterCard";
import WaterHeader from "./WaterHeader";

function Water(props) {
  const user = props.user;
  const getUserData = props.getUserData;

  const [sortedWaters, setSortedWaters] = useState({ waters: [] });

  const days = Calculations.calculateDaysOfWaterPerHousehold(props.user);
  const goalPercentage = Calculations.goalPercentage(days, user.waterGoal);

  const handleSort = (evt) => {
    const waterSort = [...user.waters];
    if (evt.target.value === "sortAZName") {
      setSortedWaters({
        waters: waterSort.sort((a, b) => a.name.localeCompare(b.name)),
      });
    }
    if (evt.target.value === "sortZAName") {
      setSortedWaters({
        waters: waterSort.sort((a, b) => b.name.localeCompare(a.name)),
      });
    }
    if (evt.target.value === "sortOzHighLow") {
      setSortedWaters({
        waters: waterSort.sort((a, b) => b.qty * b.oz - a.qty * a.oz),
      });
    }
    if (evt.target.value === "sortOzLowHigh") {
      setSortedWaters({
        waters: waterSort.sort((a, b) => a.qty * a.oz - b.qty * b.oz),
      });
    }
    if (evt.target.value === "") {
      setSortedWaters({
        waters: user.waters,
      });
    }
  };

  useEffect(() => {
    setSortedWaters({ waters: user.waters });
  }, [user.waters]);

  return (
    <>
      <div className="main_content">
        <WaterHeader user={user} days={days} />

        {/* overview */}
        <section className="overview">
          <h3>
            You've Prept:{" "}
            {Calculations.calculateWaterTotal(user.waters).toLocaleString()}{" "}
            ounces - or -{" "}
            {Calculations.convertOzToGallons(
              Calculations.calculateWaterTotal(user.waters)
            )}{" "}
            gallons
          </h3>
          <h4>
            That's enough water for approximately {!isNaN(days) ? days : "0"}{" "}
            day
            {days > 1 && "s"} for {user.householdMembers.length}{" "}
            {user.householdMembers.length > 1 ? "people" : "person"}.{" "}
          </h4>
          <h4>
            {" "}
            You are {goalPercentage}% of the way toward your goal of{" "}
            {user.waterGoal} days.
          </h4>
        </section>

        {/* inventory */}
        <div className="inventory_add">
          <h2>Inventory:</h2>
          <select onChange={handleSort}>
            <option value="">sort / reset</option>
            <option value="sortAZName">Name A-Z</option>
            <option value="sortZAName">Name Z-A</option>
            <option value="sortOzHighLow">Oz. high low</option>
            <option value="sortOzLowHigh">Oz. low high</option>
          </select>
          <button
            className="btn-pink"
            onClick={() => {
              props.history.push("/water/new");
            }}
          >
            + add water
          </button>
        </div>

        {/* begin water cards */}
        {sortedWaters.waters.map((water) => (
          <WaterCard
            key={water.id}
            water={water}
            user={user}
            getUserData={getUserData}
            {...props}
          />
        ))}
        {/* end water cards */}
      </div>
    </>
  );
}

export default Water;
