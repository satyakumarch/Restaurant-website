import {LOGO_URL} from "../utils/constants";
import { useState,useEffect } from "react";


// if no dependencies array=>useeffect called every render
//if useEffect is calld empty=[]=> useEffect is called on initital rendering(just once);
//if dependencies array is btnNameReact=>Everytime btnNameReact is updated
//if dependencies array is [btnNameReact,searchText]=>Everytime btnNameReact or searchText is updated

//useState = is used to create a local state variable inside a functional components
//useEffect = is used to perform side effects in a functional component
//useEffect is called everytime the component is rendered
//useEffect is called after the component is rendered


 
const Header =()=>{
 const [btnNameReact,setBtnNameReact]=useState("Login");
 console.log("header rendered");

//  useEffect(()=>{
//     console.log("useeffect called");
//  });
useEffect(()=>{
    console.log("useeffect called");
},[]);



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
