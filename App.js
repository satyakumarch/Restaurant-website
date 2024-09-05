

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


const resobj={
    

          "info": {
          "id": "42060",
          "name": "Sharief Bhai Biryani",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/26/5cd5044e-8760-43f5-ab87-475bcd1ced08_42060.jpg",
          "locality": "Koramangala",
          "areaName": "Koramangala",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Biryani",
            "Kebabs",
            "Mughlai",
            "Arabian",
            "South Indian",
            "Rolls & Wraps",
            "Street Food",
            "Fast Food",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.2,
          "parentId": "469102",
          "avgRatingString": "4.2",
          "totalRatingsString": "51K+",
          "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 2.3,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-06 03:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Biryani.png",
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
                      "imageId": "Rxawards/_CATEGORY-Biryani.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹199",
            "discountCalloutInfo": {
              "message": "Free Delivery",
              "logoCtx": {
                "logo": "v1655895371/free_delivery_logo_hqipbo.png"
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.0",
              "ratingCount": "4.5K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-ffcd306f-f0cf-41de-85ae-7363af7e0721"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/sharief-bhai-biryani-koramangala-rest42060",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    
      };


const RestaurantCard=(props)=>{
    const {resdata}=props;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img  className="resta-logo" 
            alt="res-logo"
             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f2991ba122f8d883cd5ba0e705f86b87"/>
            <h3>{resdata.resName}</h3>
            <h4>{resdata.cuisin}</h4>
            <h4>{resdata.star}</h4>
            <h4>{resdata.time}</h4>  

        </div>
    );
};

const Body=()=>{
    return(
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                <RestaurantCard
                resName="Meghana food"
                cuisin="Biryani North indian"
                star="4.3 stars"
                time="34 minutes"
                />
                <RestaurantCard
                resName="Burger"
                cuisin="South indian food"
                star="5.3 stars"
                time="23 minutes"
                />
                

            </div>
        </div>
    )
}


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