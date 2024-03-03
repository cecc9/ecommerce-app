import { nanoid } from "nanoid";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../context/ProductsContext";

import electronics from "../assets/categories/electronics.jpg";
import jewelery from "../assets/categories/joyas.jpg";
import men from "../assets/categories/men.jpg";
import women from "../assets/categories/women.jpg";

const imagesMap = {
    electronics: electronics,
    jewelery: jewelery,
    ["men's clothing"]: men,
    ["women's clothing"]: women,
};

export const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const {
        isLoading,
        data: { categories: categors },
    } = useContext(ProductsContext);

    useEffect(() => {
        if (!isLoading) {
            setCategories(
                categors.map((item) => ({
                    id: nanoid(),
                    title: item,
                    image: imagesMap[item],
                }))
            );
        }
    }, [categors]);

    return { categories };
};

// MANERA ANTIGUA DE GUARDAR UNA IMAGEN...

// const images = [
//     { image: electronics, title: "electronics" },
//     { image: jewelery, title: "jewelery" },
//     { image: men, title: "men" },
//     { image: women, title: "women" },
// ];

// useEffect(() => {
//     setCategories(
//         categors.map((item) => ({
//             category: item,
//             image: images.find((img) => img.title.includes(item))?.image,
//         }))
//     );
// }, [categors]);
