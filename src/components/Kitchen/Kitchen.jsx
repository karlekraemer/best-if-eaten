import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
// import { Button } from '@mui/material';
import '@fontsource/nunito-sans/300.css';
import '@fontsource/nunito-sans/400.css';
import '@fontsource/nunito-sans/600.css';
import '@fontsource/nunito-sans/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

////////////////////////Kitchen Theme////////////////////////
const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito Sans',
    ],
  }
});


function Kitchen() {
  const user = useSelector((store) => store.user);
  const kitchen = useSelector((store) => store.kitchen);

  // const leftovers = useSelector((store) => store.leftovers);

  //use history const
  const history = useHistory();
  //dispatch const
  const dispatch = useDispatch();

  // moves item to cutting board page and then deletes from kitchen
  const handleSubmitCuttingBoard = (item) => {
    dispatch({
      type: 'POST_CUTTING_BOARD',
      payload: item
    });
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {item}
    });
  }

  // moves item to spoiled page and then deletes item from kitchen
  const handleSubmitSpoiled = (item) => {
    dispatch({
      type: 'POST_SPOILED',
      payload: item
    });
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {item}
    });
  }

  // fires off delete function to delete item from database
  const handleDelete = (item) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {item}
  });
  }

  // on page load this will fetch all items from database
  useEffect(() => {
    dispatch({ type: 'FETCH_KITCHEN' });
  }, []); // Fetches the current users saved kitchen on page load.

  // useEffect(() => {
  //   dispatch({ type: 'FETCH_LEFTOVERS' });
  // }, []); // Fetches the current users saved leftovers on page load.
    
  
  // main return for kitchen page
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
      <Typography variant="h6" align="center" fontStyle="normal" fontWeight={700} fontSize={22} gutterBottom>{user.username}'s Kitchen</Typography>
        
        {/* <LogOutButton className="btn" /> */}

        {/* "fridge" location inside kitchen */}
        <div className="fridgeAccordion">
          <Typography variant="subtitle1" fontWeight={600}>
          <details className="locationCard">
              <summary className='location'>Fridge</summary>
            {kitchen.map( item => {
 
              // formats date to be displayed as mm/dd/yyyy
              const expDate = item.exp_date;
              const date = new Date(expDate)
              const displayDate = (date.toLocaleDateString("en-US"))
              
              const todayDate = new Date();
              const newDate = new Date(todayDate)
              const displayToday = (newDate.toLocaleDateString("en-US"))


              
              console.log('todays date is', displayToday); //todays date updated every day
              console.log('expiration date', displayDate); //expiration date of item

              // if item is in "fridge" location it will be displayed here
             if (item.location === 'Fridge' && displayDate <= displayToday) {
                return (
                  <div key={item.id}>
                    <div className='itemCardExp'>
                    <p className='cardInfo'>{item.name} QTY: {item.amount}<br />
                    <Typography variant="subtitle2" fontWeight={400} sx={{color:"#000000"}}>
                      {item.type}
                      Expires: {displayDate}
                      
                    </Typography></p>
                      <div className='cardInfo'>
                        <p className="kitchenBtns">
                          <button 
                            className="use_btn" 
                            variant="contained" 
                            onClick={() => handleSubmitCuttingBoard(item)}
                          >
                            Use
                          </button>
                          <button
                            className="remove_btn"
                            variant="contained"
                            onClick={() => handleDelete(item)}
                          >
                            Delete
                          </button>
                          <button 
                            className="spoiled_btn" 
                            variant="contained" 
                            onClick={() => handleSubmitSpoiled(item)}
                          >
                            Spoiled
                          </button>
                        </p>
                      </div>
                    </div>
                  </div> 
                ) 
              }
              if (item.location === 'Fridge' && displayDate > displayToday){
                return (
                  <div key={item.id}>
                    <div className='itemCard'>
                    <p className='cardInfo'>{item.name} QTY: {item.amount}<br />
                    <Typography variant="subtitle2" fontWeight={400} sx={{color:"#000000"}}>
                      {item.type}
                      Expires: {displayDate}
                      
                    </Typography></p>
                      <div className='cardInfo'>
                        <p className="kitchenBtns">
                          <button 
                            className="use_btn" 
                            variant="contained" 
                            onClick={() => handleSubmitCuttingBoard(item)}
                          >
                            Use
                          </button>
                          <button
                            className="remove_btn"
                            variant="contained"
                            onClick={() => handleDelete(item)}
                          >
                            Delete
                          </button>
                          <button 
                            className="spoiled_btn" 
                            variant="contained" 
                            onClick={() => handleSubmitSpoiled(item)}
                          >
                            Spoiled
                          </button>
                        </p>
                      </div>
                    </div>
                  </div> 
                ) 
              }
            })}
          </details>
          </Typography>
          
        </div>

        {/* "freezer" location inside kitchen */}
        <div className="freezerAccordion">
          <Typography variant="subtitle1" fontWeight={600}>
          <details className="locationCard">
            <summary className='location'>Freezer</summary>
            {kitchen.map( item => {

              // formats date to be displayed as mm/dd/yyyy
              const expDate = item.exp_date;
              const date = new Date(expDate)
              const displayDate = (date.toLocaleDateString("en-US"))
                         
              //if item is in location "leftovers" it will be displayed here
              if (item.location === 'Freezer') {
                return (
                  <div className="fullCard" key={item.id}>
                    <div className='itemCard'>
                      <div className="cardStuff">
                        <p className='cardInfo'>{item.name}<br/>
                          <Typography variant="subtitle2" fontWeight={400} sx={{color:"#000000"}}>
                            {item.type}                       
                          </Typography>
                        </p>
                        <p className='cardQuantity'>QTY: {item.amount}
                          <Typography variant="subtitle2" fontWeight={400} sx={{color:"#000000"}}> 
                            Exp Date: {displayDate}                        
                          </Typography>
                        </p>
                      </div>
                        <div className='cardInfo'>  
                          <p className="kitchenBtns">
                            <button 
                              className="use_btn" 
                              variant="contained" 
                              onClick={() => handleSubmitCuttingBoard(item)}
                              >
                              Use
                            </button>
                            <button
                              className="remove_btn"
                              variant="contained"
                              onClick={() => handleDelete(item)}
                              >
                              Delete
                            </button>
                            <button 
                              className="spoiled_btn" 
                              variant="contained" 
                              onClick={() => handleSubmitSpoiled(item)}
                              >
                              Spoiled
                            </button>
                          </p>
                        </div>  
                    </div>
                  </div> 
                )
              }
            })}
          </details>
          </Typography>
          
        </div>

        {/* "pantry" location inside kitchen */}
        <div className="pantryAccordion">
        <Typography variant="subtitle1" fontWeight={600}>

          <details className="locationCard">
            <summary className='location'>Pantry</summary>
            {kitchen.map( item => {

              // formats date to be displayed as mm/dd/yyyy
              const expDate = item.exp_date;
              const date = new Date(expDate)
              const displayDate = (date.toLocaleDateString("en-US"))

              // if item is in "pantry" location it will be displayed here
              if (item.location === 'Pantry') {
                return (
                  <div className="fullCard" key={item.id}>
                    <div className='itemCard'>
                      <div className="cardStuff">
                        <p className='cardInfo'>{item.name}<br/>
                          <Typography variant="subtitle2" fontWeight={400} sx={{color:"#000000"}}>
                            {item.type}                       
                          </Typography>
                        </p>
                        <p className='cardQuantity'>QTY: {item.amount}
                          <Typography variant="subtitle2" fontWeight={400} sx={{color:"#000000"}}> 
                            Exp Date: {displayDate}                        
                          </Typography>
                        </p>
                      </div>
                        <div className='cardInfo'>  
                          <p className="kitchenBtns">
                            <button 
                              className="use_btn" 
                              variant="contained" 
                              onClick={() => handleSubmitCuttingBoard(item)}
                              >
                              Use
                            </button>
                            <button
                              className="remove_btn"
                              variant="contained"
                              onClick={() => handleDelete(item)}
                              >
                              Delete
                            </button>
                            <button 
                              className="spoiled_btn" 
                              variant="contained" 
                              onClick={() => handleSubmitSpoiled(item)}
                              >
                              Spoiled
                            </button>
                          </p>
                        </div>  
                    </div>
                  </div> 
                )
              }
            })}
          </details>
          </Typography>
        </div>

{/* Do we need to update the returned parameters for Leftovers and make them line up with the db? */}
        {/* "leftovers" location inside kitchen */}
        <div className="leftoversAccordion">
        <Typography variant="subtitle1" fontWeight={600}>

          <details className="locationCard">
            <summary className='location'>Leftovers</summary>
            {kitchen.map( item => {
              
              //formats date to be displayed mm/dd/yyyy
              const expDate = item.exp_date;
              const date = new Date(expDate)
              const displayDate = (date.toLocaleDateString("en-US"))
              

              //if item is in location "leftovers" it will be displayed here
               if (item.location === 'Leftovers'){
                return (
                  <div key={item.id}>
                    <div className='itemCard'>
                      <p className='cardInfo'>{item.name} Servings: {item.amount}<br />
                      <Typography variant="subtitle2" fontWeight={400} sx={{color:"#000000"}}>
                        Exp Date: {displayDate}                       
                      </Typography>
                      <div className='cardInfo'>  
                        <p className="kitchenBtns">  
                          <button 
                                className="use_btn" 
                                variant="contained" 
                                onClick={() => handleSubmitCuttingBoard(item)}
                            >
                              Use
                            </button>
                            <button
                              className="remove_btn"
                              variant="contained"
                              onClick={() => handleDelete(item)}
                            >
                              Delete
                            </button>
                            <button 
                              className="spoiled_btn" 
                              variant="contained" 
                              onClick={() => handleSubmitSpoiled(item)}
                            >
                              Spoiled
                            </button>
                          </p>
                        </div>
                        </p>
                    </div>
                  </div> 
                )
              }
            })}
          </details>
          </Typography>
        </div>

        {/* "other" location inside kitchen */}
        <div className="otherAccordion">
        <Typography variant="subtitle1" fontWeight={600}>

          <details className="locationCard">
            <summary className='location'>Other Location</summary>
            {kitchen.map( item => {

              // formats date to be displayed in mm/dd/yyyy
              const expDate = item.exp_date;
              const date = new Date(expDate)
              const displayDate = (date.toLocaleDateString("en-US"))
              
              //if item is in location "other" it will be displayed here
              if (item.location === 'Other') {
                return (
                  <div className="fullCard" key={item.id}>
                    <div className='itemCard'>
                      <div className="cardStuff">
                        <p className='cardInfo'>{item.name}<br/>
                          <Typography variant="subtitle2" fontWeight={400} sx={{color:"#000000"}}>
                            {item.type}                       
                          </Typography>
                        </p>
                        <p className='cardQuantity'>QTY: {item.amount}
                          <Typography variant="subtitle2" fontWeight={400} sx={{color:"#000000"}}> 
                            Exp Date: {displayDate}                        
                          </Typography>
                        </p>
                      </div>
                        <div className='cardInfo'>  
                          <p className="kitchenBtns">
                            <button 
                              className="use_btn" 
                              variant="contained" 
                              onClick={() => handleSubmitCuttingBoard(item)}
                              >
                              Use
                            </button>
                            <button
                              className="remove_btn"
                              variant="contained"
                              onClick={() => handleDelete(item)}
                              >
                              Delete
                            </button>
                            <button 
                              className="spoiled_btn" 
                              variant="contained" 
                              onClick={() => handleSubmitSpoiled(item)}
                              >
                              Spoiled
                            </button>
                          </p>
                        </div>  
                    </div>
                  </div> 
                )
              }
            })}
          </details>
          </Typography>
        </div>

      </div>
    </ThemeProvider>
  );
}

// this allows us to use <App /> in index.js
export default Kitchen;


// import {Accordion} from '@mui/material';
// import {AccordionDetails} from '@mui/material';
// import {AccordionSummary} from '@mui/material';
// import {Typography} from '@mui/material';
// import {ExpandMore} from '@mui/icons-material';

// const [expanded, setExpanded] = React.useState(false);

  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };
{/* <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography>
              Fridge
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            
          </AccordionDetails>
        </Accordion> */}

  //       "id" SERIAL PRIMARY KEY,
	// "user_id" INT REFERENCES "user",
  //   "name" VARCHAR (80),
	// "location" VARCHAR (80),
	// "exp_date" DATE,
	// "amount" INT,
	// "type" VARCHAR (80)	

  // CREATE TABLE "leftovers" (
  //   "id" SERIAL PRIMARY KEY,
  //   "user_id" INT REFERENCES "user",
  //     "name" VARCHAR (80),
  //   "location" VARCHAR (80),
  //   "exp_date" DATE,
  //   "servings" INT
  // );