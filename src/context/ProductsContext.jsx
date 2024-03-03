import { createContext } from "react";
import { useProducts } from "../hooks/useProducts";
import { useModal } from "../hooks/useModal";
import { useSearch } from "../hooks/useSearch";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
    const {
        data,
        isLoading,
        productsByCategory,
        setProductsByCategory,
        changeCategory,
    } = useProducts();

    const { isActiveModal, openModal, closeModal, productSelected } =
        useModal();

    const { valueSearch, handleChangeValue } = useSearch();

    const values = {
        data,
        isLoading,
        productsByCategory,
        setProductsByCategory,
        changeCategory,
        isActiveModal,
        openModal,
        closeModal,
        productSelected,
        valueSearch,
        handleChangeValue,
    };

    return (
        <ProductsContext.Provider value={values}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;
