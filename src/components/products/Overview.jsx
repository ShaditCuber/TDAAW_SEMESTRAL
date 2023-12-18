// Overview.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import axios from 'axios'; 
const Overview = () => {
    const [overview, setOverview] = useState({});

    useEffect(() => {
        // Reemplaza con la URL de tu API
        const fetchOverview = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/stock/resume');
            setOverview(response.data);
        };
        fetchOverview();
    }, []);

    return (
        <Box sx={{ bgcolor: 'white', p: 2, width: '100%', height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Resumen
            </Typography>
            <Typography> Total de Productos: {overview.total_products} </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography> Vendido Hoy: {overview.today_sales} </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography> Vendido Ayer: {overview.yesterday_sales} </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography> Total Vendido: {overview.total_sales_amount} </Typography>
        </Box>
    );
};

export default Overview;
