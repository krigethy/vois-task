import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function addItemToCart(newItem) {
    setCartItems((prev) => {
      const isInCart = prev.find((item) => item.name === newItem.name);
      if (isInCart) {
        return prev.map((item) =>
          item.name === newItem.name
            ? { ...item, units: item.units + 1 }
            : item,
        );
      } else {
        return [...prev, { ...newItem, units: 1 }];
      }
    });
  }

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};
