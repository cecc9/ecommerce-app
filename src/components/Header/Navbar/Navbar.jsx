import { NavLink } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to='/products'>Products</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to='/brands'>Brands</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
