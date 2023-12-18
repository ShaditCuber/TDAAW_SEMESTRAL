import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useUsuario } from '../../context/AuthContext';

const Header = ({ handleDrawerToggle }) => {
    const { usuario: username } = useUsuario();

    return (
        <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: 'navy' }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Taller de Desarrollo Web Avanzado
                </Typography>
                <Typography variant="h6">
                    {username}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
