// InventoryTable.js
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'; // Asegúrate de instalar axios o usa fetch
import { Paper } from '@mui/material';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'product', headerName: 'Product', width: 130 },
    { field: 'category', headerName: 'Category', width: 130 },
    { field: 'price', headerName: 'Price', width: 90 },
    { field: 'stock', headerName: 'Stock', width: 90 },
];

const InventoryTable = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        const fetchInventory = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/products/read');
            setInventory(response.data.data);
        };
        fetchInventory();
    }, []);

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nombre</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Cantidad</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Descripción</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Bodega</th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {
                        inventory?.map((item) => (
                            <tr key={item.id}>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">{item.id}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.nombre}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.inventory_count}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.descripcion}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.warehouse_name}</td>

                                <td className="whitespace-nowrap px-4 py-2 text-center">
                                    <a
                                        href="#"
                                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                    >
                                        E o S
                                    </a>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
};

export default InventoryTable;
