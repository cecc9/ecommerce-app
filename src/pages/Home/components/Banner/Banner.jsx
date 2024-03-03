import 'animate.css';
import { useEffect, useState } from 'react';

import { banners } from '../../assets/banners/banners';
import ArrowIcon from '../ArrowIcon';

import './Banner.scss';

const Banner = () => {
    const [count, setCount] = useState(0);

    const changeBanner = () => {
        count < 2 ? setCount((prev) => prev + 1) : setCount(0);
    };

    useEffect(() => {
        const interval = setInterval(changeBanner, 5000);
        return () => clearInterval(interval);
    }, [count]);

    return (
        <section className='banner'>
            <picture className='banner__picture'>
                <img
                    className='banner__image animate__animated animate__fadeIn'
                    src={banners[count]}
                    key={count}
                    alt='banner'
                />
            </picture>
            <div className='banner__content'>
                <h1 className='banner__title'>
                    Level up your style with our summer collections
                </h1>
                <button className='banner__button'>
                    <span>shop now</span>
                    <ArrowIcon />
                </button>
            </div>
        </section>
    );
};

export default Banner;
