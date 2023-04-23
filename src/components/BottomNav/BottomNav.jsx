import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';
import { useSelector } from 'react-redux';
// import logo from './Logo.png';
import '@fontsource/nunito-sans/300.css';
import '@fontsource/nunito-sans/400.css';
import '@fontsource/nunito-sans/600.css';
import '@fontsource/nunito-sans/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Typography from '@mui/material/Typography';
import LocalDiningIcon from '@mui/icons-material/LocalDining'; // cutting board icon
import KitchenIcon from '@mui/icons-material/Kitchen'; // kitchen icon
import AddCircleIcon from '@mui/icons-material/AddCircle'; // add icon
import DangerousIcon from '@mui/icons-material/Dangerous'; // spoiled icon
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import RestaurantIcon from '@mui/icons-material/Restaurant';

function BottomNav() {
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    return (
        <Box sx={{ width: 390, position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >

            <BottomNavigationAction label="Kitchen" icon={<KitchenIcon sx={{color:"#000000"}} onClick={() => history.push("/user")} />} />
            <BottomNavigationAction label="Cutting Board" icon={<RestaurantIcon sx={{color:"#000000"}} onClick={() => history.push("/cuttingBoard")} />} />
            <BottomNavigationAction label="Spoiled" icon={<DangerousIcon sx={{color:"#000000"}} onClick={() => history.push("/spoiled")} />} />
            <BottomNavigationAction label="Add" icon={<LibraryAddIcon sx={{color:"#000000"}} onClick={() => history.push("/add")}/>} />

        </BottomNavigation>
        </Box>
    );
    }



export default BottomNav;
