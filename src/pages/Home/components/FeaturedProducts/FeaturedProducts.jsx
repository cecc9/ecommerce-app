import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import { ProductsContext } from "../../../../context/ProductsContext";
import ProductCard from "./ProductCard";

import "./FeaturedProducts.scss";
import "swiper/css";
import "swiper/css/autoplay";

const FeaturedProducts = () => {
    const {
        data: { productsLimit },
    } = useContext(ProductsContext);

    return (
        <div className='featured-products'>
            <h2 className='featured-products__title'>Featured Products</h2>
            <Swiper
                className='featured-products__list'
                // spaceBetween={70}
                modules={[Autoplay]}
                autoplay={{ delay: 4000 }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 70,
                    },
                    770: {
                        slidesPerView: 2,
                        spaceBetween: 70,
                    },
                    970: {
                        slidesPerView: 3,
                        spaceBetween: 70,
                    },
                }}
            >
                {productsLimit.map((product) => (
                    <SwiperSlide
                        className='featured-products__item'
                        key={product.id}
                    >
                        <ProductCard {...product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FeaturedProducts;
