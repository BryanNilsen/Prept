import React from "react";

function WaterForm(props) {
  return (
    <div className="login_form_container">
      <form className="login_form">
        <h2>{props.isEdit ? "Edit" : "Add"} Water Item</h2>
        <div className="form">
          <label htmlFor="name">Name:</label>
          <input
            className="form_inputs"
            type="text"
            required
            onChange={props.handleFieldChange}
            id="name"
            placeholder="Name"
            value={props.water.name}
          />
        </div>
        <div className="form">
          <label htmlFor="qty">Quantity:</label>
          <input
            className="form_inputs"
            type="text"
            required
            onChange={props.handleFieldChange}
            id="qty"
            placeholder="quantity"
            value={props.water.qty}
          />
        </div>
        <div className="form">
          <label htmlFor="oz">Ounces:</label>
          <input
            className="form_inputs"
            type="text"
            required
            onChange={props.handleFieldChange}
            id="oz"
            placeholder="ounces"
            value={props.water.oz}
          />
        </div>
        <div className="form">
          <label htmlFor="container">Container Type:</label>
          <input
            className="form_inputs"
            type="text"
            required
            onChange={props.handleFieldChange}
            id="container"
            placeholder="bottle, can, etc."
            value={props.water.container}
          />
        </div>

        <button
          type="button"
          className="btn-pink"
          disabled={props.isLoading}
          onClick={props.editWater}
        >
          {props.isEdit ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default WaterForm;
