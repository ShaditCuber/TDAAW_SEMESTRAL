// Navbar.js
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import OrderIcon from '@mui/icons-material/Receipt';
import CustomerIcon from '@mui/icons-material/People';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';


const menuItems = [
  { text: 'Inicio', icon: <HomeIcon />, path: '/' },
  { text: 'Bodegas', icon: <WarehouseIcon />, path: '/bodegas' },
  { text: 'Productos', icon: <OrderIcon />, path: '/productos' },
  { text: 'Inventario', icon: <InventoryIcon />, path: '/inventario' },
  { text: 'Compradores', icon: <CustomerIcon />, path: '/compradores' }
];

const blackColor = '#00000';



const Sidebar = () => {

  return (
    <div className="flex h-screen flex-col justify-between border-e bg-blue-200 w-80">
      <div className="px-4 py-6">
        <ul className="mt-6 space-y-1">
          {menuItems.map((item) => (
            <li key={item.text}>
              <ListItem button key={item.text} component={Link} to={item.path}>
                <ListItemIcon sx={{color : blackColor}}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </li>

          ))}

        </ul>
      </div>

      
    </div>
  );
};

export default Sidebar;
