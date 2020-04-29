import React from "react";
import Calculations from "../../modules/Calculations";
import WaterCard from "./WaterCard";
import WaterHeader from "./WaterHeader";

function Water(props) {
  const user = props.user;
  const getUserData = props.getUserData;

  const days = Calculations.calculateDaysOfWaterPerHousehold(props.user);

  return (
    <>
      <div className="main_content">
        <WaterHeader user={user} days={days} />

        {/* overview */}
        <section className="overview">
          <h3>
            You've Prept:{" "}
            <span className="tooltip">
              {Calculations.calculateWaterTotal(user.waters).toLocaleString()}{" "}
              ounces
              <span className="tooltiptext">
                {Calculations.convertOzToGallons(
                  Calculations.calculateWaterTotal(user.waters)
                )}{" "}
                gallons
              </span>
            </span>
          </h3>
          <h4>
            Your household has enough water for approximately{" "}
            {!isNaN(days) ? days : "0"} day
            {days > 1 && "s"}
          </h4>
        </section>

        <div className="inventory_add">
          <h2>Water Inventory:</h2>
          <button
            className="btn-pink"
            onClick={() => {
              props.history.push("/water/new");
            }}
          >
            + add water
          </button>
        </div>
        {/* <h4>click card for details</h4> */}

        {/* begin water cards */}
        {user.waters
          .sort((a, b) => a.name - b.name)
          .map((water) => (
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
