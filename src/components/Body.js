import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body =() => {

    const [listOFRestaurant, setListOfRestaurant] = useState([]);
    const [btnName, setBtnName] = useState("Top Rated Restaurant")
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }



    return listOFRestaurant.length ===0? (<Shimmer/>) :(
        <div className="body">
            <input type="text" value ={searchText} onChange={(e)=>{
                      setSearchText(e.target.value);
            }} />
            <button 
            //Filter the restaurant
            // update the UI
            onClick={()=>{
                 const filteredRestaurant = listOFRestaurant.filter((res)=>(res.info.name.toLowerCase().includes(searchText.toLowerCase())));
                 setFilteredRestaurant(filteredRestaurant);
                }}
            >Search</button>
            <button className="filter-btn" 
            onClick={()=>{
        
                 const filteredList = listOFRestaurant.filter(
                    (res) => (res.info.avgRating>4.6)
               );
              setListOfRestaurant(filteredList);
              setFilteredRestaurant(filteredList);
              setBtnName("All Restaurant") ;
              }}>{btnName}</button>
              
            <div className="card-container">

                {filteredRestaurant.map((restaurant)=>(<RestaurantCard key ={restaurant.info.id} resData = {restaurant}/>))}
                
            </div>
        </div>
    );
}

export default Body;