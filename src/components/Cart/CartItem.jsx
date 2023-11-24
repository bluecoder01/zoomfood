import React from 'react';

const CartItem = ({ increaseQuantity, decreaseQuantity, item, onRemove, option, quantity}) => {
  const { id, foodName, price, source, image, deliveryTime } = item;  



  return (
    <div className="cart-item">
      <img src={image} alt={foodName} />
      <div className="item-details">
        <h3>{foodName}</h3>
        <p>{option}</p>
        <p>{source}</p>
        <p>Price: &#8358;{price[option]}</p>
        <p>Delivery Time: {deliveryTime}</p>
        <div className="quantity-controls">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <button onClick={onRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
