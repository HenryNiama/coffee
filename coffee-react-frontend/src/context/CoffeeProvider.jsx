import React from 'react';
import {createContext, useState} from 'react';
import {categories as categoriesDB} from "../data/categories.js";


const CoffeeContext = createContext();

const CoffeeProvider = ({children}) => {

    const [categories, setCategories] = useState(categoriesDB);
    let [currentCategory, setCurrentCategory] = useState(categories[0]);

    const handleClickCategory = (id) => {
        const category = categories.filter(category => category.id === id)[0];
        setCurrentCategory(category);
        console.log(category);
    };

    const [modal, setModal] = useState(false);

    const handleClickModal = () => {
        setModal(!modal);
        console.log(modal);
    }

    return (
        <CoffeeContext.Provider
            value={{
                categories,
                currentCategory,
                handleClickCategory,
                modal,
                handleClickModal
            }}>
            {children}
        </CoffeeContext.Provider>
    );
};

export {
    CoffeeProvider, CoffeeContext
};
