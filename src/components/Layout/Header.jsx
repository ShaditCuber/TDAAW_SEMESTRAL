import React from 'react';
import { useUsuario } from '../../context/AuthContext';

const Header = () => {
    const { usuario: username } = useUsuario();


    return (
        < header className="flex justify-between items-center w-full p-2 rounded-lg mb-2" >
            <div className="">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Taller de Desarrollo Web</h1>
            </div>
            <div className="px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-end gap-4">
                    <span aria-hidden="true" className="block h-6 w-px rounded-full bg-gray-200"></span>

                    <a href="#" className="block shrink-0">
                        <div>
                            <p className="text-xs">
                                {/* <strong className="block font-medium">{username}</strong> */}
                                <strong className="block font-medium">Poto</strong>
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </header >
        
    );
};

export default Header;
