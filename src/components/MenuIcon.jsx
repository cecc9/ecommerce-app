import React from "react";

const MenuIcon = ({ changeIsActive, className, width = 50 }) => {
    return (
        <svg
            className={className}
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={width}
            viewBox='0 0 24 24'
            fill='#1d242d'
            onClick={changeIsActive}
        >
            <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z'></path>
        </svg>
    );
};

export default MenuIcon;
