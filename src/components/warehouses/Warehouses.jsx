import React, { useState } from 'react';
import { Box, Grid, Toolbar, Typography, Button,CircularProgress } from '@mui/material';
import WarehouseTable from './WarehouseTable';
import { toast } from 'sonner'
import { useCreateWarehouse, useDeleteWarehouse, useUpdateWarehouse } from '../../queries/warehouse/WarehouseQuery';
import { useWarehouses } from '../../queries/warehouse/WarehouseQuery';
import ModalWarehouse from './ModalWarehouse';



const Warehouses = () => {
    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({ nombre: '', warehouse_id: '', precio_unitario: '' });

    const { data: warehousesData , isLoading, isError } = useWarehouses();

    const createWarehouseMutation = useCreateWarehouse();
    const deleteMutation = useDeleteWarehouse();
    const updateWarehouseMutation = useUpdateWarehouse();

    const handleChangePage = (newPage) => {
        setPage(newPage);
    };

    const handleDelete = (warehouseId) => {
        deleteMutation.mutate(warehouseId);
    };

    const onOpenModal = () => {
        setFormData({ nombre_bodega: '', descripcion_bodega: '', direccion_bodega: '' });
        setOpen(true);
    }

    const onCloseModal = () => {
        setOpen(false);
    }

    const handleSubmit = async (formData) => {

        const data = new FormData();
        data.append('nombre_bodega', formData.nombre);
        data.append('descripcion_bodega', formData.warehouse_id);
        data.append('direccion_bodega', formData.precio_unitario);

        console.log(formData)
        if (formData.id) {
            updateWarehouseMutation.mutate(formData, {
                onSuccess: (data) => {
                    toast.success(data.msg);
                    onCloseModal();
                },
                onError: (error) => {
                    toast.error(error.response.data.msg);
                }
            });
        } else {
            createWarehouseMutation.mutate(formData, {
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

    const warehouseModal = (warehouse) => {
        setOpen(true);
        console.log(warehouse)
        setFormData({
            id: warehouse.id,
            nombre_bodega: warehouse.nombre_bodega,
            descripcion_bodega: warehouse.descripcion_bodega,
            direccion_bodega: warehouse.direccion_bodega,
        });
    };

    if (isLoading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <CircularProgress />
        </Box>
    )

    if (isError) return <div>Error al cargar las bodegas</div>;
    
    return (
        <Box sx={{ flexGrow: 1, width: '100%', height: '100%' }}>
            <Toolbar />
            <Typography variant="h4" component="h2" sx={{ my: 2 }}>
                Bodegas
            </Typography>
            <Button variant="contained" onClick={() => onOpenModal()} sx={{ mb: 5 }}>
                Añadir Bodega
            </Button>
            <ModalWarehouse
                open={open}
                handleClose={onCloseModal}
                handleSubmit={handleSubmit}
                initialFormData={formData}
            />
            <Grid container spacing={2} sx={{ width: '100%' }}>
                <Grid item xs={12}>
                    <WarehouseTable
                        warehouse={warehousesData.data}
                        handleDelete={handleDelete}
                        warehouseModal={warehouseModal}
                    />
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                <Button onClick={() => handleChangePage(page - 1)} disabled={page === 1}>
                    Anterior
                </Button>
                <Button onClick={() => handleChangePage(page + 1)} disabled={warehousesData?.last_page === page}>
                    Siguiente
                </Button>
            </Box>
        </Box>
    );
};

export default Warehouses;
