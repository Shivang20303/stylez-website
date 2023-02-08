import { createContext, useState, useEffect } from 'react';

//This function will do 2 things:
//1. If item already added, increment no. of items
//2. If not added update existing cart with the product with quantity 1
export function addCartItem(cartItem, productToBeAdded) {
    //Checks if item present
    const existingCartItem = cartItem.find(
        (item) => item.id === productToBeAdded.id
    );
    //If item present, increment quantity
    if (existingCartItem) {
        return cartItem.map((item) =>
            item.id === productToBeAdded.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    }
    //If item not presents, update existing cart
    return [...cartItem, { ...productToBeAdded, quantity: 1 }];
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItem: [],
    addItemToCart: () => { },
    cartCount: 0
});

export function CartProvider({ children }) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItem, setCartItem] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    //Everytime a change occurs in the cartItem array i.e. the quantity changes, the useEffect hook will update the cartCount
    useEffect(() => {
        const newCount = cartItem.reduce((total,item) => total + item.quantity, 0);
        setCartCount(newCount);
    }, [cartItem])
    function addItemToCart(product) {
        setCartItem(addCartItem(cartItem, product));
    }
    const value = { isCartOpen, setIsCartOpen, cartItem, addItemToCart,cartCount };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};