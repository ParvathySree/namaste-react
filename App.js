import React, { useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";

const Header = () =>{
    return (
        <div className="header">
            <div className="logo">
                <img src="https://cdn-icons-png.flaticon.com/512/3027/3027212.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    
    return(
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            <RestaurantCard resData={{resName:"Coco tree", cuisine:"Indian" ,rating:"3.4" ,time:"40 minutes"}}/>
            <RestaurantCard resData={{resName:"Coco tree", cuisine:"Indian" ,rating:"3.4" ,time:"40 minutes}}/>
            </div>
    </div>
    )
}

const styleCard = {
    backgroundColor : "#f0f0f0"
}
const RestaurantCard = (props) =>{
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cexxdtjfg3l3z77zwcbg"></img>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.time}</h4>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)