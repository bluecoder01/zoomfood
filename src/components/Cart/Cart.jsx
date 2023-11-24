import React, { useContext } from 'react';
import CartItem from './CartItem';

import "./index.scss"
import CartContext from '../../contexts/CartContext';
import data from "../../db/db.json"



const Cart = ({ onRemove, onClose }) => {

    const { items, increaseQuantity, decreaseQuantity, total, removeFromCart } = useContext(CartContext);

    // return items.reduce((total, item) => total + data.foods[item.itemId].price[item.option] * item.quantity, 0);

  return (
    <div className="cart-overlay">
      <div className="cart">
        <h2>Shopping Cart</h2>
        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {items.map((item ,i) =>{ 
                const currentItem = data.foods[item.itemId]
            return(
              <CartItem
                key={i}
                item={currentItem}
                option = {item.option}
                onRemove={() => removeFromCart(i)}
                quantity ={item.quantity}
                increaseQuantity={()=> increaseQuantity(item.itemId, item.option, item.price)}
                decreaseQuantity={()=> decreaseQuantity(item.itemId, item.option, item.price)}
              />
            )
            })}
          </div>
        )}
        {items[0] && <p>Total: &#8358;{total}</p>}
            <button onClick={onClose}>Close</button>
            {items[0] && <button onClick={() => checkout()}>Checkout</button>}
      </div>
    </div>
  );
};

const checkout = () => {
  // Implement your checkout logic here
  alert('Checkout functionality will be implemented here!');
};

export default Cart;
