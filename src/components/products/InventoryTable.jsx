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

const InventoryTable = () => {
    const [inventory, setInventory] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    useEffect(() => {
        const fetchInventory = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/products/read');
            setInventory(response.data.data);
        };
        fetchInventory();
    }, []);

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nombre</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Cantidad</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Descripción</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Bodega</th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {
                        inventory?.map((item) => (
                            <tr key={item.id}>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center hover:bg-gray-100 cursor-pointer" onClick={() => handleOpenModal(item)}>{item.id}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.nombre}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.inventory_count}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.descripcion}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">Bodega {item.warehouse_name}</td>

                                <td className="whitespace-nowrap px-4 py-2 text-center">
                                    <a
                                        href="#"
                                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                    >
                                        Entrada o Salida
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

export default InventoryTable;
