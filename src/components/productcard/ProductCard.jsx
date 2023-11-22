import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faTag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./index.scss";

function ProductCard({id, image, foodName, source, price, deliveryTime, restaurantId }) {
  return (
    <Link to={"/products/" + id} className="product-card">
      <div className="card-wrapper">
        <div className="img">
          <img src={image} alt="" />
        </div>
        <h5 className="food-name">{foodName}</h5>
        <Link to={"/vendors/" + restaurantId} className="source">{source}</Link>
        <div className="extra-details">
          <p className="price"><FontAwesomeIcon icon={faTag} /> &#8358;{Object.values(price)[0]}</p>
          <p className="prep-time"><FontAwesomeIcon icon={faClock} /> {deliveryTime} </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
