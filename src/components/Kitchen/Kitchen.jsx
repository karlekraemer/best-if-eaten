import React, { useEffect } from 'react';
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
  const leftovers = useSelector((store) => store.leftovers);

  //use history const
  const history = useHistory();
  //dispatch const
  const dispatch = useDispatch();

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

  const handleDelete = (item) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {item}
  });
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_KITCHEN' });
  }, []); // Fetches the current users saved kitchen on page load.

  useEffect(() => {
    dispatch({ type: 'FETCH_LEFTOVERS' });
  }, []); // Fetches the current users saved leftovers on page load.
  
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
      <Typography variant="h6" fontStyle="normal" fontWeight={700} fontSize={22} lineHeight={30} gutterBottom>{user.username}'s Kitchen</Typography>
        
        <LogOutButton className="btn" />

        <div className="fridgeAccordion">
        <details>
          <Typography variant="subtitle1" fontWeight={600}>
            <summary>Fridge</summary>
          </Typography>
            {kitchen.map( item => {
              if (item.location === 'Fridge') {
                return (
                  <div key={item.id}>
                      <li>{item.type} {item.name} {item.exp_date} {item.amount}
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
                      </li>
                  </div> 
                )
              }
            })}
          </details>
          
        </div>

        <div className="freezerAccordion">
          <details>
            <summary>Freezer</summary>
            {kitchen.map( item => {
              if (item.location === 'Freezer') {
                return (
                  <div key={item.id}>
                      <li>{item.type} {item.name} {item.exp_date} {item.amount}
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
                      </li>
                  </div> 
                )
              }
            })}
          </details>
        </div>

        <div className="pantryAccordion">
          <details>
            <summary>Pantry</summary>
            {kitchen.map( item => {
              if (item.location === 'Pantry') {
                return (
                  <div key={item.id}>
                      <li>{item.type} {item.name} {item.exp_date} {item.amount}
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
                      </li>
                  </div> 
                )
              }
            })}
          </details>
        </div>

{/* Do we need to update the returned parameters for Leftovers and make them line up with the db? */}
        <div className="leftoversAccordion">
          <details>
            <summary>Leftovers</summary>
            {kitchen.map( item => {
               if (item.location === 'Leftovers'){
                return (
                  <div key={item.id}>
                      <li>{item.name} {item.exp_date} {item.servings} 
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
                        </li>
                  </div> 
                )
              }
            })}
          </details>
        </div>

        <div className="otherAccordion">
          <details>
            <summary>Other Location</summary>
            {kitchen.map( item => {
              if (item.location === 'Other') {
                return (
                  <div key={item.id}>
                      <li>{item.type} {item.name} {item.exp_date} {item.amount}
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
                      </li>
                  </div> 
                )
              }
            })}
          </details>
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