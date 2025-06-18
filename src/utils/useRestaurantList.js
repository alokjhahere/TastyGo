import { useEffect, useState } from "react";

const useRestaurantList = () => {
   
   const [listOFRestaurant, setListOfRestaurant] = useState([]);
   const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(()=>{
        fetchData();
        console.log("useEffect is called");
        
    },[])

    
    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);

        const restaurantList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListOfRestaurant(restaurantList);
        setFilteredRestaurant(restaurantList);
        
    }
    return {
        listOFRestaurant,
        setListOfRestaurant,
        filteredRestaurant,
        setFilteredRestaurant
    }
}

export default useRestaurantList