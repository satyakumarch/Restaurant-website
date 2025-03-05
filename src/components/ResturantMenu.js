import {useState, useEffect } from "react";//useEffect is a hook that allows you to perform side effects in your functional components
import Shimmer from "./Shimmer";//Shimmer is a loading effect that is used to show the user that the data is being loaded
import { useParams } from "react-router-dom";//useParams is a hook that allows you to access the URL parameters from a current route
import { MENU_API } from "../utils/constants";//MENU_API is a constant that stores the URL of the API


const RestaurantMenu = () => {//RestaurantMenu is a functional component
    const [resInfo,setResInfo]=useState(null);

    const {resId}=useParams();//useParams is a hook that allows you to access the URL parameters from a current route

    useEffect(()=>{//useEffect is a hook that allows you to perform side effects in your functional components
        fetchMenu();//fetchMenu is a function that is called when the component is rendered

    },[]);

    // const  fetchMenu= async()=>{
        // const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        // const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resId}`);
        
        const fetchMenu=async()=>{
        const data=await fetch(MENU_API+resId);

        const json=await data.json();
        console.log(json);
        setResInfo(json.data); 
    };

   if( resInfo === null)  return  <Shimmer />;
    

    const {name,cuisines,costForTwo}=
    resInfo?.cards[2]?.card?.card?.info;

     const {itemCards}=
     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
     console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(",")}-{costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=>(
                    <li key={item.card.info.id}>
                        {item.card.info.name}-{"Rs."}
                        {item.card.info.price/100} ||  {item.card.info.defaultPrice/100}
                        </li>
                ))}
            </ul>
        </div>
    )
};
export default RestaurantMenu;
// //30  


// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";

// const RestaurantMenu = () => {
//     const [resInfo, setResInfo] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetchMenu();
//     }, []);

//     const fetchMenu = async () => {
//         try {
//             // Use a specific restaurant ID
//             const data = await fetch(
//                 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=393840'
//             );
            
//             const json = await data.json();
//             console.log('Full API Response:', json);

//             if (json?.data) {
//                 setResInfo(json.data);
//             } else {
//                 setError('No data received from API');
//             }
//         } catch (err) {
//             console.error('Fetch Error:', err);
//             setError(err.message);
//         }
//     };

//     // Show error if exists
//     if (error) return <div className="error-container">{error}</div>;

//     // Show shimmer while loading
//     if (!resInfo) return <Shimmer />;

//     // Safely extract restaurant info
//     const restaurantInfo = resInfo?.cards?.find(
//         card => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
//     )?.card?.card?.info;

//     // Safely extract menu items
//     const menuSection = resInfo?.cards?.find(
//         card => card?.groupedCard?.cardGroupMap?.REGULAR
//     )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

//     const itemCards = menuSection?.find(
//         section => section?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//     )?.card?.card?.itemCards || [];

//     return (
//         <div className="restaurant-menu-container">
//             {/* Ensure this sits below the navbar */}
//             <div className="restaurant-menu-content">
//                 {/* Restaurant Header */}
//                 <div className="restaurant-header">
//                     {restaurantInfo ? (
//                         <>
//                             <h1 className="restaurant-name">{restaurantInfo.name}</h1>
//                             <div className="restaurant-details">
//                                 <p className="cuisines">
//                                     {restaurantInfo.cuisines?.join(", ")}
//                                 </p>
//                                 <p className="cost-for-two">
//                                     ₹{restaurantInfo.costForTwo} for two
//                                 </p>
//                                 <p className="restaurant-rating">
//                                     {restaurantInfo.avgRating} ★
//                                 </p>
//                             </div>
//                         </>
//                     ) : (
//                         <p>Restaurant information not available</p>
//                     )}
//                 </div>

//                 {/* Menu Items */}
//                 <div className="menu-items-container">
//                     <h2>Menu</h2>
//                     <ul className="menu-items-list">
//                         {itemCards.map((item, index) => (
//                             <li key={index} className="menu-item">
//                                 <div className="item-details">
//                                     <span className="item-name">
//                                         {item?.card?.info?.name || 'Unknown Item'}
//                                     </span>
//                                     <span className="item-price">
//                                         ₹{(item?.card?.info?.price || 0) / 100}
//                                     </span>
//                                 </div>
//                                 <p className="item-description">
//                                     {item?.card?.info?.description || ''}
//                                 </p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RestaurantMenu;