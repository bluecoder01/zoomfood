import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCheck, faClock, faTag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./index.scss";
import CartContext from "../../contexts/CartContext";

function ProductCard({id, image, foodName, source, price, deliveryTime, restaurantId, options}) {

  const { addToCart } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(false);


  const addItem = () =>{
    addToCart(id, Object.keys(options)[0], 1, Object.values(price)[0]);
    // console.log(items)
  }

  return (
    <div className="product-card">
      <Link to={"/products/" + id} className="card-wrapper">
        <div className="img">
          <img src={image} alt="" />
        </div>
        <h5 className="food-name">{foodName}</h5>
        <Link to={"/vendors/" + restaurantId} className="source">{source}</Link>
        <div className="extra-details">
          <p className="price"><FontAwesomeIcon icon={faTag} /> &#8358;{Object.values(price)[0]}</p>
          <p className="prep-time"><FontAwesomeIcon icon={faClock} /> {deliveryTime} </p>
        </div>
      </Link>
      <div className="add-to-cart" onClick={()=> {
          if(isInCart){
            return
          }
          else{
            addItem()
            setIsInCart(true)
          }
        }}>
          {isInCart ? (
            <FontAwesomeIcon icon={faCheck} color="white"/>
          ):(
            <FontAwesomeIcon icon={faCartPlus} color="white"/>
          )}

      </div>
    </div>
  );
}

export default ProductCard;
