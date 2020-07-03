import React, { useState, useEffect } from "react";
import APIManager from "../../modules/APIManager";
import SupplyForm from "./SupplyForm";
import SuppliesHeader from "./SuppliesHeader";

const SupplyAddEdit = (props) => {
  const user = props.user;
  const [supply, setSupply] = useState({
    userId: 0,
    name: "",
    brand: "",
    qty: "",
    size: "",
    expDate: "",
    categoryId: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...supply };
    stateToChange[evt.target.id] = evt.target.value;
    setSupply(stateToChange);
  };

  const addEditSupply = (evt) => {
    evt.preventDefault();
    const supplyItem = { ...supply };
    if (
      supplyItem.name === "" ||
      supplyItem.brand === "" ||
      supplyItem.qty === "" ||
      supplyItem.size === "" ||
      supplyItem.categoryId === 0
    ) {
      window.alert("Please complete all fields");
    } else {
      if (supply.expDate === "") {
        supplyItem.expDate = null;
      }
      setIsLoading(true);
      // convert input values to integers
      supplyItem.qty = parseInt(supplyItem.qty);
      supplyItem.categoryId = parseInt(supplyItem.categoryId);
      if (!props.isEdit) {
        supplyItem.userId = parseInt(sessionStorage.getItem("userId"));
        // supplyItem.userId = props.user.id; ?? this is quicker??
        APIManager.postNew("supplies", supplyItem)
          .then(() => props.getUserData())
          .then(() => props.history.push("/supplies"));
      }
      if (props.isEdit) {
        APIManager.updateResource("supplies", supplyItem)
          .then(() => props.getUserData())
          .then(() => props.history.push("/supplies"));
      }
    }
  };

  useEffect(() => {
    props.isEdit &&
      APIManager.getResourceById(
        "supplies",
        parseInt(props.match.params.supplyId)
      ).then((supply) => {
        setSupply(supply);
        setIsLoading(false);
      });
  }, [props.match.params.supplyId, props.isEdit]);

  return (
    <>
      <div className="main_content">
        <SuppliesHeader user={user} />
        <SupplyForm
          supply={supply}
          handleFieldChange={handleFieldChange}
          isLoading={isLoading}
          addEditSupply={addEditSupply}
          isEdit={props.isEdit}
        />
      </div>
    </>
  );
};

export default SupplyAddEdit;
