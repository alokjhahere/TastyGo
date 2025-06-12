import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props) =>{
    const {resData} = props;
    const {name , cuisines, avgRating, costForTwo, cloudinaryImageId} = resData?.info;

    return(
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h5 className="multi-line-truncate">{cuisines.join(", ")}</h5>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
        </div>
    )
}

export default RestaurantCard;