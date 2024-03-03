import { createContext, useContext, useReducer } from "react";
import { ProductsContext } from "./ProductsContext";
import { cartReducer, initialState } from "../reducer/cartReducer";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    // const { products } = useContext(ProductsContext);
    const [productCart, dispatch] = useReducer(cartReducer, initialState);

    console.log("productCart", productCart);

    const values = { productCart, dispatch };

    return (
        <CartContext.Provider value={values}>{children}</CartContext.Provider>
    );
};

export default CartContextProvider;
