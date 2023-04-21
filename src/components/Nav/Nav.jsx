import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import logo from './Logo.png';
import '@fontsource/nunito-sans/300.css';
import '@fontsource/nunito-sans/400.css';
import '@fontsource/nunito-sans/600.css';
import '@fontsource/nunito-sans/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { InfoOutlined } from "@mui/icons-material";


////////////////////////Nav Theme////////////////////////
const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito Sans',
    ],
  }
});

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <ThemeProvider theme={theme}>
      <div className="nav">
        <Link to="/home">
          <img className='logo' src={logo} alt='Logo for Best if Eaten App' />
        </Link>
        <div>
          {/* If no user is logged in, show these links */}
          {!user.id && (
            // If there's no user, show login/registration links
            <Link className="navLink" to="/login">
              Login / Register
            </Link>
          )}

          {/* If a user is logged in, show these links */}
          {user.id && (
            <>
              {/* <Typography fontWeight={400}>
              <Link className="navLink" to="/user">
                Kitchen
              </Link>
              </Typography>

              <Link className="navLink" to="/add">
                Add
              </Link>
              
              <Link className="navLink" to="/cuttingBoard">
                Cutting Board
              </Link>

              <Link className="navLink" to="/spoiled">
                Spoiled
              </Link> */}

              <LogOutButton className="navLink" />
            </>
          )}

          <Link className="navLink" to="/about">
            <InfoOutlined fontSize="small" sx={{ color: '#000000'}}/>
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
}


export default Nav;


// className="nav-title"

 {/* <Link className="navLink" to="/info">
                Info Page
              </Link> */}