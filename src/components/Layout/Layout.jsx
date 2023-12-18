// Layout.js
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Box, CssBaseline, Toolbar,  } from '@mui/material';
import { useUsuario } from '../../context/AuthContext';

const Layout = ({ children }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { usuario: username } = useUsuario();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col w-full h-screen p-2 bg-gray-200">
                <Header />
                <hr className="border-t-4 border-blue-200 " />

                <main className="bg-gray-200 p-8 rounded-xl h-screen overflow-auto scrollbar-hide">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
