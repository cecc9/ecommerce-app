export const addProduct = (products, action) => {
    const { id } = action.payload;

    if (products.some((product) => product.id === id)) {
        return products.map((product) =>
            product.id === id
                ? {
                      ...product,
                      quantity: product.quantity + 1,
                      subTotal: parseFloat(
                          (product.subTotal + product.price).toFixed(2)
                      ),
                  }
                : product
        );
    }
    return [
        ...products,
        {
            ...action.payload,
            quantity: 1,
            subTotal: action.payload.price,
        },
    ];
};

export const subtractProduct = (products, action) => {
    const { id, quantity } = action.payload;

    if (quantity <= 1) {
        return products.filter((product) => product.id !== id);
    }

    return products.map((product) => {
        return product.id === id
            ? {
                  ...product,
                  quantity: product.quantity - 1,
                  subTotal: parseFloat(
                      (product.subTotal - product.price).toFixed(2)
                  ),
              }
            : product;
    });
};

export const removeProduct = (products, action) => {
    const { id } = action.payload;
    return products.filter((product) => product.id !== id);
};
