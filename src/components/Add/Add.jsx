import React, { useEffect, useState } from "react";
import "./Add.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LogOutButton from '../LogOutButton/LogOutButton';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '@mui/material/Button';
import '@fontsource/nunito-sans/300.css';
import '@fontsource/nunito-sans/400.css';
import '@fontsource/nunito-sans/600.css';
import '@fontsource/nunito-sans/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito Sans',
    ],
  }
});

function Add() { 
// Add to Kicthen(eg inventory) function


  const history = useHistory();
  const dispatch = useDispatch();

  // useState consts for added items
  const [foodName, setFoodName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [location, setLocation] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [expiration, setExpiration] = useState(new Date());

  const handleAdd=(event)=>{
  //handles increase in amount
    event.preventDefault();
    setQuantity(quantity+1)
  }
  
  const handleSub=(event)=>{
  //handles decrease in amount
    event.preventDefault();
     if (quantity === 1) {
        alert("Counter cannot go below one!");
        return;
    }
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
    <ThemeProvider theme={theme}>
      <div className="addFoodContainer">
        <Typography variant="h6" align="center" fontStyle="normal" fontWeight={700} fontSize={22} sx={{color:"white"}} gutterBottom>Add your food below!</Typography>

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
            <option disabled>---</option>
            <option value="Leftovers">Leftovers</option>
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
            <option value="Pantry">Pantry</option>
            <option value="Other">Other</option>
           <option disabled>---</option>
            <option value="Leftovers">Leftovers</option>
          </select>
          <br />

    <label htmlFor="quantity">Quantity/Servings:</label>
    <button className= "qtybutton1" onClick={handleSub}>-</button> {quantity} <button className="qtybutton2" onClick={handleAdd}>+</button>

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

          <button className="submitbtn" type="submit" onClick={handleSubmit}>
            Submit
          </button>

        </form>
      </div>
    </ThemeProvider>
  );
}

export default Add;
