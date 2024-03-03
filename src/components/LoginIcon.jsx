import React from "react";

const LoginIcon = ({ widthIcon, heightIcon, fillColorIcon }) => {
    return (
        <svg
            className='header__button-svg'
            xmlns='http://www.w3.org/2000/svg'
            width={widthIcon ? widthIcon : "24px"}
            height={heightIcon ? heightIcon : "24px"}
            fill={fillColorIcon ? fillColorIcon : "#000"}
            viewBox='0 0 24 24'
        >
            <path d='m13 16 5-4-5-4v3H4v2h9z'></path>
            <path d='M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z'></path>
        </svg>
    );
};

export default LoginIcon;
