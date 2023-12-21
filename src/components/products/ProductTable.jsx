import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
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

const ProductTable = ({ inventory, handleDelete, productModal }) => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [deleteProductId, setDeleteProductId] = useState(null);

    const handleOpenConfirmModal = (id) => {
        setDeleteProductId(id);
        setConfirmModalOpen(true);
    };

    const handleCloseConfirmModal = () => {
        setConfirmModalOpen(false);
    };

    const handleConfirmDelete = () => {
        handleDelete(deleteProductId);
        handleCloseConfirmModal();
    };


    const handleOpenModal = (product) => {
        setSelectedProduct(product);
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
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Bodega</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Actualizar</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Borrar</th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {
                        inventory?.map((item) => (
                            <tr key={item.id}>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center hover:bg-gray-100 cursor-pointer" onClick={() => handleOpenModal(item)}>{item.nombre}</td>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">{item.warehouse_name}</td>

                                <td className="whitespace-nowrap px-4 py-2 text-center">
                                    <a
                                        href="#"
                                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        onClick={() => productModal(item)}
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
                aria-labelledby="product-history-title"
                aria-describedby="product-history-description"
                className="flex items-center justify-center p-4"
            >
                <div className="bg-white rounded-lg shadow-xl w-80">
                    <div className="p-4 border-b border-gray-200">
                        <h2 id="warehouse-history-title" className="text-lg font-semibold text-gray-700">
                            Datos de Productos
                        </h2>
                    </div>
                    <div className="p-4">
                        <p id="warehouse-history-description" className="text-gray-600">
                            <strong>Nombre:</strong> {selectedProduct?.nombre} <br />
                            <strong>Descripcion:</strong> {selectedProduct?.descripcion} <br />
                            <strong>Precio Unitario:</strong> {selectedProduct?.precio_unitario} <br />
                            <strong>Bodega:</strong> {selectedProduct?.warehouse_name} <br />
                        </p>
                    </div>
                    <div className="flex justify-end p-4 border-t border-gray-200">
                        <button
                            onClick={handleCloseModal}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </Modal>
            <ConfirmModal
                descripcion={`¿Estás seguro que deseas eliminar el producto?`}
                confirmModalOpen={confirmModalOpen}
                handleCloseConfirmModal={handleCloseConfirmModal}
                handleConfirmDelete={handleConfirmDelete}
            />
        </div>
    );
};

export default ProductTable;
