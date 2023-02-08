import './product-card.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';

function ProductCard({ product }) {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    function addProductCart() {
        addItemToCart(product);
    }
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductCart}>Add to Cart</Button>
        </div>
    );
};

export default ProductCard;