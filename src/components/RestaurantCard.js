import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard =(props) =>{
    const {resData} = props;
    const {name , cuisines, avgRating, costForTwo, cloudinaryImageId} = resData?.info;
    const {loggedInUser} = useContext(UserContext);

    return(
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h5 className="multi-line-truncate">{cuisines.join(", ")}</h5>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
            <h5>{loggedInUser}</h5>
        </div>
    )
}

//Higher order component, Promoted restaurant Feature
//contract of the component :
//input = RestaurantCard, Output = RestaurantCardPromoted


export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="promoted-container">
        <label className="promoted-label">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};



export default RestaurantCard;