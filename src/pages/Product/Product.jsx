import React, { useState } from "react";
import data from "../../db/db.json";
import { useParams } from "react-router-dom";
import "./index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

function Product() {
    const { id } = useParams()
  const product = data.foods[id];
  const [selectedOption, setSelectedOption] = useState(
    Object.keys(product.options)[0]
  );

  const optionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="product-preview">
      <div className="section-container">
        <div className="details">
          <h1 className="product-name">{product.foodName}</h1>
          <h3 className="vendor">{product.source}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maxime
            distinctio labore quam repellat facilis harum, doloribus quaerat
            possimus impedit.
          </p>

          <form className="options">
            {Object.keys(product.options).map((option, i) => {
              return (
                <div className="options-toggle" key={i}>
                  <label>
                    {i === 0 ? (
                      <input
                        defaultChecked
                        type="radio"
                        name="options"
                        value={option}
                        onChange={optionChange}
                      />
                    ) : (
                      <input
                        type="radio"
                        name="options"
                        value={option}
                        checked={selectedOption === option}
                        onChange={optionChange}
                      />
                    )}
                    {option}
                  </label>
                </div>
              );
            })}
          </form>

          <div className="extra-details">
            <p className="delivery-time"> <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>{product.deliveryTime}</p>
            <p className="price">&#8358;{product.price[selectedOption]}</p>
          </div>
          <button> <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> Add to Cart</button>
          <button><FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon> Buy Now</button>
        </div>
        <img src={product.image} alt="" />
      </div>
    </div>
  );
}

export default Product;
