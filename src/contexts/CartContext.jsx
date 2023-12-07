import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useLocalStorage('cartItems', []);
  const [total, setTotal] = useLocalStorage('cartTotal', 0);



  const addToCart = (itemId, option, quantity, price) => {
    const existingItem = items.find(
      (item) => item.itemId === itemId && item.option === option
    );

    if (existingItem) {
        setItems((prevState) =>
        prevState.map((item) =>
          item.itemId === itemId && item.option === option
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      )
      setTotal(total + existingItem.price * existingItem.quantity);
    } else {
        // setTotal(total + price)
      setItems((prevState) => [...prevState, { itemId, option, quantity, price }]);
    }

    setShowSuccessModal(true);

  };

  const removeFromCart = (i)=>{

      var newItems = items.slice(0,i).concat(items.slice(i+1))
      setItems(newItems)
  }

  const increaseQuantity = (itemId, option, price) => {
    setItems(prevState =>
      prevState.map(item =>
        item.itemId === itemId && item.option === option && item.quantity < 5
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
  };
  
  const decreaseQuantity = (itemId, option, price) => {

    setItems(prevState => 
      prevState.map(item =>
        item.itemId === itemId && item.option === option && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ));
  };

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify(items));

    let sum = 0;
    for( var i = 0; i < items.length; i++){
      sum += (items[i].price * items[i].quantity)
    }
    setTotal(sum)

    if (showSuccessModal) {
      const timer = setTimeout(() => {
        setShowSuccessModal(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  },[items, showSuccessModal, total, setTotal])
  
  
  return (
    <CartContext.Provider value={{ items, addToCart, increaseQuantity, decreaseQuantity, total, setTotal, showSuccessModal, setShowSuccessModal, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
