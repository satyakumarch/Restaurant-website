

import React from "react";
import ReactDOM from "react-dom/client";


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


const resList={
    
        "restaurants": [
          {
            "id": "93741",
            "name": "Subway",
            "locality": "The Nexus Mall",
            "image": "https://cloudinary.com/images/vendor/2024/8/2/877b99a7-fdcc-40c6-a19a-684a746243aa_93741.jpg",
            "avgRating": "4.6",
            "totalRatings": "2.7K+",
            "delivery": {
              "time": "20-25 mins",
              "lastMileTravel": "1.3 km"
            },
            "availability": {
              "isOpen": true,
              "nextCloseTime": "2024-09-06 00:00:00"
            },
            "badges": {
              "gourmet": true,
              "pureVeg": true
            },
            "discount": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL"
            },
            "externalRatings": {
              "source": "Google",
              "rating": "3.4",
              "ratingCount": "95"
            },
            "links": {
              "cta": "https://www.swiggy.com/city/bangalore/cheesecake-and-co-koramangala-rest534235"
            }
          },
          {
            "id": "671928",
            "name": "KFC",
            "locality": "7th Block, Koramangala",
            "image": "https://cloudinary.com/images/vendor/2024/4/17/510f05e2-a9e7-49fe-8ab3-ea8c2eb8a5ae_671928.JPG",
            "avgRating": "4.3",
            "totalRatings": "2.8K+",
            "delivery": {
              "time": "30-35 mins",
              "lastMileTravel": "1.2 km"
            },
            "availability": {
              "isOpen": true,
              "nextCloseTime": "2024-09-06 02:00:00"
            },
            "discount": {
              "header": "ITEMS",
              "subHeader": "AT ₹179"
            },
            "links": {
              "cta": "https://www.swiggy.com/city/bangalore/kfc-7th-block-koramangala-rest671928"
            }
          },
          {
            "id": "10576",
            "name": "Pizza Hut",
            "locality": "6th Block, Koramangala",
            "image": "https://cloudinary.com/images/vendor/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
            "avgRating": "4.2",
            "totalRatings": "20K+",
            "delivery": {
              "time": "30-35 mins",
              "lastMileTravel": "0.9 km"
            },
            "availability": {
              "isOpen": true,
              "nextCloseTime": "2024-09-06 04:00:00"
            },
            "discount": {
              "header": "ITEMS",
              "subHeader": "AT ₹199"
            },
            "externalRatings": {
              "source": "Google",
              "rating": "4.4",
              "ratingCount": "2.0K+"
            },
            "links": {
              "cta": "https://www.swiggy.com/city/bangalore/pizza-hut-6th-block-koramangala-rest10576"
            }
          }
        ]
      }
      

const Body=()=>{
    return(
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                {resList.map((restaurant )=>(
                  <restaurant   key={restaurant.data.id} resdata={restaurant}/>

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