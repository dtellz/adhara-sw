import './style.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import swTitle from '../../assets/logo-StarWars.png'


const Header = () => {



    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='primary'>
                <Toolbar>
                    {/* <h3 className='header__text'>STAR WARS</h3> */}
                    <img className='header__logo' alt='Star wars logo' src={swTitle}></img>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;