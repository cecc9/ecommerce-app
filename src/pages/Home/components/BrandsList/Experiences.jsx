import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import { experiences } from "../../data/experiences";
import "swiper/css";
import "swiper/css/autoplay";

const Experiences = () => {
    return (
        <section className='experiences'>
            <div className='experiences__heading'>
                <h2 className='experiences__subtitle'>
                    We provide best <br /> customer experiences
                </h2>
                <p className='experiences__description'>
                    We ensure our constomers have the best shopping experience
                </p>
            </div>
            <Swiper
                className='experiences__list'
                modules={[Autoplay]}
                spaceBetween={50}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    570: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    870: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1170: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
            >
                {experiences.map((experience) => (
                    <SwiperSlide
                        key={experience.id}
                        className='experiences__item'
                    >
                        <img
                            src={experience.image}
                            className='experiences__image-item'
                            alt='icon'
                        />
                        <h3 className='experiences__title-item'>
                            {experience.title}
                        </h3>
                        <p className='experiences__description-item'>
                            {experience.description}
                        </p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Experiences;
