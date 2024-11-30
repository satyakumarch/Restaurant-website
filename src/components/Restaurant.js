import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";


const Restaurant=()=>{
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchmenu();

    },[]);

    const fetchmenu=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=608277&catalog_qa=undefined&submitAction=ENTER");

        const json=await data.json();
        // console.log(json);
        console.log("This is restaurant Menu");
        console.log(json);
        setResInfo(json);
    };
    // const {name,coisines,costForTwoMessage}=
    // resInfo?.cards?.cards?.info;
    const RestMenu = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log("This is menu")
    console.log(RestMenu);


    return resInfo==null?(
        <Shimmer/>):(
        <div>
            <h1>restaurant</h1>
            {RestMenu==undefined?"Loading": RestMenu.map((menu)=>(
                <>
                 <h1>{menu?.card?.info?.name}</h1>
                 <h1>{menu?.card?.info?.description}</h1></>

            ))};
        </div>
    )
};
export default Restaurant;
