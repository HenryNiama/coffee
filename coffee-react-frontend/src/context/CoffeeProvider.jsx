import React from 'react';
import {createContext, useState, useEffect} from 'react';
import {categories as categoriesDB} from "../data/categories.js";
import {toast} from "react-toastify";


const CoffeeContext = createContext();

const CoffeeProvider = ({children}) => {

    const [categories] = useState(categoriesDB);
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
    };

    const [product, setProduct] = useState({});

    const handleSetProduct = product => {setProduct(product)};

    const[order, setOrder] = useState([]);

    const handleAddOrder = ({categoria_id, ...product}) => {
        if(order.some(order => order.id === product.id)){
            const productUpdated = order.map(orderState => orderState.id === product.id ? product : orderState);
            setOrder(productUpdated);
            toast.success('Product updated');
        }else{
            setOrder([...order, product]);
            toast.success('Product added to cart');
        }
    }

    const handleEditQuantity = (id) => {
        const productUpdated = order.filter(product => product.id === id)[0];
        setProduct(productUpdated);
        setModal(!modal);
    }

    const handleDeleteProduct = (id) => {
        const productUpdated = order.filter(product => product.id !== id);
        setOrder(productUpdated);
        toast.success('Product deleted from cart');
    }

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newTotal = order.reduce((acc, product) => acc + product.precio * product.quantity, 0);
        setTotal(newTotal);
    }, [order]);


    return (
        <CoffeeContext.Provider
            value={{
                categories,
                currentCategory,
                handleClickCategory,
                modal,
                handleClickModal,
                product,
                handleSetProduct,
                order,
                handleAddOrder,
                handleEditQuantity,
                handleDeleteProduct,
                total
            }}>
            {children}
        </CoffeeContext.Provider>
    );
};

export {
    CoffeeProvider, CoffeeContext
};

