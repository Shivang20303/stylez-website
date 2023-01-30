import Button from "../button/button.component";
import "./cart-dropdown.styles.scss"

function CartDropdown() {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" />
            <Button>CheckOut</Button>
        </div>
    )
};

export default CartDropdown;