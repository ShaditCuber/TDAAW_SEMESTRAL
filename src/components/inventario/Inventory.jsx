import { Box, Button, CircularProgress, Grid, Toolbar, Typography } from '@mui/material';
import TableInventory from './TableInventory';
import Overview from './Overview';
import { useProducts, useProductsLimit } from '../../queries/product/ProductQuery';
import { useState } from 'react';
import { useCreateStock, useResume } from '../../queries/stocks/StockQuery';
import ModalInventory from './ModalInventory';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Inventory = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({ product_name: '', tipo: '', cantidad: '' });

    // Uso de React Query 
    const { data: productsData, isLoading, isError } = useProducts(page);
    const { data: products } = useProductsLimit();
    const { data: resume, isLoading: cargando } = useResume();
    const createStockMutation = useCreateStock();

    const handleChangePage = (newPage) => {
        setPage(newPage);
    };

    const onOpenModal = () => {
        setFormData({ product_name: '', tipo: 'seleccione', cantidad: '' , observaciones: ''});
        setOpen(true);
    }

    const onCloseModal = () => {
        setOpen(false);
    }   

    console.log()


    const handleSubmit = async (formData) => {

        const data = new FormData();
        data.append('product_name', formData.product_name);
        data.append('tipo', formData.tipo);
        data.append('cantidad', formData.cantidad);
        data.append('observaciones', formData.observaciones);


        createStockMutation.mutate(formData, {
            onSuccess: (data) => {
                toast.success(data.msg);
                onCloseModal();
            },
            onError: (error) => {
                toast.error(error.response.data.msg);
            }
        });

    };

    const inventoryModal = (product) => {
        setFormData({
            id: product.id,
            product_name: product.nombre,
        });
        setOpen(true);
    }

    const showHistory = (product) => {
        console.log(product)
        // window.location = `/inventario/historial/${product.id}`;
        navigate(`/inventario/historial/${product}`);
    }


    if (isLoading || cargando) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <CircularProgress />
        </Box>
    )
    if (isError) return <div>Error al cargar los productos</div>;


    return (
        <Box sx={{ flexGrow: 1, width: '100%', height: '100%' }}>
            <Toolbar />
            <Typography variant="h4" component="h2" sx={{ my: 2 }}>
                Inventario
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={9}>
                    <TableInventory
                        inventory={productsData.data}
                        inventoryModal={inventoryModal}
                        showHistory={showHistory}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                        <Button onClick={() => handleChangePage(page - 1)} disabled={page === 1}>
                            Anterior
                        </Button>
                        <Button onClick={() => handleChangePage(page + 1)} disabled={productsData?.meta?.last_page === page}>
                            Siguiente
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Overview
                        overview={resume}
                    />
                </Grid>
            </Grid>
            <ModalInventory
                open={open}
                handleClose={onCloseModal}
                handleSubmit={handleSubmit}
                initialFormData={formData}
                productsData={products.data}
            />
        </Box>
    );
};

export default Inventory;
