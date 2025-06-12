import { useEffect, useState } from "react";
import DropDownMenu from "./DropDownMenu";
import { RES_IMG } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    useEffect(() =>{
        fetchData();
    },[]);

    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=" + resId);
        const json = await data.json();
        setResInfo(json.data);
        
    }
    
    const {name, costForTwoMessage, cloudinaryImageId, avgRating, cuisines, areaName} = resInfo?.cards[2]?.card?.card?.info || {};
    const cardArray = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];


    console.log(cardArray);

    return (resInfo===null)?(<Shimmer/>):(
        
        <div className="menu-container">
            <div className="res-details">
                <div className="res-img">
                    <img className="res-image" src={RES_IMG + cloudinaryImageId}/>
                </div>
                <div className="res-info">
                     <h1>{name}</h1>
                     <p>{cuisines +" . "+ costForTwoMessage}</p>
                     <h3>{avgRating} . {areaName}</h3>
                </div>
            </div>
            <div className="offers">

            </div>
            <div className="menu-items">
                
                {cardArray.map((card, index)=>{
                      const title = card?.card?.card?.title;
                      const itemCards = card?.card?.card?.itemCards;
                      if(!title) return null;
                      if(!itemCards) return null;
                      return(
                        <div key={index} className="menu">
                            <DropDownMenu title = {title} itemCards = {itemCards}/>
                        </div>
                      )
                })}

            </div>
        </div>
    );
};

export default RestaurantMenu;