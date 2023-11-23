import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0)

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
        setTotal(total + price)
      setItems((prevState) => [...prevState, { itemId, option, quantity, price }]);
    }
  };

  const increaseQuantity = (itemId, option, price) => {
    setItems(prevState =>
      prevState.map(item =>
        item.itemId === itemId && item.option === option
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
    if(price !== 0) {
        setTotal(total + price);
    } else{
        return
    }
  };
  
  const decreaseQuantity = (itemId, option, price) => {
    setItems(prevState =>
      prevState.map(item =>
        item.itemId === itemId && item.option === option && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    if(total - price !== 0) {
        setTotal(total - price);
    } else{
        return
    }
  };
  

  return (
    <CartContext.Provider value={{ items, addToCart, increaseQuantity, decreaseQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
