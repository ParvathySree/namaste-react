import React, { useEffect, useState } from "react"
import {REST_LIST} from '../utils/Constants'
import RestaurantCard from "./RestCard";

const Body = () => {

    const [restList,setRestList] = useState(REST_LIST)

    const filterResto = () => {
        const filteredResto = restList.filter(resto => (resto.rating > 4.5 ))
        setRestList(filteredResto)
    }
    
    
    
  return(
  <div className="body">
      <div className="filter-btn">
        <button onClick={()=>filterResto()}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
          {restList?.map((resto,index)=>
              <RestaurantCard key={index+resto} resData={resto}/>
          )}
          </div>
          

  </div>
  )
}

export default Body;