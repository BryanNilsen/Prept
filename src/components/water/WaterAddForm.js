import React, { useState } from "react";
import APIManager from "../../modules/APIManager";
import water_icon from "../../images/water.png";

const WaterAddForm = (props) => {
  const [waterItem, setwaterItem] = useState({
    userId: 0,
    name: "",
    qty: "",
    oz: 0,
    container: 0,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...waterItem };
    stateToChange[evt.target.id] = evt.target.value;
    setwaterItem(stateToChange);
  };

  const constructNewWaterItem = (evt) => {
    evt.preventDefault();
    const newWaterItem = { ...waterItem };
    newWaterItem.userId = parseInt(sessionStorage.getItem("userId"));

    if (
      newWaterItem.name === "" ||
      newWaterItem.qty === "" ||
      newWaterItem.oz === "" ||
      newWaterItem.container === ""
    ) {
      window.alert("Please complete all fields");
    } else {
      setIsLoading(true);
      APIManager.postNew("waters", newWaterItem)
        .then(() => props.getUserData())
        .then(() => props.history.push("/water"));
    }
  };

  return (
    <>
      <div className="main_content">
        <div className="main_content_header">
          <div className="imgwrap">
            <img src={water_icon} alt="water" className="main_header_img" />
          </div>
          <h1>Water</h1>
        </div>
        <div className="login_form_container">
          <form className="login_form">
            <h2>Add Water Item</h2>
            <div className="form">
              <label htmlFor="name">Name:</label>
              <input
                className="form_inputs"
                type="text"
                required
                onChange={handleFieldChange}
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="form">
              <label htmlFor="qty">Quantity:</label>
              <input
                className="form_inputs"
                type="text"
                required
                onChange={handleFieldChange}
                id="qty"
                placeholder="quantity"
              />
            </div>
            <div className="form">
              <label htmlFor="oz">Ounces:</label>
              <input
                className="form_inputs"
                type="text"
                required
                onChange={handleFieldChange}
                id="oz"
                placeholder="ounces"
              />
            </div>
            <div className="form">
              <label htmlFor="container">Container Type:</label>
              <input
                className="form_inputs"
                type="text"
                required
                onChange={handleFieldChange}
                id="container"
                placeholder="bottle, can, etc."
              />
            </div>

            <button
              type="button"
              className="btn-pink"
              disabled={isLoading}
              onClick={constructNewWaterItem}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default WaterAddForm;
