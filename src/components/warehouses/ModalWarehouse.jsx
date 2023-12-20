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

const ModalWarehouse = ({ open, handleClose, handleSubmit, initialFormData }) => {
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
            nombre_bodega: '',
            descripcion_bodega: '',
            direccion_bodega: '',
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

        if (!formData.nombre_bodega.trim()) {
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
                    {initialFormData.id ? 'Actualizar Bodega' : 'Añadir Nuevo Bodega'}
                </Typography>
                <TextField
                    name="nombre_bodega"
                    label="Nombre Bodega"
                    value={formData.nombre_bodega}
                    onChange={handleInputChange}
                    margin="normal"
                    fullWidth
                />
                <TextField
                    name="descripcion_bodega"
                    label="Descripción Bodega"
                    value={formData.descripcion_bodega}
                    onChange={handleInputChange}
                    margin="normal"
                    fullWidth
                />
                <TextField
                    name="direccion_bodega"
                    label="Dirección Bodega"
                    value={formData.direccion_bodega}
                    onChange={handleInputChange}
                    margin="normal"
                    fullWidth
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant="contained" sx={{ mt: 2, background: 'red' }} onClick={handleClose}>
                        Salir
                    </Button>
                    <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                        {initialFormData.id ? 'Actualizar' : 'Añadir'}
                    </Button>
                </Box>
                
            </Box>
        </Modal>
    );
};

export default ModalWarehouse;
