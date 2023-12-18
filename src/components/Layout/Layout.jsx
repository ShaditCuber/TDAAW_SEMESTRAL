// Layout.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import { Box, CssBaseline, Toolbar,  } from '@mui/material';
import { useUsuario } from '../../context/AuthContext';

const Layout = ({ children }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { usuario: username } = useUsuario();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header username={username} handleDrawerToggle={handleDrawerToggle} />
            <Navbar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 , bgcolor : 'gray'  , width : '182.5vh' , height : '100.5vh'}}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
