import { useContext, useEffect, useMemo, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { ProductsContext } from "../../context/ProductsContext";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductsList from "./components/ProductsList/ProductsList";

import "./Products.scss";
import LimitOffer from "../../components/LimitOffer/LimitOffer";

const Products = () => {
    const [isActive, setIsActive] = useState(false);

    const { data, isLoading, productsByCategory, valueSearch } =
        useContext(ProductsContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleIsActive = () => {
        setIsActive((prev) => !prev);
    };

    // Ejemplo, memorizado!!
    const memoizedProducts = useMemo(() => {
        return !productsByCategory.category
            ? data.products
            : productsByCategory.products;
    }, [
        data.products,
        productsByCategory.category,
        productsByCategory.products,
    ]);

    return (
        <MainLayout>
            <main className='products-container'>
                <Sidebar isActive={isActive} handleIsActive={handleIsActive} />
                <ProductsList
                    // products={
                    //     !productsByCategory.category
                    //         ? data.products
                    //         : productsByCategory.products
                    // }
                    products={memoizedProducts} // Lo mismo pero memorizado!!
                    isLoading={isLoading}
                    isActive={isActive}
                    valueSearch={valueSearch}
                />
            </main>
            <LimitOffer />
        </MainLayout>
    );
};

export default Products;
