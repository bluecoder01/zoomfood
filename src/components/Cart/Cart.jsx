import React, { useContext } from 'react';
import CartItem from './CartItem';

import "./index.scss"
import CartContext from '../../contexts/CartContext';
import data from "../../db/db.json"



const Cart = ({ onRemove, onQuantityChange, onClose }) => {

    const { items, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);


    // return items.reduce((total, item) => total + data.foods[item.itemId].price[item.option] * item.quantity, 0);

  return (
    <div className="cart-overlay">
      <div className="cart">
        <h2>Shopping Cart</h2>
        {items.length === 0 ? (
          <p>Your cart is empty :|</p>
        ) : (
          <div>
            {items.map((item) =>{ 
                const currentItem = data.foods[item.itemId]
            return(
              <CartItem
                key={currentItem.id}
                item={currentItem}
                option = {item.option}
                onRemove={onRemove}
                quantity ={item.quantity}
                increaseQuantity={()=> increaseQuantity(item.itemId, item.option, item.price)}
                decreaseQuantity={()=> decreaseQuantity(item.itemId, item.option, item.price)}
              />
            )
            })}
          </div>
        )}
        <p>Total: &#8358;{total}</p>
            <button onClick={onClose}>Close Cart</button>
            <button onClick={() => checkout()}>Checkout</button>
      </div>
    </div>
  );
};

const checkout = () => {
  // Implement your checkout logic here
  alert('Checkout functionality will be implemented here!');
};

export default Cart;
