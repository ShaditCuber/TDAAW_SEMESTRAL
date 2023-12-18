import React from 'react';
import { Box, Grid, Toolbar, Typography } from '@mui/material';
import InventoryTable from './InventoryTable';
import Overview from './Overview';

const Products = () => {
    return (
        <Box sx={{ flexGrow: 1, width: '100%', height: '100%' }}>
            <Toolbar />
            <Typography variant="h4" component="h2" sx={{ my: 2 }}>
                Productos
            </Typography>
            <Grid container spacing={2} sx={{ width: '100%' }}>
                <Grid item xs={12}>
                    <InventoryTable />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Products;
