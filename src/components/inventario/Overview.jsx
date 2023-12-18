// Overview.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import axios from 'axios'; 
const Overview = () => {
    const [overview, setOverview] = useState({});

    useEffect(() => {
        // Reemplaza con la URL de tu API
        const fetchOverview = async () => {
            const response = await axios.get('http://api.tu-servidor.com/resumen');
            setOverview(response.data);
        };
        fetchOverview();
    }, []);

    return (
        <Box sx={{ bgcolor: 'white', p: 2, width: '100%', height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Overview
            </Typography>
            <Typography> Total Product: {overview.totalProduct} </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography> Today sell: {overview.todaySell} </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography> Yesterday sell: {overview.yesterdaySell} </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography> Total sell: {overview.totalSell} </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography> Product Reserved: {overview.productReserved} </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography> Stock Issues: {overview.stockIssues} </Typography>
        </Box>
    );
};

export default Overview;
