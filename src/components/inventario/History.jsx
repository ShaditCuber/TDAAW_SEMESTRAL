import React from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress, Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useStock } from '../../queries/stocks/StockQuery';

const History = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useStock(id);
    const [productName, setProductName] = React.useState('');

    const getTipoMovimientoStyle = (tipo) => {
        if (tipo === 'entrada') {
            return 'text-green-700 bg-green-100 uppercase';
        } else if (tipo === 'salida') {
            return 'text-red-700 bg-red-100 uppercase';
        }
        return '';
    };


    React.useEffect(() => {
        if (data) {
            setProductName(data.rsp.nombre);
        }
    }
    , [data]);

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (isError) {
        return <div>Error al cargar el historial: {error.message}</div>;
    }

    return (
        <div className="overflow-x-auto">
            <div className="mb-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => window.location = '/inventario'}
                >
                    Volver a Inventario
                </button>
            </div>
            <Typography variant="h4" sx={{ mb: 2 }}>
                Historial del Producto
            </Typography>
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nombre Producto</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Cantidad</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tipo Movimiento</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Observaciones</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Fecha</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {data.rsp.stocks?.map((item) => (
                        <tr key={item.id}>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{productName}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.cantidad}</td>
                            <td className={`whitespace-nowrap px-4 py-2 text-center ${getTipoMovimientoStyle(item.tipo)}`}>{item.tipo}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.observaciones}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item.created_at_formatted}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default History;
