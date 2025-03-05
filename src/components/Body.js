import RestaurantCard from "./RestaurantCard";
import { useEffect, useState  } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body=()=>{
    //Local state variable -super powerful variable
    const [ListOfRestaurant,setListOfRestaurant]=useState([]);
    const [searchText,setSearchText]=useState("");
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async ()=>{
   const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await response.json();
        console.log(json)
        //optional chaining
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    if(ListOfRestaurant.length==0){
        return <Shimmer/>
    }
   
    return ListOfRestaurant.length==0 ?(
        <Shimmer/>
    ):(
        <div className="body">
            
            <div className="filter">
                <div className="Search">
                    <input 
                     type="text" 
                    className="search-box" 
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} 
                    
                    /> 
                    <button onClick={()=>{
                        console.log(searchText);
                        //filter the restaurant cards and update the UI
                        //searchText

                    }}
                    >
                     Search
                     </button>
               </div>
                <button className="filter-btn"
                 onClick={()=>{
                    const filteredList=ListOfRestaurant.filter(
                        (res)=>res.info.avgRating > 4   );
                    setListOfRestaurant(filteredList);
                } }
                >
                    Top Rated Restaurant  </button>
            </div>
{/*         
            <div className="res-container">
                {ListOfRestaurant.map((restaurant )=>(
                //     <Link
                //     key={restaurant.data.id}
                //     to={"/restaurants/"+restaurant.info.id}>
                //   <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
                //     </Link>

                ))}
                
            </div> */}
            
            <div className="res-container">
                {ListOfRestaurant.map((restaurant )=>(
                  <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>

                ))}
                
            </div>
        </div>
    );
};
export default Body; 
 
