import { useUsuario } from "./src/context/AuthContext";
import { Routes, Route } from "react-router-dom";
import { Home } from "./src/components/Home/Home";
import Inventory from "./src/components/inventario/Inventory";
import Products from "./src/components/products/Products";
import Warehouses from "./src/components/warehouses/Warehouses";
import History from "./src/components/inventario/History";
import Error from "./src/components/Error";

const RouterApp = () => {
    const { usuario } = useUsuario();
    return usuario ? <LogedInRoutes /> : <NotLogedRoutes />;
};

const NotLogedRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/inventario" element={<Inventory />} />
                <Route path="/productos" element={<Products />} />
                <Route path="/bodegas" element={<Warehouses />} />
                <Route path="/inventario/historial/:id" element={<History />} />
                <Route path="*" element={<Error/>}/>

            </Routes>
        </>
    );
};

const LogedInRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/inventario" element={<Inventory />} />
                <Route path="/productos" element={<Products />} />
                <Route path="/bodegas" element={<Warehouses />} />
                <Route path="/inventario/historial/:id" element={<History />} />
                <Route path="*" element={<Error />} />

            </Routes>
        </>
    );
}






export default RouterApp;