import { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext";

import SearchIcon from "../../SearchIcon";

import "./SearchForm.scss";

const SearchForm = () => {
    const { valueSearch, handleChangeValue } = useContext(ProductsContext);

    return (
        <form className='search-form'>
            <span className='search-form__icon'>
                <SearchIcon />
            </span>
            <input
                className='search-form__input'
                type='text'
                value={valueSearch}
                onChange={handleChangeValue}
                placeholder='Search'
            />
        </form>
    );
};

export default SearchForm;
