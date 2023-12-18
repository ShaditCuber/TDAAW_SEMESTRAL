// InventoryTable.js
import { Box, Grid, Toolbar } from '@mui/material';
import InventoryTable from './InventoryTable';
import Overview from './Overview';


const Inventory = () => {

   
    return (
        <Box sx={{ flexGrow: 1 ,width: '100%', height: '100%' }}>
                <Toolbar />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={9}>
                        <InventoryTable />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Overview />
                    </Grid>
                </Grid>
        </Box>
    );
};

export default Inventory;
