import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';


// This is the page that will display all the items that were sent to Spoiled to be edited or removed from the inventory.
function Spoiled() {
    // this component doesn't do much to start, just renders some user reducer info to the DOM
    const user = useSelector((store) => store.user);


    return (
      <div className="container">
        <h2>You've Allowed Edibles to Become Un-edible! Boooooo</h2>
        <p>Placeholder. List of items that have been spoiled.</p>

        <LogOutButton className="btn" />
      </div>
    );
  }
  
  // this allows us to use <App /> in index.js
  export default Spoiled;