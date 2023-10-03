import React from "react";

const styleCard = {
    backgroundColor : "#f0f0f0"
}

const imageLink = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
const RestaurantCard = (props) =>{
    const {resData} = props;
    // const { resName, cuisine, rating, time, image } = resData;
    const { name, avgRating, cloudinaryImageId, cuisines } = resData;


    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src={imageLink + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines[0]}</h4>
            <h4>{avgRating + ' stars'}</h4>
            {/* <h4>{time}</h4> */}
        </div>
    )
}

export default RestaurantCard;