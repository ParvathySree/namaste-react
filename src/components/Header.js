import React, { useState } from 'react'


const Header = () =>{

    const [btnName,setBtnName] = useState("Login")
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
                    <button onClick={()=>{btnName==="Login"?setBtnName("LogOut"):setBtnName("Login")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;