import { json } from "express";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {

    useEffect(()=>{
        fetchmenu();

    },[]);
    const  fetchmenu= async()=>{
        const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'

        );
        
        const json=await data.json();
        console.log(json);
        
    };
    return resInfo === null ? (
        <Shimmer />
    ):(
        <div>
            <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
            <h2>Menu</h2>
            <ul>
                <li>Govi sabji</li>
                <li>matar dal</li>
                <li>Chana somasa</li>
            </ul>
        </div>
    )
};
export default RestaurantMenu;