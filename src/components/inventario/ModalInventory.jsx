import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, FormControl, InputLabel, Select, MenuItem, Typography, Modal } from '@mui/material';
import { toast } from 'sonner';

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

const ModalInventory = ({ open, handleClose, productsData, handleSubmit, initialFormData }) => {
    
    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        setFormData(initialFormData);
    }, [initialFormData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const resetInputs = () => {
        setFormData({
            product_name: '',
            cantidad: '',
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!formData.tipo || !formData.cantidad) {
            toast.error('Todos los campos son obligatorios');
            return;
        }
        formData.product_id = formData.id;
        handleSubmit(formData);
        resetInputs();

    };


    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style} component="form" onSubmit={handleFormSubmit}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Modidicar Inventario
                </Typography>
                <FormControl fullWidth margin="normal">
                    <InputLabel id="product-select-label">Producto</InputLabel>
                    <Select
                        labelId="product-select-label"
                        id="product_id"
                        name="product_id"
                        value={formData.id}
                        label="Producto"
                        onChange={handleInputChange}
                    >
                        {productsData?.map((product) => (
                            <MenuItem key={product.id} value={product.id}>
                                {product.nombre}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <InputLabel id="type-select-label">Tipo</InputLabel>
                    <Select
                        labelId="type-select-label"
                        id="tipo"
                        name="tipo"
                        label="Tipo"
                        onChange={handleInputChange}
                    >   
                        <MenuItem value="entrada">Entrada</MenuItem>
                        <MenuItem value="salida">Salida</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    name="cantidad"
                    label="Cantidad"
                    type="number"
                    onChange={handleInputChange}
                    margin="normal"
                    fullWidth
                    inputProps={{ min: "1", step: "1" }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant="contained" sx={{ mt: 2, background: 'red' }} onClick={handleClose}>
                        Salir
                    </Button>
                    <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                        Añadir
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default ModalInventory;
