import React, { useState, useEffect } from 'react';
import { Modal, Box, Button } from '@mui/material';
import { ConfirmModal } from '../Modals/Confirm';

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

const WarehouseTable = ({ warehouse, handleDelete, warehouseModal }) => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);

    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [deleteWarehouseId, setDeleteWarehouseId] = useState(null);

    const handleOpenConfirmModal = (id) => {
        setDeleteWarehouseId(id);
        setConfirmModalOpen(true);
    };

    const handleCloseConfirmModal = () => {
        setConfirmModalOpen(false);
    };

    const handleConfirmDelete = () => {
        handleDelete(deleteWarehouseId);
        handleCloseConfirmModal();
    };

    const handleOpenModal = (warehouse) => {
        setSelectedWarehouse(warehouse);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };


    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nombre</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Descripción</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Dirección</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Actualizar</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Borrar</th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {
                        warehouse?.map((item) => (
                            <tr key={item.id}>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center hover:bg-gray-100 cursor-pointer" onClick={() => handleOpenModal(item)}>Bodega {item.nombre_bodega}</td>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">{item.descripcion_bodega}</td>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">{item.direccion_bodega}</td>

                                <td className="whitespace-nowrap px-4 py-2 text-center">
                                    <a
                                        href="#"
                                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        onClick={() => warehouseModal(item)}
                                    >
                                        Actualizar
                                    </a>
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-center">
                                    <a
                                        href="#"
                                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        onClick={() => handleOpenConfirmModal(item.id)}
                                        key={item.id}
                                    >
                                        Borrar
                                    </a>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="warehouse-history-title"
                aria-describedby="warehouse-history-description"
            >
                <Box sx={style}>
                    <h2 id="warehouse-history-title">Historial de bodega</h2>
                    <p id="warehouse-history-description">
                        ID: {selectedWarehouse?.id}<br />
                        Nombre: {selectedWarehouse?.nombre_bodega}
                    </p>
                </Box>
            </Modal>

            <ConfirmModal
                descripcion={`¿Estás seguro que deseas eliminar la bodega?`}
                confirmModalOpen={confirmModalOpen}
                handleCloseConfirmModal={handleCloseConfirmModal}
                handleConfirmDelete={handleConfirmDelete}
            />

        </div>
    );
};

export default WarehouseTable;
