// Navbar.js
import React from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Box,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Business';
import OrderIcon from '@mui/icons-material/Receipt';
import CustomerIcon from '@mui/icons-material/People';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const drawerWidth = 240;

const menuItems = [
    { text: 'Inicio', icon: <HomeIcon />, path: '/' },
    { text: 'Inventario', icon: <InventoryIcon /> , path: '/inventario' },
    { text: 'Ordenes', icon: <OrderIcon /> , path: '/ordenes' },
    { text: 'Compradores', icon: <CustomerIcon />, path: '/compradores' },
    // mas items del menu
];

const neonColor = '#39ff14'; 


const Navbar = ({ mobileOpen, handleDrawerToggle }) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Drawer
            variant={isMobile ? 'temporary' : 'permanent'}
            open={isMobile ? mobileOpen : true}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    bgcolor: 'gray',
                    borderRight: 'none',
                },
            }}
        >
          
            <Box sx={{padding : 4}}>
                <List sx={{ marginTop: 4 }}>
                    {menuItems.map((item) => (
                        <ListItem button key={item.text} component={Link} to={item.path}>
                            <ListItemIcon sx={{ color: neonColor }}>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} sx={{ color: 'white' }} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default Navbar;
