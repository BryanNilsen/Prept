import React, { useState, useEffect } from "react";
import Calculations from "../../modules/Calculations";
import WaterCard from "./WaterCard";
import WaterHeader from "./WaterHeader";

function Water(props) {
  const user = props.user;
  const getUserData = props.getUserData;

  // const sortAZName = (a, b) => a.name.localeCompare(b.name);
  // const sortZAName = (a, b) => b.name.localeCompare(a.name);

  const [sortedWaters, setSortedWaters] = useState({ waters: [] });

  const days = Calculations.calculateDaysOfWaterPerHousehold(props.user);

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
            You've Prept: {/* <span className="tooltip"> */}
            {Calculations.calculateWaterTotal(
              user.waters
            ).toLocaleString()}{" "}
            ounces ||
            {/* <span className="tooltiptext"> */}
            {Calculations.convertOzToGallons(
              Calculations.calculateWaterTotal(user.waters)
            )}{" "}
            gallons
            {/* </span> */}
            {/* </span> */}
          </h3>
          <h4>
            Your household of has enough water for approximately{" "}
            {!isNaN(days) ? days : "0"} day
            {days > 1 && "s"} for {user.householdMembers.length}{" "}
            {user.householdMembers.length > 1 ? "people" : "person"} .
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
