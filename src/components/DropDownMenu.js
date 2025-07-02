import { useState } from "react";




const DropDownMenu = (props) =>{
   
   const {title, itemCards, isOpen, setShowIndex} = props;
   

   const handleToggle =() =>{
    setShowIndex();
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