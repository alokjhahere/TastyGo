import DropDownMenu from "./DropDownMenu";
import { RES_IMG } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{
    
    const {resId} = useParams();

    //Custom Hook for fetching the Data
    const resInfo = useRestaurantMenu(resId);
    
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