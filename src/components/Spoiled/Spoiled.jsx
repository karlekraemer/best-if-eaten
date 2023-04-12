import React, {useEffect} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


// This is the page that will display all the items that were sent to Spoiled to be edited or removed from the inventory.
function Spoiled() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const spoiled = useSelector((store) => store.spoiled);

  //dispatch const
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_SPOILED' });
  }, []); // Fetches the current users saved spoiled items on page load.


  return (
    <div className="container">
        <h2 className="spoiledHeader">{user.username}'s Spoiled Items</h2>
        <div className="spoiledContainer">
          <section className="spoiledSection">
            {spoiled.map( item => {
                return (
                  <div key={item.id}>
                      <p>{item.type} {item.name} {item.exp_date} {item.amount}</p>
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
export default Spoiled;