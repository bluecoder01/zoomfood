import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../db/db.json";
import ProductCard2 from "../../components/productcard/ProductCard2";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-regular-svg-icons";
import { faFireAlt } from "@fortawesome/free-solid-svg-icons";

const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    // Fetch restaurant data based on restaurantId
    const fetchedRestaurant = data.restaurants[restaurantId];
    setRestaurant(fetchedRestaurant);

    // Fetch menu items based on restaurantId
    const restaurantMenu = data.foods.filter(
      (food) => food.restaurantId === parseInt(restaurantId, 10)
    );
    setMenu(restaurantMenu);
  }, [restaurantId]);

  if (!restaurant) {
    return <div>Loading...</div>; // Add loading indicator or error handling as needed
  }

  const {
    restaurantName,
    description,
    aveRating,
    aveDeliveryTime,
    isTrending,
    img,
  } = restaurant;

  return (
    <div className="restaurant-page">
      <div className="restaurant-info">
        <div className="background">
          <img src={img} alt={`${restaurantName} restaurant`} />
          <div className="overlay"></div>
        </div>
        <div className="info">
          <h1>{restaurantName}</h1>
          <p className="description">{description}</p>
          <div className="ratings">
            <p><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{aveRating.toFixed(1) || "N/A"}</p>
            <p><FontAwesomeIcon icon={faClock}></FontAwesomeIcon>{aveDeliveryTime || "N/A"} mins</p>
          </div>
        </div>
        {isTrending && <p className="trending-label"><FontAwesomeIcon icon={faFireAlt}/> Trending</p>}
      </div>
      

      <div className="menu-section">
        <h2>Menu</h2>
        <ul>
          {menu.map((item, index) => (
            <ProductCard2 key={index} {...item} />
          ))}
        </ul>
      </div>

      {/* Add more sections as needed, such as reviews, location, etc. */}
    </div>
  );
};

export default RestaurantPage;
