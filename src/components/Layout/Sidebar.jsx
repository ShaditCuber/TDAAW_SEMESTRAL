// Navbar.js
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Business';
import OrderIcon from '@mui/icons-material/Receipt';
import CustomerIcon from '@mui/icons-material/People';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

const drawerWidth = 240;

const menuItems = [
  { text: 'Inicio', icon: <HomeIcon />, path: '/' },
  { text: 'Inventario', icon: <InventoryIcon />, path: '/inventario' },
  { text: 'Productos', icon: <OrderIcon />, path: '/productos' },
  { text: 'Compradores', icon: <CustomerIcon />, path: '/compradores' },
];

const neonColor = '#39ff14';


const Navbar = ({ mobileOpen, handleDrawerToggle }) => {

  const theme = useTheme();

  return (
    <div className="flex h-screen flex-col justify-between border-e bg-blue-200 w-80">
      <div className="px-4 py-6">
        <ul className="mt-6 space-y-1">
          {menuItems.map((item) => (
            <li key={item.text}>

              <ListItem button key={item.text} component={Link} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </li>

          ))}

        </ul>
      </div>

      
    </div>
  );
};

export default Navbar;
