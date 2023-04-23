import React, {useEffect} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Spoiled.css";
import '@fontsource/nunito-sans/300.css';
import '@fontsource/nunito-sans/400.css';
import '@fontsource/nunito-sans/600.css';
import '@fontsource/nunito-sans/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

////////////////////////Theme////////////////////////
const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito Sans',
    ],
  }
});

// This is the page that will display all the items that were sent to Spoiled to be edited or removed from the inventory.
function Spoiled() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const spoiled = useSelector((store) => store.spoiled);

  //dispatch const
  const dispatch = useDispatch();

  // Fetches the current users saved spoiled items on page load.
  useEffect(() => {
    dispatch({ type: 'FETCH_SPOILED' });
  }, []); 

  // deletes spoiled item from page/database
  const handleDeleteSpoiled = (item) => {
      dispatch({ 
        type: 'DELETE_ITEM_SPOILED',
        payload: {item}
      })
    }
    
  // sends item back to the kitchen and then deletes it from spoiled
  const handleBackToKitchen = (item) => {
    dispatch({
      type: 'BACK_TO_KITCHEN_SPOILED',
      payload: item
    });
    dispatch({ 
      type: 'DELETE_ITEM_SPOILED',
      payload: {item}
    })
  }

  //main return for page
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Typography variant="h6" align="center" fontStyle="normal" fontWeight={700} fontSize={22} sx={{color:"white"}} gutterBottom>{user.username}'s Spoiled Items</Typography>
          <div className="spoiledContainer">
            <section className="spoiledSection">
              {spoiled.map( item => {

                // formats date to be displayed as mm/dd/yyyy
                const expDate = item.exp_date;
                const date = new Date(expDate)
                const displayDate = (date.toLocaleDateString("en-US"))

                  // returns all the items that were sent to spoiled from kitchen
                  return (
                    <div className="thisSpoiled" key={item.id}>
                        <p>{item.name} <br /> 
                        Date Exp: {displayDate} <br />
                        Qty Expired: {item.amount} <br />
                        <button onClick={() => handleBackToKitchen(item)}>Send Back to Kitchen</button> 
                        <button 
                          className="deleteSpoiled"
                          variant="contained"
                          onClick={() => handleDeleteSpoiled(item)}
                        >
                          Spoiled :C 
                        </button></p>
                    </div> 
                  )
              })}
            </section>
          </div>
      </div>
    </ThemeProvider>
  );
}

// this allows us to use <App /> in index.js
export default Spoiled;