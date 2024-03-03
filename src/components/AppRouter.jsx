import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

// import Brands from "../pages/Brands/Brands";
// import Home from "../pages/Home/Home";
// import Products from "../pages/Products/Products";

const Brands = lazy(() => import("../pages/Brands/Brands"));
const Home = lazy(() => import("../pages/Home/Home"));
const Products = lazy(() => import("../pages/Products/Products"));
const Cart = lazy(() => import("../pages/Cart/Cart"));

const AppRouter = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/brands' element={<Brands />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
