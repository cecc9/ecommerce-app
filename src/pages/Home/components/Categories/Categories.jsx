import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import { useCategories } from "../../data/useCategories";
import { ProductsContext } from "../../../../context/ProductsContext";

import ArrowIcon from "../ArrowIcon";
import "./Categories.scss";
import "swiper/css";
import "swiper/css/autoplay";

const Categories = () => {
    const navigate = useNavigate();

    const { categories } = useCategories();
    const { changeCategory } = useContext(ProductsContext);

    const handleClick = (category) => {
        changeCategory(true, category);
        navigate("/products");
    };

    return (
        <div className='categories'>
            <h2 className='categories__title'>Selection of Categories</h2>
            <Swiper
                className='categories__list'
                modules={[Autoplay]}
                autoplay={{ delay: 2000 }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    570: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    970: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1370: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
            >
                {categories.map((category) => (
                    <SwiperSlide key={category.id} className='categories__item'>
                        <figure className='categories__figure'>
                            <img
                                className='categories__image'
                                src={category.image}
                                alt='category'
                            />
                        </figure>
                        <div className='categories__content'>
                            <button
                                className='categories__button'
                                onClick={() => handleClick(category.title)}
                            >
                                <span>{category.title}</span>
                                <ArrowIcon />
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Categories;
