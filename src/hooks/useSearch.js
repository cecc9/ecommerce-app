import { useState } from "react";

export const useSearch = () => {
    const [valueSearch, setValueSearch] = useState("");

    const handleChangeValue = (e) => {
        setValueSearch(e.target.value);
    };

    console.log(valueSearch);

    return { valueSearch, handleChangeValue };
};
