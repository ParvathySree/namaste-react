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
    
      const  resList = 
         [
          {
            resName: "Restaurant A",
            cuisine: "Indian",
            rating: 4.5,
            time: "30 minutes",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cexxdtjfg3l3z77zwcbg"
          },
          {
            resName: "Restaurant B",
            cuisine: "Indian",
            rating: 4.2,
            time: "45 minutes",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cexxdtjfg3l3z77zwcbg"
          },
          {
            resName: "Restaurant C",
            cuisine: "Indian",
            rating: 4.7,
            time: "1 hour",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cexxdtjfg3l3z77zwcbg"
          },
          {
            resName: "Restaurant D",
            cuisine: "Indian",
            rating: 4.0,
            time: "50 minutes",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cexxdtjfg3l3z77zwcbg"

          },
          {
            resName: "Restaurant E",
            cuisine: "Indian",
            rating: 4.8,
            time: "35 minutes",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cexxdtjfg3l3z77zwcbg"
          },
          {
            resName: "Restaurant F",
            cuisine: "Indian",
            rating: 4.3,
            time: "55 minutes",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cexxdtjfg3l3z77zwcbg"
          },
          {
            resName: "Restaurant G",
            cuisine: "Indian",
            rating: 4.6,
            time: "40 minutes",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cexxdtjfg3l3z77zwcbg"

          },
          {
            resName: "Restaurant H",
            cuisine: "Indian",
            rating: 4.1,
            time: "1 hour 15 minutes",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cexxdtjfg3l3z77zwcbg"

          },
          {
            resName: "Restaurant I",
            cuisine: "Indian",
            rating: 4.9,
            time: "1 hour 5 minutes",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cexxdtjfg3l3z77zwcbg"

          },
          {
            resName: "Restaurant J",
            cuisine: "Indian",
            rating: 4.4,
            time: "50 minutes",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cexxdtjfg3l3z77zwcbg"

          },
          {
            resName: "Restaurant K",
            cuisine: "Indian",
            rating: 4.2,
            time: "45 minutes",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cexxdtjfg3l3z77zwcbg"

          },
          {
            resName: "Restaurant L",
            cuisine: "Indian",
            rating: 4.7,
            time: "1 hour",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cexxdtjfg3l3z77zwcbg"

          },
          {
            resName: "Restaurant M",
            cuisine: "Indian",
            rating: 4.0,
            time: "50 minutes",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cexxdtjfg3l3z77zwcbg"

          },
          {
            resName: "Restaurant N",
            cuisine: "Indian",
            rating: 4.8,
            time: "35 minutes",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cexxdtjfg3l3z77zwcbg"

          },
          {
            resName: "Restaurant O",
            cuisine: "Indian",
            rating: 4.3,
            time: "55 minutes",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cexxdtjfg3l3z77zwcbg"

          }
        ]
      
      
    return(
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            {resList.map((resto,index)=>
                <RestaurantCard key={index+resto} resData={resto}/>
            )}
            </div>
            

    </div>
    )
}

const styleCard = {
    backgroundColor : "#f0f0f0"
}
const RestaurantCard = (props) =>{
    const {resData} = props;
    const { resName, cuisine, rating, time, image } = resData;

    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src={image}></img>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{time}</h4>
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