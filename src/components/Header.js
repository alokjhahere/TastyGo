import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
   const [btn, setBtn] = useState("Login")
    return(
      <div className="header">
         <div className="Logo-container">
           <img className="Logo" src={LOGO_URL}/> 
         </div>
         <div className="nav-items">
             <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login-btn" onClick={()=>{
                           btn === "Login"? setBtn("Logout") : setBtn("Login");
                }}>{btn}</button>
             </ul>
         </div>
      </div>

    ) 
}

export default Header;