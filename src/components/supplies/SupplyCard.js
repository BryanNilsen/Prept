import React, { useState } from "react";
import APIManager from "../../modules/APIManager";
import Calculations from "../../modules/Calculations";
import Button from "../buttons/Button";

function SupplyCard(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const supply = props.supply;

  const handleExpand = (evt) => {
    setIsExpanded(!isExpanded);
  };

  const deleteSupply = (id) => {
    APIManager.deleteResource("supplies", id).then(() => props.getUserData());
  };

  // move this to calculations for universal access
  const expDate = supply.expDate !== "" ? new Date(supply.expDate) : null;
  const convertedDate =
    expDate !== null ? new Intl.DateTimeFormat("en-US").format(expDate) : null;

  function dateStatus(supply) {
    let status = "";
    if (supply.expDate === null) {
      return "";
    }
    if (Calculations.isExpired(supply)) {
      status += " expired";
    }
    if (Calculations.isExpiring(supply)) {
      status += " expiring";
    }
    return status;
  }

  return (
    <>
      {/* change classnames */}
      <section className="card household_card" onClick={() => handleExpand()}>
        <div className="food_details">
          <div className={dateStatus(supply)}>
            <strong>{supply.name}</strong> - <em>{supply.brand}</em>
          </div>
          {isExpanded && (
            <>
              <div className="card_status">{supply.category.name}</div>
              <div className="card_status">
                {supply.qty} x {supply.size}
              </div>

              {supply.expDate != null && (
                <div className={dateStatus(supply)}>
                  {Calculations.isExpiring(supply) && "EXPIRING SOON: "}
                  {Calculations.isExpired(supply) && "EXPIRED: "}
                  {dateStatus(supply) === "" && "expires: "}
                  {convertedDate !== null ? convertedDate : "never"}
                </div>
              )}
            </>
          )}
        </div>
        <div className="card_middle-lg">
          {/* <strong>{Calculations.getFoodCalories(food).toLocaleString()}</strong> */}
          <span className="smaller">cal.</span>
        </div>
        <div className="edit-delete_btns">
          <Button
            text="edit"
            className="edit"
            callback={() => props.history.push(`/supplies/edit/${supply.id}`)}
          />
          <Button
            text="delete"
            className="delete"
            callback={() => deleteSupply(supply.id)}
          />
        </div>
      </section>
    </>
  );
}

export default SupplyCard;
