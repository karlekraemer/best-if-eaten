import React from 'react';
import email from "./signUpQRCode.png";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <h2>About "Best If Eaten":</h2>
      <div>
        <p>This application will help track what's in your fridge and reduce food waste.</p>
        <p>This app is designed to help the user reduce or eliminate food waste by:</p>
        <li>Tracking what food is currently in the fridge</li>
        <li>Track and alert food that is at risk of going bad</li>
        <li>Help organize that food</li>
        <br />
        <p><strong>Technologies Utilized |</strong> HTML5, CSS3, React, Redux, Express, Axios, Node, PostgreSQL, MUI, and Figma.</p>
        <p><strong>Developed By |</strong> Allie Schwartzbauer, Jade Wiegel, Karl Kraemer, John Maybee</p>
      </div>
      <h2>Sign-Up For Version 1:</h2>
      <div className="developers">
        <div className="developerContainer">
          <p><strong>Name |</strong> Best If Eaten Sign-Up E-mail (JD)</p>
          <p><strong>E-mail |</strong> jd@buildlabs.io</p>
          <div className="qr_code">
            <img src={email} alt='QR for Version One Signup E-mail'/>
          </div>
        </div>
      </div>
    </div>
  ); // end of the container that holds the about page content. Including the qr code for the developer's profile
} 

export default AboutPage;
