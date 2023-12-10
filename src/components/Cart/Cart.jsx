import React, { useContext } from 'react';
import CartItem from './CartItem';

import "./index.scss";
import CartContext from '../../contexts/CartContext';
import data from "../../db/db.json";
import { useNavigate } from 'react-router-dom';



const Cart = ({ onClose, onpage }) => {

    const navigate = useNavigate()

    const { items, increaseQuantity, decreaseQuantity, total, removeFromCart } = useContext(CartContext);

    const checkout = () => {
      onClose()
      navigate('/checkout')
    };

  return (
    <div className={onpage ? 'cart-overlay on-page' : 'cart-overlay'} >
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
        {items[0] && <p className='total'>Total: &#8358;{total}</p>}
            {onpage && <button onClick={onClose}>Close</button>}
            {items[0] && onpage && <button onClick={() => checkout()}>Checkout</button>}
      </div>
    </div>
  );
};

export default Cart;
