import { useEffect, useState } from "react";
import { RES_LIST_API } from "./constants";

const useRestaurantList = () => {
   
   const [listOFRestaurant, setListOfRestaurant] = useState([]);
   const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(()=>{
        fetchData();
        console.log("useEffect is called");
        
    },[])

    
    const fetchData = async() =>{
        const data = await fetch(RES_LIST_API)

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