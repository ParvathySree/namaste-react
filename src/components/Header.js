import React from 'react'


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

export default Header;