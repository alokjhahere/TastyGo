import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
   const [btn, setBtn] = useState("Login")
   const onlineStatus = useOnlineStatus();
   const data = useContext(UserContext);
   const cartItems = useSelector((store)=>store.cart.items);
   console.log(cartItems);
   
   
    return(
      <div className="header">
         <div className="Logo-container">
           <img className="Logo" src={LOGO_URL}/> 
         </div>
         <div className="nav-items">
             <ul>
                <li className="nav-link">{onlineStatus? "🟢" : "🔴"}</li>
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/contact" className="nav-link">Contact</Link></li>
                <li><Link to="/cart" className="nav-link">Cart({cartItems.length})</Link></li>
                <li><Link to="/grocery" className="nav-link">Grocery</Link></li>
                <button className="login-btn" onClick={()=>{
                           btn === "Login"? setBtn("Logout") : setBtn("Login");
                }}>{btn}</button>
                <li><Link to="/" className="nav-link">{data.loggedInUser}</Link></li>
             </ul>
         </div>
      </div>

    ) 
}

export default Header;