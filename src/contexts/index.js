import React from "react";
import { useState, createContext } from "react";
import { CartProvider } from "./CartContext";

export const DeliveryLocation = createContext(null);
export const Cart = createContext({});

function AppContext({ children }) {
  const [deliveryLocation, setDeliveryLocation] = useState("");

  return (
    <DeliveryLocation.Provider
      value={{ deliveryLocation, setDeliveryLocation }}
    >
      <CartProvider>
        {children}
      </CartProvider>
      
      
    </DeliveryLocation.Provider>
  );
}

export default AppContext;
