import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import '@fontsource/nunito-sans/300.css';
import '@fontsource/nunito-sans/400.css';
import '@fontsource/nunito-sans/600.css';
import '@fontsource/nunito-sans/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


// This is the page that will display all the items that were sent to the Chopping Board to be edited or removed from the inventory.
function CuttingBoard() {
  const user = useSelector((store) => store.user);
  const kitchen = useSelector((store) => store.kitchen);
  const cuttingBoard = useSelector((store) => store.cuttingBoard);
  // const [quantity, setQuantity] = useState(0);

  const history = useHistory();
  //dispatch const
  const dispatch = useDispatch();

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Nunito Sans',
      ],
    }
  });

  useEffect(() => {
    dispatch({ type: 'FETCH_CUTTING_BOARD' });
  }, []); // Fetches the current users saved cuttingBoard items on page load.

  const handleBackToKitchen = (item) => {
    if (item.amount > 0) {
      dispatch({
        type: 'BACK_TO_KITCHEN_CUTTING_BOARD',
        payload: item
      });
      dispatch({ 
        type: 'DELETE_ITEM_CUTTING_BOARD',
        payload: {item}
      })
    } else if (item.amount <= 0){
      dispatch({ 
        type: "DELETE_ITEM_CUTTING_BOARD",
        payload: {item}
      })
    }
  }

  const setAmount = (event) => {
    console.log('updated quantity: ', event.target.value);
    dispatch({
      type: "EDIT_QUANTITY_ONCHANGE",
      payload: {property: 'amount', value: event.target.value}
    });
    dispatch({
      type: "SET_THIS_CUTTING",
      payload: event.target
    })
  } 

  const handleUseAll = (item) => {
    dispatch({ 
      type: 'DELETE_ITEM_CUTTING_BOARD',
      payload: {item}
    })
  }
  
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Typography variant="h6" align="center" fontStyle="normal" fontWeight={700} fontSize={22} sx={{color:"white"}} gutterBottom>{user.username}'s Cutting Board</Typography>
        {/* <p>Placeholder. List of items to be consumed.</p> */}
        <div className="cuttingBoard">
          <section >
            {cuttingBoard.map( item => {
              
                return (
                  <div key={item.id}>
                      <p>{item.name}  
                    
                          {/* <br />Currently in inventory: {item.amount} */}
                          <br />How many will remain?  <nbsp/><nbsp/>
                      
                        <input className="amountInput" defaultValue={item.amount} onChange={(event) => setAmount(event)} id="amount"/> 

                        <div className="cuttingBoardBtns">
                          <button className="sendToKitchen"
                            variant="contained"
                            onClick={() => handleBackToKitchen(item)}>
                              Create Changes
                          </button>

                          <button className="useAllBtn" 
                            variant="contained"
                            onClick={() => handleUseAll(item)}>
                              Used In Full
                          </button>
                        </div>
                      </p>
                  </div> 
                )
            })}
          </section>
        </div>
      
      </div>
    </ThemeProvider>
  );
        }
  
// this allows us to use <CuttingBoard /> in index.js
export default CuttingBoard;

 {/* <button 
                        className="use_btn" 
                        variant="contained" 
                        onClick={() => handleSubmitToKitchen(item)}
                      > */}
                        {/* use
                      </button> */}