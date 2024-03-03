import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import SearchForm from "./SearchForm/SearchForm";
import { CartContext } from "../../context/CartContext";

import CartIcon from "../CartIcon";
import LoginIcon from "../LoginIcon";
import MenuIcon from "../MenuIcon";

import logo from "../../assets/nostra-logo.png";

import "./Header.scss";

const Header = () => {
    const { productCart } = useContext(CartContext);
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const changeIsActive = () => {
        setIsActive((prev) => !prev);
    };

    const navigateToHome = () => {
        navigate("/");
    };

    const navigateToCart = () => {
        navigate("/cart");
    };

    return (
        <header className='header'>
            <figure className='header__logo'>
                <img
                    className='header__logo-image'
                    onClick={navigateToHome}
                    src={logo}
                    alt='logo'
                />
            </figure>
            <MenuIcon
                changeIsActive={changeIsActive}
                className='header__button-svg--menu'
            />
            <div
                className={
                    isActive ? "header__actions active" : "header__actions"
                }
            >
                <Navbar />

                {location.pathname === "/products" && <SearchForm />}

                <div className='header__buttons'>
                    <button
                        className='header__button--cart header__button'
                        title='cart'
                        onClick={navigateToCart}
                    >
                        <CartIcon
                            widthIcon={30}
                            heightIcon={30}
                            fillColorIcon='#404b5b'
                        />
                        <div className='header__quantity-products'>
                            {productCart.length}
                        </div>
                    </button>
                    <button
                        className='header__button--login header__button'
                        title='login'
                    >
                        <LoginIcon
                            widthIcon={30}
                            heightIcon={30}
                            fillColorIcon='#404b5b'
                        />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
