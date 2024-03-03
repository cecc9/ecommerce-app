import { addProduct, removeProduct, subtractProduct } from "./productActions";

export const types = {
    ADD_PRODUCT: "add_product",
    SUBTRACT_PRODUCT: "subtract_product",
    REMOVE_PRODUCT: "remove_product",
};

export const initialState = [];

export const cartReducer = (products, action) => {
    switch (action.type) {
        case types.ADD_PRODUCT: {
            return addProduct(products, action);
        }

        case types.SUBTRACT_PRODUCT: {
            return subtractProduct(products, action);
        }

        case types.REMOVE_PRODUCT: {
            return removeProduct(products, action);
        }

        default:
            return products;
    }
};
