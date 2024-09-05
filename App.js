

import React from "react";
import ReactDOM from "react-dom/client";

// logo

// Nav item
// Body
// Search
// Restaurantcontainer
//   restaurant card
//      img
//          Name of res, star rating,Cuisin,devlvery time, 
// Footer
// Link
// Address
// Contact
// react functional component
const Header =()=>{
    return(
    <div className="header">
        <div className="logo-container">
       
            <img className="logo"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTurMbiF0EWvudfRdha7BdBjT441rYD_W4Q&s"/>
        </div>
         <div className="nav-items">
           <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>cart</li>
           </ul>

         </div>

    </div>
        
    );
};


const styleCard={
    BackgroundColor:"yellow", 
};


const resobj = {
    "type": "restaurant",
    "data": {
      "info": {
        "id": "5934",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.3,
        "parentId": "166",
        "avgRatingString": "4.3",
        "totalRatingsString": "99K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-06 06:55:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green_Dot_Awards/Best_In_Veg_Burger.png",
              "description": "Delivery!"
            },
            {
              "imageId": "Rxawards/CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green_Dot_Awards/Best_In_Veg_Burger.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/CATEGORY-Burger.png"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "3.9K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/burger-king-koramangala-rest5934",
        "type": "WEBLINK"
      }
    }
  };
  


          


const RestaurantCard=(props)=>{
    const {resdata}=props;
    const priceOfTwo = Number(resdata.data.info.costForTwo.replace(/[^0-9.-]+/g,""))
    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        deliveryTime,

    }=resdata?.data;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img  className="resta-logo" 
            alt="res-logo"
             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating}star</h4>
            <h4>RS.{priceOfTwo} FOR TWO</h4>
            <h4>{deliveryTime}minutes</h4>  

        </div>
    );
};

 
const Body=()=>{
    return(
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                {resList.map((restaurant)=>(
                  <RestaurantCard key={restaurant.data.id} resdata={restaurant}/>


                ))}
                
            </div>
        </div>
    );
};


const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>); 