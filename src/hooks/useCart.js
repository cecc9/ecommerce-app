import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import { types } from "../reducer/cartReducer";

export const useCart = () => {
    const { productCart, dispatch } = useContext(CartContext);

    const removeToCart = (id_prod) => {
        dispatch({ type: types.REMOVE_PRODUCT, payload: { id: id_prod } });
    };

    const addToCart = (product) => {
        dispatch({ type: types.ADD_PRODUCT, payload: product });
    };

    const subtractToCart = (product) => {
        dispatch({ type: types.SUBTRACT_PRODUCT, payload: product });
    };

    return { productCart, removeToCart, addToCart, subtractToCart };
};
