import { useContext, useState } from "react";
import { ProductsContext } from "../../../../context/ProductsContext";
import MenuIcon from "../../../../components/MenuIcon";

import "./Sidebar.scss";

const Sidebar = ({ isActive, handleIsActive }) => {
    const [show, setShow] = useState(false);

    const {
        data: { categories },
        productsByCategory,
        changeCategory,
    } = useContext(ProductsContext);

    const handleIsShow = () => {
        setShow((prev) => !prev);
        handleIsActive();
    };

    const handleChecked = (e) => {
        // setIsChecked(e.target.checked ? e.target.value : "");
        // if (e.target.checked) {
        //     setProductsByCategory((prev) => ({
        //         ...prev,
        //         category: e.target.value,
        //     }));
        // } else {
        //     setProductsByCategory((prev) => ({ ...prev, category: "" }));
        // }

        changeCategory(e.target.checked, e.target.value);

        // code valido...
        // setProductsByCategory((prev) => ({
        //     ...prev,
        //     category: e.target.checked ? e.target.value : "",
        // }));
    };
    // const handleChecked = (e) => {
    //     setIsChecked(e.target.checked ? e.target.value : "");
    //     if (e.target.checked) {
    //         getAllProductsByCategory(e.target.value);
    //     } else {
    //         getAllProducts();
    //     }
    // };

    return (
        <div className='sidebar'>
            <div className={`sidebar__menu ${isActive ? "active" : ""}`}>
                <div
                    className={`sidebar__menu-categories ${show ? "show" : ""}`}
                >
                    <button
                        className='sidebar__menu-toggle'
                        onClick={handleIsShow}
                    >
                        <MenuIcon
                            className='sidebar__menu-toggle--icon'
                            width={40}
                        />
                    </button>
                    <ul className='sidebar__menu-list'>
                        {categories.map((category) => (
                            <li
                                key={category}
                                className={`sidebar__menu-item ${
                                    show ? "show" : ""
                                }`}
                            >
                                <input
                                    type='checkbox'
                                    onChange={handleChecked}
                                    // checked={isChecked === category}
                                    checked={
                                        productsByCategory.category === category
                                    }
                                    value={category}
                                    className='sidebar__menu-checkbox'
                                />
                                <label className='sidebar__menu-label'>
                                    {category}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
