import React from 'react';
import { useUsuario } from '../../context/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { usuario: username } = useUsuario();
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    };


    const handleSearch = () => {
        navigate(`/${searchInput}`);
    }

    return (
        < header className="flex justify-between items-center w-full p-2 rounded-lg mb-2" >
            <div className="">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Taller de Desarrollo Web</h1>
            </div>
            
            <div className="px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-end gap-4">
                    <div className="flex items-center gap-4">


                        {/* <a
                            href="#"
                            className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                        >
                            <span className="sr-only">Notifications</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                        </a> */}
                    </div>

                    <span aria-hidden="true" className="block h-6 w-px rounded-full bg-gray-200"></span>

                    <a href="#" className="block shrink-0">
                        <div>
                            <p className="text-xs">
                                <strong className="block font-medium">{username}</strong>
                            </p>
                        </div>
                    </a>
                    
                </div>

              
            </div>
        </header >
        
    );
};

export default Header;
