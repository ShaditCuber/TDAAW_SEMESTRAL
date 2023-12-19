// Layout.js
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className="flex">
            <Sidebar
                handleDrawerToggle={handleDrawerToggle}
                mobileOpen={mobileOpen}
                isOpen={true}
            />
            <div className="flex flex-col w-full h-screen p-2 bg-gray-200">
                <Header handleDrawerToggle={handleDrawerToggle} />
                <hr className="border-t-4 border-blue-200 " />

                <main className="bg-gray-200 p-8 rounded-xl h-screen overflow-auto scrollbar-hide">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
