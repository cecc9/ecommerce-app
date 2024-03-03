export const getProducts = () => {
    return fetch("https://fakestoreapi.com/products").then((response) =>
        response.json()
    );
};

export const getProductById = (id) => {
    return fetch(`https://fakestoreapi.com/products/${id}`).then((response) =>
        response.json()
    );
};

export const getProductsByCategory = (category) => {
    return fetch(`https://fakestoreapi.com/products/category/${category}`).then(
        (response) => response.json()
    );
};

export const getProductsByLimit = () => {
    return fetch("https://fakestoreapi.com/products?limit=5").then((response) =>
        response.json()
    );
};

export const getCategories = () => {
    return fetch("https://fakestoreapi.com/products/categories").then(
        (response) => response.json()
    );
};
