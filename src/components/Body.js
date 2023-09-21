import React, { useEffect, useState } from "react"
import {REST_LIST} from '../utils/Constants'
import RestaurantCard from "./RestCard";
import Shimmer from "./Shimmer";

const Body = () => {

    const [restList,setRestList] = useState([])

    const filterResto = () => {
        const filteredResto = restList.filter(resto => (resto.rating > 4.5 ))
        setRestList(filteredResto)
    }

    useEffect(()=>{
      fetchData();
    },[])
    
    const fetchData = async() =>{
      const data = await fetch( "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage- enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json();
      console.log(json)
      setRestList(json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants)
    }
  
  if(restList.length === 0){
    return(
      <Shimmer/>
    )
  }
  return(
  <div className="body">
      <div className="filter-btn">
        <button onClick={()=>filterResto()}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
          {restList?.map((resto,index)=>
              <RestaurantCard key={index+resto} resData={resto.info}/>
          )}
          </div>
          

  </div>
  )
}

export default Body;