import {LOGO_URL} from "../utils/constants";
import { useState,useEffect } from "react";
 
const Header =()=>{
 const [btnNameReact,setBtnNameReact]=useState("Login");
 console.log("header rendered");

//  useEffect(()=>{
//     console.log("useeffect called");
//  });
useEffect(()=>{
    console.log("useeffect called");
});



    return(
    <div className="header">
        <div className="logo-container">
       
            <img className="logo" src={LOGO_URL}/>
        </div>
         <div className="nav-items">
           <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>cart</li>
            <button 
            className="Login"
            onClick={()=>{ btnNameReact=="Login" ?
                 setBtnNameReact("Logout") 
                 :
                 setBtnNameReact("Login");
            }}
            >
                {btnNameReact}
            </button>
            
           </ul>

         </div>

    </div>
        
    );
};
export default Header;
