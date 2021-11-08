import './style.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import swTitle from '../../assets/logo-StarWars.png'
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }} className='header__box'>
            <AppBar position="static" color='primary'>
                <Toolbar>
                    {/* <h3 className='header__text'>STAR WARS</h3> */}
                    <img className='header__logo' onClick={() => { navigate('/home') }} alt='Star wars logo' src={swTitle}></img>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;