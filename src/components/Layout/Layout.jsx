// Layout.js
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    

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
