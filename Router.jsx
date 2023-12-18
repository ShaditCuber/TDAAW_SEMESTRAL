import { useUsuario } from "./src/context/AuthContext";
import { Routes, Route } from "react-router-dom";
import { Home } from "./src/components/Home/Home";
import Inventory from "./src/components/inventario/Inventory";
import Products from "./src/components/products/Products";


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
            </Routes>
        </>
    );
}






export default RouterApp;