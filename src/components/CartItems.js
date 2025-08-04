import { useDispatch } from "react-redux"
import { removeItem } from "../utils/cartSlice"

const CartItems = ({itemCards}) => {
    const dispatch = useDispatch()
    const handleRemoveItem = (item)=> {
        //dispatch an action
        dispatch(removeItem(item));
    }
    return (
                <div className="dropdown-list">
                  <ul>
                    
                    {itemCards.map((item, index)=>{
                         
                         const{name, price, description, defaultPrice, imageId} = item?.card?.info;
                         return(
                            <div className="menu-card" key={index}>
                                <div className="menu-details">
                                     <h2 style={{color: "#02060CBF"}}>{name}</h2>
                                     <h3>Rs.{price/100 || defaultPrice/100}</h3>
                                     <h3 style={{color: "#282c3f73"}}>{description}</h3>
                                </div>
                                <div className="menu-img">
                                    <img className="menu-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + imageId}/>
                                    <button className="remove-btn" onClick={() => handleRemoveItem(item)}>Remove-</button>
                                </div>
                            </div>
                         )
                    })} 

                  
                  </ul>
                </div>
            )
}

export default CartItems;