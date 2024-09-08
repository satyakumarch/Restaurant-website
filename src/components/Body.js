import RestaurantCard from "./RestaurantCard";
import { useState  } from "react";
import resList from "../utils/mockData";
// import resList from "../utils/mockData";

const Body=()=>{
    //Local state variable -super powerful variable
    const [ListOfRestaurant,setListOfRestaurant]=useState(resList);
    return(
        <div className="body">
            <br></br>
            <div className="filter">
                <buttton className="filter-btn"
                 onClick={()=>{
                    const filteredList=ListOfRestaurant.filter(
                        (res)=>res.info.avgRating > 4
                    );
                    setListOfRestaurant(filteredList);
                } }
                >
                    Top Rated Restaurant  </buttton>
            </div>
            <br></br>
            <div className="res-container">
                {ListOfRestaurant.map((restaurant )=>(
                  <RestaurantCard key={restaurant.info.id} resData={restaurant}/>

                ))}
                
            </div>
        </div>
    );
};
export default Body; 
 