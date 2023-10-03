import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = () =>{

    const [btnName,setBtnName] = useState("Login")
    return (
        <div className="header">
            <div className="logo">
                <img src="https://cdn-icons-png.flaticon.com/512/3027/3027212.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button onClick={()=>{btnName==="Login"?setBtnName("LogOut"):setBtnName("Login")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;