import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
// import {Accordion} from '@mui/material';
// import {AccordionDetails} from '@mui/material';
// import {AccordionSummary} from '@mui/material';
// import {Typography} from '@mui/material';
// import {ExpandMore} from '@mui/icons-material';

function Kitchen() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  
  return (
    <div className="container">
      <h2>{user.username}'s Kitchen</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
      <div className="fridgeAccordion">
        <details>
          <summary>Fridge</summary>
          <li>item 1</li>
          <li>item 2</li>
        </details>
      </div>
      <div className="freezerAccordion">
        <details>
          <summary>Freezer</summary>
          <li>item 1</li>
          <li>item 2</li>
        </details>
      </div>
      <div className="pantryAccordion">
        <details>
          <summary>Pantry</summary>
          <li>item 1</li>
          <li>item 2</li>
        </details>
      </div>
      <div className="leftoversAccordion">
        <details>
          <summary>Leftovers</summary>
          <li>item 1</li>
          <li>item 2</li>
        </details>
      </div>
      <div className="otherAccordion">
        <details>
          <summary>Other Location</summary>
          <li>item 1</li>
          <li>item 2</li>
        </details>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default Kitchen;

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