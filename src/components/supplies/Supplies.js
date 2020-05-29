import React, { useState, useEffect } from "react";
import SuppliesHeader from "./SuppliesHeader";
import Button from "../buttons/Button";
import SupplyCard from "./SupplyCard";

const Supplies = (props) => {
  const user = props.user;
  const getUserData = props.getUserData;
  const [sortedSupplies, setSortedSupplies] = useState({ supplies: [] });
  const [categories, setCategories] = useState([]);

  // const filterSelect = document.getElementById("filter_select");

  const handleFilter = (evt) => {
    const supplyFilter = [...user.supplies];
    const eventId = parseInt(evt.target.value);
    if (eventId !== 0) {
      const sorted = supplyFilter.filter(
        (supply) => supply.categoryId === eventId
      );
      setSortedSupplies({
        supplies: sorted,
      });
      return;
    }
    setSortedSupplies({
      supplies: user.supplies,
    });
  };

  useEffect(() => {
    function getCategories() {
      var flags = {};
      var newCategories = user.supplies
        .map((supply) => supply.category)
        .filter((category) => {
          if (flags[category.id]) {
            return false;
          }
          flags[category.id] = true;
          return true;
        });
      return newCategories;
    }
    if (user.supplies.length > 0) {
      setCategories(getCategories());
    }
  }, [user.supplies]);

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
          <select>
            <option value="">sort / reset</option>
            <option value="sortAZName">Name A-Z</option>
            <option value="sortZAName">Name Z-A</option>
            <option value="sortAZCategory">Category A-Z</option>
            <option value="ssortZACategory">Category Z-A</option>
          </select>
          <select id="filter_select" onChange={handleFilter}>
            <option value="0">Filter</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
            <option value="0">Clear Filter</option>
          </select>
          <Button
            className="btn-pink"
            text="+ add supplies"
            callback={() => {
              props.history.push("/supplies/new");
            }}
          />
        </div>

        <h5 className="details_header">click card to expand details</h5>
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
