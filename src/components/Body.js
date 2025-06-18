import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body =() => {

    
    const [btnName, setBtnName] = useState("Top Rated Restaurant")
    const [searchText, setSearchText] = useState("");
    const [isTopRated, setIsTopRated] = useState(false);

    //Custom Hook for fetching the body Data
    const {listOFRestaurant,
        setListOfRestaurant,
        filteredRestaurant,
        setFilteredRestaurant} = useRestaurantList();
    

    const handleToggle = () =>{
        if(isTopRated){
            setBtnName("Top Rated Restaurants");
            setFilteredRestaurant(listOFRestaurant);
            setIsTopRated(false);
        }else{
            const filteredList = listOFRestaurant.filter(
                    (res) => (res.info.avgRating>4.4)
               );
              setFilteredRestaurant(filteredList);
              setBtnName("All Restaurant") ;
              setIsTopRated(true);
        }
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus===false) return <h1>Please check your Internet Connection</h1>

    return listOFRestaurant.length ===0? (<Shimmer/>) :(
        <div className="body">
            <div className="search-div">
                   <input className="search-input" type="text" value ={searchText} placeholder="Search for Restaurants and Food" onChange={(e)=>{
                      setSearchText(e.target.value); 
                 }} />
                <button className="search-btn"
                //Filter the restaurant
                // update the UI
                onClick={()=>{
                 const filteredRestaurant = listOFRestaurant.filter((res)=>(res.info.name.toLowerCase().includes(searchText.toLowerCase())));
                 setFilteredRestaurant(filteredRestaurant);
                
                  }}
               >Search</button>
            </div>
            
            <button className="filter-btn" 
            onClick={handleToggle}>{btnName}</button>
              
            <div className="card-container">

                {filteredRestaurant.map((restaurant)=>(
                    <Link className="card"  to={"/restaurants/"+ restaurant.info.id} key ={restaurant.info.id}><RestaurantCard  resData = {restaurant}/></Link>))}
                
            </div>
        </div>
    );
}

export default Body;