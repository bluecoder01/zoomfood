import React from "react";
import data from "../../db/db.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import { Link } from "react-router-dom";

function Nearbyrestaurants() {
  const restaurantobjs = data.restaurants.slice(0, 6);

  return (
    <section className="section nearby-restaurants">
      <div className="section-container">
        <h4 className="title">Nearby restaurants</h4>
        <div className="restaurants">
          {restaurantobjs.map((restaurant, i) => {
            return (
              <Link to="/"  key={i} className="restaurant-card">
                <div className="restaurant-wrapper">
                  <div className="restaurant-img">
                    <img src={restaurant.img} alt={restaurant.restaurantName} />
                  </div>
                  <div className="restaurant-details">
                    {restaurant.isTrending && (
                      <h5>
                        <FontAwesomeIcon icon={faFire}></FontAwesomeIcon>
                        {"  "}HOT
                      </h5>
                    )}
                    <h3>{restaurant.restaurantName}</h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Nearbyrestaurants;
