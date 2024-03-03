import ArrowIcon from "../../pages/Home/components/ArrowIcon";
import banner from "../../assets/offer.png";

import "./LimitOffer.scss";

const LimitOffer = () => {
    return (
        <div className='limit-offer'>
            <figure className='limit-offer__figure'>
                <img className='limit-offer__image' src={banner} alt='' />
            </figure>
            <section className='limit-offer__section'>
                <p className='limit-offer__tagline'>limited offer</p>
                <h2 className='limit-offer__title'>
                    35% off only this friday and get special gift
                </h2>
                <button className='limit-offer__button'>
                    <span className='limit-offer__button-text'>
                        Grab it now
                    </span>
                    <ArrowIcon />
                </button>
            </section>
        </div>
    );
};

export default LimitOffer;
