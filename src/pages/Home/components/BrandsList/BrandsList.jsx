import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { brands } from "../../assets/brands/brands-images";

import Experiences from "./Experiences";

import "./BrandsList.scss";
import "swiper/css";
import "swiper/css/autoplay";

const BrandsList = () => {
    const [images] = useState(brands);

    return (
        <div className='brandslist'>
            <h2 className='brandslist__title'>Brands</h2>
            <Swiper
                className='brandslist__list'
                spaceBetween={30}
                modules={[Autoplay]}
                autoplay={{ delay: 2000 }}
                breakpoints={{
                    0: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    570: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    770: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                    970: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                    1170: {
                        slidesPerView: 7,
                        spaceBetween: 30,
                    },
                    1370: {
                        slidesPerView: 8,
                        spaceBetween: 30,
                    },
                }}
            >
                {images.map((img) => (
                    <SwiperSlide key={img.id} className='brandslist__item'>
                        <img
                            src={img.image}
                            className='brandslist__image'
                            alt='brand-logo'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Experiences />
        </div>
    );
};

export default BrandsList;
