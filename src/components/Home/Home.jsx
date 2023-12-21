import React from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { useWarehousesLimit } from '../../queries/warehouse/WarehouseQuery';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    RadarController,
    DoughnutController,
    PieController,
    LineController,
    BarController,
    Tooltip,
    Legend
} from 'chart.js';
import { set } from 'react-hook-form';
import { useProductsLimit } from '../../queries/product/ProductQuery';
import { useStockWarehouse } from '../../queries/stocks/StockQuery';
import { Box, CircularProgress } from '@mui/material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    RadialLinearScale, // Asegúrate de incluir RadialLinearScale
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    RadarController,
    DoughnutController,
    PieController,
    LineController,
    BarController,
    Tooltip,
    Legend
);



export const Home = () => {


    // obtener los datos de la bodega con fetchWarehousesLimit
    const [bodegas, setBodegas] = React.useState([]);
    const [productos, setProductos] = React.useState([]);
    const [stock, setStock] = React.useState([]);
    const { data: bodegasData, isLoading, isError, error } = useWarehousesLimit();
    // const { data: stock, } = useStockWarehouse(1);
    const { data: products } = useProductsLimit();





    React.useEffect(() => {
        if (bodegasData) {
            setBodegas(bodegasData.map((bodega) => bodega.nombre_bodega))
        }
    }, [bodegasData]);

    React.useEffect(() => {
        if (products) {
            setProductos(products?.map((product) => product.nombre))
        }
    }, [products]);

    React.useEffect(() => {
        if (stock) {
            setStock(products?.map((product) => product.inventory_count))
        }
    }, [stock]);

    //obtener 

    const stockProductosData = {
        labels: productos,
        datasets: [{
            label: 'Stock por Producto',
            data: stock,
            backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)'],
        }]
    };


    if (isLoading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <CircularProgress />
        </Box>
    )
    if (isError) return <div>Error al cargar los productos</div>;



    return (



        <div className="grid grid-cols-4 grid-rows-3 gap-4">
            <div className="col-span-4 row-span-6">
                <Bar data={stockProductosData} />
            </div>
        </div>

    );
};
