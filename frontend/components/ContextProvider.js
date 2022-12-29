import React, { useState, useEffect, createContext } from "react";
import Crud from '../apis/crud';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [productItems, setProductItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const fetchData = async () => {
        const crud = new Crud();
        const products = await crud.get("retrive/products");
        setProductItems(products.result);
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <AppContext.Provider value={{
            productItems,
            cartItems,
            setProductItems,
            setCartItems,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;