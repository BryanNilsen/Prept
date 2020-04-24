import React from "react";
import WaterCard from "./WaterCard";
import water_icon from "../../images/water.png";

function Water(props) {
  const user = props.user;
  const getUserData = props.getUserData;

  return (
    <>
      <div className="main_content">
        <div className="main_content_header">
          <div className="imgwrap">
            <img src={water_icon} alt="water" className="main_header_img" />
          </div>
          <h1>Water</h1>
        </div>

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
