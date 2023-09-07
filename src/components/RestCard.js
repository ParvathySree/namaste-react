import React from "react";

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
            <h4>{rating + ' stars'}</h4>
            <h4>{time}</h4>
        </div>
    )
}

export default RestaurantCard;