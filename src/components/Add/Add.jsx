import React, { useEffect, useState } from "react";
import "./Add.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LogOutButton from '../LogOutButton/LogOutButton';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '@mui/material/Button';

function Add() {

  const history = useHistory();
  const dispatch = useDispatch();

  const [foodName, setFoodName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [location, setLocation] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [expiration, setExpiration] = useState(new Date());

  const handleAdd=()=>{
    setQuantity(quantity+1)
  }
  const handleSub=()=>{
    setQuantity(quantity-1)
  }

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
    // history.push("/user");
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
            <option value="Other">Other</option>
          </select>
          <br />

    <button onClick={handleAdd}>+</button> {quantity} <button onClick={handleSub}>-</button>

           {/* <input
            required
            placeholder="Quantity"
            type="number"
            value={quantity || ""}
            onChange={(event) => setQuantity(event.target.value)}
          ></input>
          <br /> */}

            <p>Select expiration date</p>
            <DatePicker selected={expiration} onChange={(date) => setExpiration(date)} />
          <br />

          {/* <button type="submit" onClick={handleSubmit}>
            Submit
          </button> */}

          <Button variant="contained" disableElevation>
  Add
</Button>
        </form>
      </div>
  );
}

export default Add;
