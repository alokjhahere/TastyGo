import ItemList from "./ItemList"
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import CartItems from "./CartItems";

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        //dispatch an action
        dispatch(clearCart());
    }
    
    return(
        <div className="cart-container">
            <h1>Cart</h1>
            <div>
                <CartItems itemCards={cartItems}/>
            </div>
            <button className="clear-btn" onClick={handleClearCart}>Clear cart</button>
        </div>
    )
}

export default Cart