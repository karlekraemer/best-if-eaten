import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';

// This is the page that will display all the items that were sent to the Chopping Board to be edited or removed from the inventory.
function CuttingBoard() {
    const user = useSelector((store) => store.user);


    return (
      <div className="container">
        <h2>The Cutting Board!!</h2>
        <p>Placeholder. List of items to be consumed.</p>

        <LogOutButton className="btn" />
      </div>
    );
  }
  
  // this allows us to use <App /> in index.js
  export default CuttingBoard;