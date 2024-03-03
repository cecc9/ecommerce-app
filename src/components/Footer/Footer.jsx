import FooterForm from "./FooterForm";
import FooterLinks from "./FooterLinks";
import PaymentMethods from "./PaymentMethods";

import logo from "../../assets/nostra-logo.png";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__content'>
                <h2 className='footer__title'>
                    Subscribe to our newsletter to get updates <br /> to our
                    latest collections
                </h2>
                <p className='footer__text'>
                    Get 20% off on your first order just by subscribing to our
                    newsletter
                </p>
                <FooterForm />
                <p className='footer__text--two'>
                    You will be able to unsubscribe ay any time. <br /> Read our
                    Privacy Policy here
                </p>
            </div>

            <div className='footer__info'>
                <figure className='footer__figure'>
                    <img
                        className='footer__figure-image'
                        src={logo}
                        alt='logo'
                    />
                    <figcaption className='footer__figure-caption'>
                        Specializes in providing high-quality, stylish <br />
                        products for your wardrobe
                    </figcaption>
                </figure>
                <div className='footer__menu'>
                    <FooterLinks title='shop' />
                    <FooterLinks title='company' />
                    <FooterLinks title='support' />
                </div>
                <PaymentMethods />
            </div>
            <div className='footer__copyright'>
                <small>Copyright &copy; 2023 Nostra, All right reserved</small>
            </div>
        </footer>
    );
};

export default Footer;
