import { useEffect, useState } from "react";
import { fetchingData } from "../utils/api";
import { getProductsByCategory } from "../services/products";

export const useProducts = () => {
    const [data, setData] = useState({
        products: [],
        productsLimit: [],
        categories: [],
    });
    const [productsByCategory, setProductsByCategory] = useState({
        category: "",
        products: [],
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchingData(setData, setIsLoading);
    }, []);

    useEffect(() => {
        const abortController = new AbortController();
        const { signal } = abortController;

        if (productsByCategory.category) {
            getProductsByCategory(productsByCategory.category, { signal }).then(
                (dt_prodByCat) =>
                    setProductsByCategory((prev) => ({
                        ...prev,
                        products: dt_prodByCat,
                    }))
            );
        }

        return () => abortController.abort();
    }, [productsByCategory.category]);

    const changeCategory = (checked, value) => {
        setProductsByCategory((prev) => ({
            ...prev,
            category: checked ? value : "",
        }));
    };

    return {
        data,
        isLoading,
        productsByCategory,
        setProductsByCategory,
        changeCategory,
    };
};
