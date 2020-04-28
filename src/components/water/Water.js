import React from "react";
import Calculations from "../../modules/Calculations";
import WaterCard from "./WaterCard";
import WaterHeader from "./WaterHeader";

function Water(props) {
  const user = props.user;
  const getUserData = props.getUserData;

  return (
    <>
      <div className="main_content">
        <WaterHeader user={user} />

        <h2>
          total water Prept:{" "}
          <span class="tooltip">
            {Calculations.calculateWaterTotal(user.waters).toLocaleString()}{" "}
            ounces
            <span class="tooltiptext">
              {Calculations.convertOzToGallons(
                Calculations.calculateWaterTotal(user.waters)
              )}{" "}
              gallons
            </span>
          </span>
        </h2>

        <button
          className="btn-pink"
          onClick={() => {
            props.history.push("/water/new");
          }}
        >
          + add water
        </button>
        <h4>click card for details</h4>
        {/* begin water cards */}
        {user.waters.map((water) => (
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
