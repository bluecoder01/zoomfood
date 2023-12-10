import React from "react";
import { createContext } from "react";
import { CartProvider } from "./CartContext";
import useLocalStorage from "../hooks/useLocalStorage";

export const DeliveryLocation = createContext(null);
export const Cart = createContext({});

function AppContext({ children }) {
  const [deliveryLocation, setDeliveryLocation] = useLocalStorage('deliveryLocation', "");

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
