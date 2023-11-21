import React from 'react'
import LocationBox from './LocationBox'
import "./index.scss"
import data from "../../db/db.json"
import VendorCategory from './VendorCategory';

function Vendors() {

  const under20 = data.restaurants.filter((restaurant) => {
    return restaurant.aveDeliveryTime < 20 ;
  });

  const trending = data.restaurants.filter((restaurant) => {
    return restaurant.isTrending === true ;
  }); 

  const more = data.restaurants.filter((restaurant) => {
    return trending.indexOf(restaurant) === -1;
  }); 

  return (
    <div className='vendors'>
        <LocationBox />
        <VendorCategory vendors={trending} category={"popular"} categoryName={"Popular Vendors"}/>
        <VendorCategory vendors={under20} category={"under20"} categoryName={"Delivery under 20 minutes"}/>
        <VendorCategory vendors={more} category={"more-vendors"} categoryName={"More Vendors"}/>
    </div>
  )
}

export default Vendors