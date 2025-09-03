
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const updateQuantity = (cartId, quantity) => {
    setCart(cart.map(item => item.cartId === cartId ? { ...item, quantity } : item));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
