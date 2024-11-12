import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";


const Restaurant=()=>{
    const [resInfo,setresInfo]=useState([null]);
    useEffect(()=>{
        fetchmenu();

    },[]);

    const fetchmenu=async()=>{
        const data=await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=234875&submitAction=ENTER");
        const json=await data.json();
        console.log(json);
    
    };
    const {name,coisines,costForTwoMessage}=
    resInfo?.cards[0]?.cards?.cards?.info;

    return(
        <div>
            <h1>Fruits</h1>
            <ul>
                <li>Apple</li>
                <li>Orange</li>
                <li>Banana</li>
                <li>Guava</li>
                <li>Watermelon</li>
            </ul>
        </div>
    )
};
export default Restaurant;
