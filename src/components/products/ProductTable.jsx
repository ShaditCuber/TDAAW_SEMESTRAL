import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Modal, Box } from '@mui/material';

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
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Traspaso Bodega</th>
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
                                    >
                                        Traspaso
                                    </a>
                                </td>
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
                                        onClick={() => handleDelete(item.id)}
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
            >
                <Box sx={style}>
                    <h2 id="product-history-title">Historial del Producto</h2>
                    <p id="product-history-description">
                        {/* Aquí puedes incluir más detalles del producto seleccionado */}
                        {/* Por ejemplo, si tienes un componente que muestra el historial, puedes usarlo aquí: */}
                        {/* {selectedProduct && <ProductHistory productId={selectedProduct.id} />} */}
                        {/* O simplemente mostrar información del producto: */}
                        ID: {selectedProduct?.id}<br />
                        Nombre: {selectedProduct?.nombre}
                        {/* ... más detalles ... */}
                    </p>
                </Box>
            </Modal>
        </div>
    );
};

export default ProductTable;
