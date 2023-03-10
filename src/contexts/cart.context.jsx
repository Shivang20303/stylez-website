import { createContext, useState, useEffect } from 'react';

//This function will do 2 things:
//1. If item already added, increment no. of items
//2. If not added update existing cart with the product with quantity 1
function addCartItem(cartItem, productToBeAdded) {
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

function deleteCartItem(cartItem, productToBeRemoved) {
    const existingCartItem = cartItem.find(
        (item) => item.id === productToBeRemoved.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItem.filter((item) => item.id !== productToBeRemoved.id);
    }

    return cartItem.map((item) => item.id === productToBeRemoved.id
        ? { ...item, quantity: item.quantity - 1 } : item);

};

function emptyTheItem(cartItem, productToBeCleared) {
    return cartItem.filter((item) => item.id !== productToBeCleared.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItem: [],
    addItemToCart: () => { },
    removeCartItem: () => { },
    cartCount: 0,
    clearItemFromCart: () => { },
    cartTotal: 0
});

export function CartProvider({ children }) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItem, setCartItem] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    //Everytime a change occurs in the cartItem array i.e. the quantity changes, the useEffect hook will update the cartCount
    useEffect(() => {
        const newCount = cartItem.reduce((total, item) => total + item.quantity, 0);
        setCartCount(newCount);
    }, [cartItem])

    useEffect(() => {
        const newTotal = cartItem.reduce((total, item) => total + item.quantity * item.price, 0);
        setCartTotal(newTotal);
    }, [cartItem])

    function addItemToCart(product) {
        setCartItem(addCartItem(cartItem, product));
    }

    function removeCartItem(productToBeRemoved) {
        setCartItem(deleteCartItem(cartItem, productToBeRemoved));
    };

    function clearItemFromCart(productToBeCleared) {
        setCartItem(emptyTheItem(cartItem,productToBeCleared));
    } 
    const value = { isCartOpen, setIsCartOpen, cartItem, addItemToCart, cartCount, removeCartItem,clearItemFromCart,cartTotal };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};