import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    const {clearItemFromCart, addItemToCart, removeCartItem} = useContext(CartContext);
    const { name, imageUrl, price, quantity } = cartItem;

    function handleClear() {
        clearItemFromCart(cartItem);
    }

    function handleAdd() {
        addItemToCart(cartItem);
    }

    function handleRemove() {
        removeCartItem(cartItem);
    }
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'>
                <div className='arrow' onClick={handleRemove}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={handleAdd}>
                    &#10095;
                </div></span>
            <span className='price'> {price}</span>
            <div className='remove-button' onClick={handleClear}>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;