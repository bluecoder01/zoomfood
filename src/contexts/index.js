import React from "react";
import { useState, createContext } from "react";

export const DeliveryLocation = createContext(null);
export const Cart = createContext({});

function AppContext({ children }) {
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [cart, setCart] = useState({});

  return (
    <DeliveryLocation.Provider
      value={{ deliveryLocation, setDeliveryLocation }}
    >
      <Cart.Provider value={{cart, setCart}} >{children}</Cart.Provider>
    </DeliveryLocation.Provider>
  );
}

export default AppContext;
