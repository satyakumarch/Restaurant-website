import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body=()=>{
    return(
        <div className="body">
            <div className="filter">
                <buttton className="filter-btn">Top rated rasturant</buttton>
            </div>
            <div className="res-container">
                {resList.map((restaurant )=>(
                  <RestaurantCard key={restaurant} resData={restaurant}/>

                ))}
                
            </div>
        </div>
    );
};
export default Body; 
 