import React from 'react'
import data from "../../db/db.json"

function Nearbyrestaurants() {

  const restaurantobjs = data.locations;

  return (
    <section className='section nearby-restaurants'>
      <div className="section-container">
      <h4>Nearby restaurants</h4>
      <div className="restaurants">
         {restaurantobjs.map((restaurant, i) => {
          return <p key={i} className="restaurant">{restaurant.locationName}</p>
        })}
      </div>
      </div>
    </section>
  )
}

export default Nearbyrestaurants