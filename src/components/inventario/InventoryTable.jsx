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
        // Reemplaza con la URL de tu API
        const fetchInventory = async () => {
            const response = await axios.get('http://api.tu-servidor.com/inventario');
            setInventory(response.data);
        };
        fetchInventory();
    }, []);

    return (
        <Paper style={{ height: '50vh', width: '100%'}}>
            <DataGrid
                rows={inventory}
                columns={columns}
                pageSize={5}
                checkboxSelection
                style={{ border: 'none', height: '100%', width: '100%' }}
            />
        </Paper>
    );
};

export default InventoryTable;
