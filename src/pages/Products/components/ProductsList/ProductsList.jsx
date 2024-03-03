import { useMemo, useContext } from "react";
import ProductCard from "../../../Home/components/FeaturedProducts/ProductCard";
import { ProductsContext } from "../../../../context/ProductsContext";

import NextIcon from "../../../../components/NextIcon";

import "./ProductsList.scss";

const ProductsList = ({ products, isLoading, isActive, valueSearch }) => {
    const {
        productsByCategory: { category },
    } = useContext(ProductsContext);

    const filterProducts = useMemo(
        () =>
            products.filter((product) =>
                product.title.toLowerCase().includes(valueSearch.toLowerCase())
            ),
        [products, valueSearch]
    );

    return (
        <div className='productsList'>
            <section className='productsList__section'>
                <div className='productsList__container'>
                    <h2 className='productsList__title'>
                        <span className='productsList__title-text'>
                            List Products
                        </span>
                        <NextIcon />
                        <span className='productsList__title-category'>
                            {category}
                        </span>
                    </h2>
                    {!isLoading ? (
                        <ul className='productsList__list'>
                            {filterProducts.map((product) => (
                                <li
                                    key={product.id}
                                    className='productsList__item'
                                >
                                    <ProductCard {...product} />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <h3 className='productsList__loading'>cargando...</h3>
                    )}
                </div>
            </section>
            <div
                className={`productsList__bg ${isActive ? "active" : ""}`}
            ></div>
        </div>
    );
};

export default ProductsList;
