import { useState } from "react";




const DropDownMenu = (props) =>{
   
   const {title, itemCards} = props;
   const [isOpen, setIsOpen] = useState(true);

   const handleToggle =() =>{
    if(isOpen) setIsOpen(false);
    else setIsOpen(true);
}

    
    return(
        <div className="dropdown-container">
            <div className="menu-header">
                <h4 className="title">{title}</h4>
                <button onClick={handleToggle} className="dropdown-toggle">
                    {isOpen?'▲' : '▼'}
                </button>
            </div>

            {isOpen && (
                <div className="dropdown-list">
                  <ul>
                    
                    {itemCards.map((item, index)=>{
                         
                         const{name, price, description} = item?.card?.info;
                         return(
                            <div className="menu-card" key={index}>
                                <div className="menu-details">
                                     <h2 style={{color: "#02060CBF"}}>{name}</h2>
                                     <h3>Rs.{price}</h3>
                                     <h3 style={{color: "#282c3f73"}}>{description}</h3>
                                </div>
                                <div className="menu-img">
                                     <img className="menu-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/17/874f7ac0-dd89-4e4f-a350-1efe4e9b26d5_342d05b6-0bac-41a5-8f14-258f954a0d31.jpg"/>
                                </div>
                            </div>
                         )
                    })} 
                  </ul>
                </div>
            )}
        </div>
    )
}

export default DropDownMenu;