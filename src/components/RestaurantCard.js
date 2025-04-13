import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props) =>{
    const {resData} = props;
    const {name , cuisines, avgRating, costForTwo, cloudinaryImageId} = resData?.info;

    return(
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
        </div>
    )
}

export default RestaurantCard;