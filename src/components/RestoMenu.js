import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import {MENU_API_URL} from '../utils/Constants'

const RestoMenu = () => {
    useEffect(() => {
        fetchRestoMenu();
    }, [])
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    const fetchRestoMenu = async () => {

        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        setResInfo(json.data)
    }

    if(resInfo === null) return <Shimmer/>;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    return (
        
            <div class="menu">
                <h1>{name}</h1>
                <h4>{cuisines.join(",")}</h4>
                <h4>{costForTwoMessage}</h4>
                <h2>Menu</h2>
                <ul>
                    {itemCards.map((item =>
                    <li key={item.card.info.id}>{item.card.info.name} ~ Rs. {item.card.info.defaultPrice/100 || item.card.info.price/100  }</li>))}
                </ul>
            </div>)
    
}

export default RestoMenu