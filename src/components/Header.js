import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
   const [btn, setBtn] = useState("Login")
   const onlineStatus = useOnlineStatus();

   
    return(
      <div className="header">
         <div className="Logo-container">
           <img className="Logo" src={LOGO_URL}/> 
         </div>
         <div className="nav-items">
             <ul>
                <li className="nav-link">{onlineStatus? "Online 🟢" : "Offline 🔴"}</li>
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/contact" className="nav-link">Contact</Link></li>
                <li><Link to="/" className="nav-link">Cart</Link></li>
                <li><Link to="/grocery" className="nav-link">Grocery</Link></li>
                <button className="login-btn" onClick={()=>{
                           btn === "Login"? setBtn("Logout") : setBtn("Login");
                }}>{btn}</button>
             </ul>
         </div>
      </div>

    ) 
}

export default Header;