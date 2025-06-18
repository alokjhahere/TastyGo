import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnineStatus";

const Body =() => {

    const [listOFRestaurant, setListOfRestaurant] = useState([]);
    const [btnName, setBtnName] = useState("Top Rated Restaurant")
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [isTopRated, setIsTopRated] = useState(false);
    
    
    useEffect(()=>{
        fetchData();
        console.log("useEffect is called");
        
    },[])

    
    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }

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