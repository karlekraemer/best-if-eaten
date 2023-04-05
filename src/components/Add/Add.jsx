import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LogOutButton from '../LogOutButton/LogOutButton';

function Add() {

  const history = useHistory();
  const dispatch = useDispatch();

  const [foodName, setFoodName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [location, setLocation] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiration, setExpiration] = useState("");

  const handleSubmit = () => {
    dispatch({
      type: "ADD_FOOD",
      payload: {
        foodName,
        foodType,
        location,
        quantity,
        expiration
      },
    });
    // history.push("/toyview");
  };

  return (
      <div className="addFoodContainer">
        <p>Add your ingredient below!</p>

        <form>
          <input
            required
            placeholder="Food Name"
            type="text"
            value={foodName || ""}
            onChange={(event) => setFoodName(event.target.value)}
          ></input>
          <br />

           <label htmlFor="foodType">Food Type:</label>
          <select
            defaultValue="Select"
            onChange={(event) => setFoodType(event.target.value)}
            id="foodType"
            name="foodType"
          >
            <option disabled>Select</option>
            <option value="Fruit">Fruit</option>
            <option value="Vegetable">Vegetable</option>
            <option value="Canned Good">Canned Good</option>
            <option value="Dry Good">Dry Good</option>
            <option value="Dairy">Dairy</option>
            <option value="Meat/Fish">Meat/Fish</option>
            <option value="Topping">Topping</option>
            <option value="Grain">Grain</option>
          </select>
          <br />

          <label htmlFor="location">Location:</label>
          <select
            defaultValue="Select"
            onChange={(event) => setLocation(event.target.value)}
            id="location"
            name="location"
          >
            <option disabled>Select</option>
            <option value="Fridge">Fridge</option>
            <option value="Freezer">Freezer</option>
            <option value="Deep Freezer">Deep Freezer</option>
            <option value="Pantry">Pantry</option>
            <option value="Cupboard">Cupboard</option>
          </select>
          <br />

           <input
            required
            placeholder="Quantity"
            type="text"
            value={quantity || ""}
            onChange={(event) => setQuantity(event.target.value)}
          ></input>
          <br />

           <input
            required
            placeholder="Expiration"
            type="text"
            value={expiration || ""}
            onChange={(event) => setExpiration(event.target.value)}
          ></input>
          <br />

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
  );
}

export default Add;
