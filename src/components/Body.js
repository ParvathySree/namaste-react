import React, { useEffect, useState } from "react"
import {REST_LIST} from '../utils/Constants'
import RestaurantCard from "./RestCard";
import Shimmer from "./Shimmer";

const Body = () => {

    const [restList,setRestList] = useState([])
    const [searchKey,setSearchKey] = useState("")
    const [filteredRest,setFilteredRest] = useState([])

    const filterResto = () => {
      console.log(restList)
        const filteredResto = restList.filter(resto => (resto.info.avgRating > 4 ))
        setFilteredRest(filteredResto)
    }

    useEffect(()=>{
      fetchData();
    },[])
    
    const fetchData = async() =>{
      const data = await fetch( "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage- enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json();
      setRestList(json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants)
      setFilteredRest(restList)
    }

    const handleSearch = () =>{
      const searchResult = restList.filter(resto => (resto.info.name.toLowerCase().includes(searchKey) ))
      setFilteredRest(searchResult);
      
    }
  
  if(restList.length === 0){
    return(
      <Shimmer/>
    )
  }
  return(
  <div className="body">
      <div className="filter">
        <div className="search">
        <input value={searchKey} onChange={(e)=>setSearchKey(e.target.value)}></input>
        <button onClick={()=>handleSearch()}>Search</button>
        </div>
        <button className="filter-btn" onClick={()=>filterResto()}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
          {filteredRest?.map((resto,index)=>
              <RestaurantCard key={index+resto} resData={resto.info}/>
          )}
          </div>
          

  </div>
  )
}

export default Body;