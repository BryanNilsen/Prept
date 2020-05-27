import React, { useState, useEffect } from "react";
import SuppliesHeader from "./SuppliesHeader";
import Button from "../buttons/Button";
import SupplyCard from "./SupplyCard";

const Supplies = (props) => {
  const user = props.user;
  const getUserData = props.getUserData;
  const [sortedSupplies, setSortedSupplies] = useState({ supplies: [] });

  useEffect(() => {
    setSortedSupplies({ supplies: user.supplies });
  }, [user.supplies]);

  return (
    <>
      <div className="main_content">
        <SuppliesHeader user={user} />
        {/* begin overview */}
        <section className="overview">
          <h3>You've Prept...supplies</h3>
        </section>
        {/* end overview */}
        {/* inventory */}
        <div className="inventory_add">
          <h2>Inventory:</h2>
          <select onChange="">
            <option value="">sort / reset</option>
            <option value="sortAZName">Name A-Z</option>
            <option value="sortZAName">Name Z-A</option>
            <option value="sortAZCategory">Category A-Z</option>
            <option value="ssortZACategory">Category Z-A</option>
          </select>
          <select onChange="" id="filter_select">
            <option value="">Filter</option>
            <option value="prescription">Prescriptions</option>
            <option value="cleaners">Cleaners / Disinfectants</option>
          </select>
          <Button
            className="btn-pink"
            text="+ add supplies"
            callback={() => {
              props.history.push("/supplies/new");
            }}
          />
        </div>
        {/* begin supply cards */}

        {sortedSupplies.supplies.map((supply) => (
          <SupplyCard
            key={supply.id}
            supply={supply}
            user={user}
            getUserData={getUserData}
            {...props}
          />
        ))}
        {/* end supply cards */}
      </div>
    </>
  );
};
export default Supplies;
