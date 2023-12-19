import React, { useEffect, useState } from 'react';
import { Box, Grid, Toolbar, Typography, Button, Modal, TextField, FormControl, InputLabel, Input, Select, MenuItem, CircularProgress } from '@mui/material';
import ProductTable from './ProductTable';
import axios from 'axios';
import { toast } from 'sonner'
import { useCreateProduct, useDeleteProduct, useProducts, useUpdateProduct } from '../../queries/product/ProductQuery';
import { useQueryClient } from '@tanstack/react-query';
import { useWarehouses } from '../../queries/warehouse/WarehouseQuery';
import ModalProduct from './ModalProduct';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const Products = () => {
    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({ nombre: '', warehouse_id: '', precio_unitario: '' });

    const { data: productsData, isLoading, isError } = useProducts(page);
    const { data: warehousesData } = useWarehouses();

    const createProductMutation = useCreateProduct();
    const deleteMutation = useDeleteProduct();
    const updateProductMutation = useUpdateProduct();

    const handleChangePage = (newPage) => {
        setPage(newPage);
    };

    const handleDelete = (productId) => {
        deleteMutation.mutate(productId);
    };

    const onOpenModal = () => {
        setFormData({ nombre: '', warehouse_id: '', precio_unitario: '' });
        setOpen(true);
    }

    const onCloseModal = () => {
        setOpen(false);
    }

    const handleSubmit = async (formData) => {

        const data = new FormData();
        data.append('nombre', formData.nombre);
        data.append('warehouse_id', formData.warehouse_id);
        data.append('precio_unitario', formData.precio_unitario);
        data.append('imagen', formData.imagen);

        console.log(formData)
        if (formData.id) {
            updateProductMutation.mutate(formData, {
                onSuccess: (data) => {
                    toast.success(data.msg);
                    onCloseModal();
                },
                onError: (error) => {
                    toast.error(error.response.data.msg);
                }
            });
        } else {
            createProductMutation.mutate(formData, {
                onSuccess: (data) => {
                    toast.success(data.msg);
                    onCloseModal();
                },
                onError: (error) => {
                    toast.error(error.response.data.msg);
                }
            });
        }

    };

    const productModal = (product) => {
        setOpen(true);
        console.log(product)
        setFormData({
            id: product.id,
            nombre: product.nombre,
            precio_unitario: product.precio_unitario,
        });
    };

    if (isLoading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <CircularProgress />
        </Box>
    )
    if (isError) return <div>Error al cargar los productos</div>;

    return (
        <Box sx={{ flexGrow: 1, width: '100%', height: '100%' }}>
            <Toolbar />
            <Typography variant="h4" component="h2" sx={{ my: 2 }}>
                Productos
            </Typography>
            <Button variant="contained" onClick={() => onOpenModal()} sx={{ mb: 5 }}>
                Añadir Producto
            </Button>
            <ModalProduct
                open={open}
                handleClose={onCloseModal}
                warehousesData={warehousesData}
                handleSubmit={handleSubmit}
                initialFormData={formData}
            />
            <Grid container spacing={2} sx={{ width: '100%' }}>
                <Grid item xs={12}>
                    <ProductTable
                        inventory={productsData.data}
                        handleDelete={handleDelete}
                        productModal={productModal}
                    />
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                <Button onClick={() => handleChangePage(page - 1)} disabled={page === 1}>
                    Anterior
                </Button>
                <Button onClick={() => handleChangePage(page + 1)} disabled={productsData?.meta?.last_page === page}>
                    Siguiente
                </Button>
            </Box>
        </Box>
    );
};

export default Products;
