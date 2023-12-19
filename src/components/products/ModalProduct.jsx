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

const ModalProduct = ({ open, handleClose, warehousesData, handleSubmit, initialFormData }) => {
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
            nombre: '',
            warehouse_id: '',
            precio_unitario: '',
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData)

        if (formData.id) {
            handleSubmit(formData);
            resetInputs();
            return;
        }

        if (!formData.nombre.trim() || !formData.warehouse_id || !formData.precio_unitario) {
            toast.error("Por favor, completa todos los campos requeridos.");
            return;
        }
        handleSubmit(formData);
        resetInputs();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} component="form" onSubmit={handleFormSubmit}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {initialFormData.id ? 'Actualizar Producto' : 'Añadir Nuevo Producto'}
                </Typography>
                <TextField
                    name="nombre"
                    label="Nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    margin="normal"
                    fullWidth
                />
                {formData.id ? null : (
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
                            {warehousesData?.map((warehouse) => (
                                <MenuItem key={warehouse.id} value={warehouse.id}>
                                    Bodega {warehouse.nombre_bodega}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    )}
                <TextField
                    name="precio_unitario"
                    label="Precio Unitario"
                    value={formData.precio_unitario}
                    onChange={handleInputChange}
                    margin="normal"
                    fullWidth
                    type='number'
                    inputProps={{ min: "0", step: "1" }}
                />
                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                    {initialFormData.id ? 'Actualizar' : 'Añadir'}
                </Button>
            </Box>
        </Modal>
    );
};

export default ModalProduct;
