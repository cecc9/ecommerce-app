import {
    getCategories,
    getProducts,
    getProductsByLimit,
} from "../services/products";

export const fetchingData = (setData, setIsLoading) => {
    setIsLoading(true);

    Promise.all([getProducts(), getCategories(), getProductsByLimit()]).then(
        ([dt_prod, dt_cat, dt_prod_lim]) => {
            setData((prev) => ({
                ...prev,
                products: dt_prod,
                productsLimit: dt_prod_lim,
                categories: dt_cat,
            }));

            setIsLoading(false);
        }
    );
};
