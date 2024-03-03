import { useContext } from "react";
import { ProductsContext } from "../../../../context/ProductsContext";

import CartIcon from "../../../../components/CartIcon";

import "./ProductCard.scss";

const ProductCard = (product) => {
    const { openModal } = useContext(ProductsContext);

    return (
        <>
            <figure className='featured-products__image-wrapper'>
                <img
                    className='featured-products__image'
                    src={product.image}
                    alt='product-image'
                />
            </figure>
            <section className='featured-products__info'>
                <div className='featured-products__details'>
                    <h2 className='featured-products__product-title'>
                        {product.title}
                    </h2>
                    <p className='featured-products__product-price'>
                        $ {product.price}
                    </p>
                </div>
                <div
                    className='featured-products__action'
                    onClick={() => openModal(product)}
                >
                    <CartIcon
                        fillColorIcon='#fff'
                        widthIcon={30}
                        heightIcon={30}
                    />
                </div>
            </section>
        </>
    );
};

export default ProductCard;
