import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../../contexts/cart.context";


function CartIcon() {
    const {isCartOpen,setIsCartOpen} = useContext(CartContext);
    
    function toggleDropdown() {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className="cart-icon-container" onClick={toggleDropdown}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
};

export default CartIcon;