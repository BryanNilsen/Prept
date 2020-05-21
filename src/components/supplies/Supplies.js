import React, { useState, useEffect } from "react";
// import Calculations from "../../modules/Calculations";
import SuppliesHeader from "./SuppliesHeader";
// import SuppliesCard from "./SuppliesCard";

const Supplies = (props) => {
  const user = props.user;
  return (
    <>
      <div className="main_content">
        <SuppliesHeader user={user} />
      </div>
    </>
  );
};
export default Supplies;
