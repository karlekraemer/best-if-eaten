import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';


// This is the page that will display all the items that were sent to the Chopping Board to be edited or removed from the inventory.
function CuttingBoard() {
  const user = useSelector((store) => store.user);
  const cuttingBoard = useSelector((store) => store.cuttingBoard);
    
  //dispatch const
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_CUTTING_BOARD' });
  }, []); // Fetches the current users saved cuttingBoard items on page load.

  return (
    <div className="container">
      <h2>{user.username}'s Cutting Board</h2>
      <p>Placeholder. List of items to be consumed.</p>
      <div className="cuttingBoard">
        <section >
          {cuttingBoard.map( item => {
            
              return (
                <div key={item.id}>
                    <p>{item.type} {item.name} {item.exp_date} <input defaultValue={item.amount} id="amount"/> </p>
                </div> 
              )
          })}
        </section>
      </div>
      <LogOutButton className="btn" />
    </div>
  );
}
  
// this allows us to use <App /> in index.js
export default CuttingBoard;

 {/* <button 
                        className="use_btn" 
                        variant="contained" 
                        onClick={() => handleSubmitToKitchen(item)}
                      > */}
                        {/* use
                      </button> */}