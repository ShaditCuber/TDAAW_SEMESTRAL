import React, { useEffect, useState } from 'react';
import { Box, Grid, Toolbar, Typography, Button, Modal, TextField, FormControl, InputLabel, Input, Select, MenuItem } from '@mui/material';
import ProductTable from './ProductTable';
import axios from 'axios';
import {toast} from 'sonner'

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
    const [open, setOpen] = useState(false);
    const [warehouses, setWarehouses] = useState([]);
    const [formData, setFormData] = useState({
        nombre: '',
        warehouse_id: '',
        precio_unitario: '',
        imagen: null,
    });

    const fetchWarehouses = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/warehouse/read', {});
            setWarehouses(response.data.rsp);
        } catch (error) {
            console.error('Error fetching warehouses:', error);
        }
    };

    useEffect(() => {
        fetchWarehouses();
    }, []);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const resetInputs = () => {
        setFormData({
            nombre: '',
            warehouse_id: '',
            precio_unitario: '',
            imagen: null,
         })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('nombre', formData.nombre);
        data.append('warehouse_id', formData.warehouse_id);
        data.append('precio_unitario', formData.precio_unitario);
        data.append('imagen', formData.imagen);

        const response = await axios.post('http://127.0.0.1:8000/api/products/create', data, {});
        const msg = response.data.msg;
        if (response.status == 203) {
            toast.error(msg)
            resetInputs()
        } else {
            toast.success(msg)
            handleClose()
            resetInputs()
        }

        // try {
        //     console.log(response);
        //     handleClose();
        // } catch (error) {
        //     console.log('xd')
        // }
    };

    return (
        <Box sx={{ flexGrow: 1, width: '100%', height: '100%' }}>
            <Toolbar />
            <Typography variant="h4" component="h2" sx={{ my: 2 }}>
                Productos
            </Typography>
            <Button variant="contained" onClick={handleOpen} sx={{ mb: 5 }}>
                Añadir Producto
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} component="form" onSubmit={handleSubmit}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Añadir Nuevo Producto
                    </Typography>
                    <TextField
                        name="nombre"
                        label="Nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        margin="normal"
                        fullWidth
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="warehouse-select-label">Bodega</InputLabel>
                        <Select
                            labelId="warehouse-select-label"
                            id="warehouse_id"
                            name="warehouse_id"
                            value={formData.warehouse_id}
                            label="Warehouse ID"
                            onChange={handleInputChange}
                        >
                            {warehouses.map((warehouse) => (
                                <MenuItem key={warehouse.id} value={warehouse.id}>
                                    Bodega {warehouse.nombre_bodega}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        name="precio_unitario"
                        label="Precio Unitario"
                        value={formData.precio_unitario}
                        onChange={handleInputChange}
                        margin="normal"
                        fullWidth
                    />
                    {/* <InputLabel htmlFor="imagen">Imagen</InputLabel>

                    <FormControl margin="normal" fullWidth>
                        <Input
                            id="imagen"
                            name="imagen"
                            type="file"
                            onChange={handleFileChange}
                        />
                    </FormControl> */}
                    <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                        Añadir
                    </Button>
                </Box>
            </Modal>

            <Grid container spacing={2} sx={{ width: '100%' }}>
                <Grid item xs={12}>
                    <ProductTable />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Products;
