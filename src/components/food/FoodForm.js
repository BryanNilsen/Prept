import React from "react";

function FoodForm(props) {
  return (
    <div className="login_form_container">
      <form className="login_form">
        <h2>{props.isEdit ? "Edit" : "Add"} Food Item</h2>
        <div className="form">
          {/* NAME INPUT */}
          <label htmlFor="name">Name:</label>
          <input
            className="form_inputs"
            type="text"
            required
            onChange={props.handleFieldChange}
            id="name"
            placeholder="Name"
            value={props.food.name}
          />
        </div>
        {/* QUANTITY INPUT */}
        <div className="form">
          <label htmlFor="qty">Quantity:</label>
          <input
            className="form_inputs"
            type="text"
            required
            onChange={props.handleFieldChange}
            id="qty"
            placeholder="quantity"
            value={props.food.qty}
          />
        </div>
        {/* OUNCES INPUT */}
        <div className="form">
          <label htmlFor="oz">Ounces:</label>
          <input
            className="form_inputs"
            type="text"
            required
            onChange={props.handleFieldChange}
            id="oz"
            placeholder="ounces"
            value={props.food.oz}
          />
        </div>
        {/* SERVINGS INPUT */}
        <div className="form">
          <label htmlFor="servings">Servings:</label>
          <input
            className="form_inputs"
            type="text"
            required
            onChange={props.handleFieldChange}
            id="servings"
            placeholder="number or servings"
            value={props.food.servings}
          />
        </div>
        {/* CALORIES INPUT */}
        <div className="form">
          <label htmlFor="servings">Calories Per Serving:</label>
          <input
            className="form_inputs"
            type="text"
            required
            onChange={props.handleFieldChange}
            id="calPerServing"
            placeholder="calories per serving"
            value={props.food.calPerServing}
          />
        </div>
        {/* EXPIRATION DATE INPUT */}
        <div className="form">
          <label htmlFor="servings">Expiration Date:</label>
          <input
            className="form_inputs"
            type="date"
            required
            onChange={props.handleFieldChange}
            id="expDate"
            placeholder="expiration date"
            value={props.food.expDate}
          />
        </div>
        {/* CONTAINER INPUT */}
        <div className="form">
          <label htmlFor="container">Container Type:</label>
          <input
            className="form_inputs"
            type="text"
            required
            onChange={props.handleFieldChange}
            id="container"
            placeholder="bottle, can, etc."
            value={props.food.container}
          />
        </div>
        {/* SUBMIT */}
        <button
          type="button"
          className="btn-pink"
          disabled={props.isLoading}
          onClick={props.addEditFood}
        >
          {props.isEdit ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default FoodForm;
