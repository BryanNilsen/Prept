import React, { useEffect, useState } from "react";
import APIManager from "../../modules/APIManager";

function SupplyForm(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    APIManager.getResource("categories").then((cats) => setCategories(cats));
  }, []);

  return (
    <div className="login_form_container">
      <form className="login_form">
        <h2>{props.isEdit ? "Edit" : "Add"} Supply Item</h2>
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
            value={props.supply.name}
          />
        </div>
        <div className="form">
          {/* BRAND INPUT */}
          <label htmlFor="brand">Brand:</label>
          <input
            className="form_inputs"
            type="text"
            required
            onChange={props.handleFieldChange}
            id="brand"
            placeholder="Brand"
            value={props.supply.brand}
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
            value={props.supply.qty}
          />
        </div>
        {/* SIZE INPUT */}
        <div className="form">
          <label htmlFor="size">Size:</label>
          <input
            className="form_inputs"
            type="text"
            required
            onChange={props.handleFieldChange}
            id="size"
            placeholder="size"
            value={props.supply.size}
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
            value={props.supply.expDate}
          />
        </div>

        {/* CATEGORY */}
        {/* SELECT MENU */}
        <select
          id="categoryId"
          className="form_inputs"
          value={props.supply.categoryId}
          onChange={props.handleFieldChange}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        {/* SUBMIT */}
        <button
          type="button"
          className="btn-pink"
          disabled={props.isLoading}
          onClick={props.addEditSupply}
        >
          {props.isEdit ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default SupplyForm;
