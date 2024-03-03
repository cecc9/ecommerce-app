import { useState } from "react";

export const useModal = () => {
    const [isActiveModal, setIsActiveModal] = useState(false);
    const [productSelected, setProductSelected] = useState({});

    const openModal = (product) => {
        setProductSelected(product);
        setIsActiveModal(true);
    };

    const closeModal = () => {
        setIsActiveModal(false);
    };

    return { isActiveModal, openModal, closeModal, productSelected };
};
