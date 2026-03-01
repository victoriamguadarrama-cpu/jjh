import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("opc-cart");
    return saved ? JSON.parse(saved) : {};
  });
  const [menuSelections, setMenuSelections] = useState({});

  useEffect(() => {
    localStorage.setItem("opc-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product, size, color) {
    const key = `${product.id}-${size}-${color}`;
    setCartItems((prev) => ({
      ...prev,
      [key]: { product, size, color, quantity: (prev[key]?.quantity || 0) + 1 },
    }));
  }

  function removeFromCart(key) {
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
  }

  function clearCart() {
    setCartItems({});
  }

  function getCartTotal() {
    return Object.values(cartItems).reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );
  }

  function getCartCount() {
    return Object.values(cartItems).reduce(
      (sum, item) => sum + item.quantity,
      0,
    );
  }

  function toggleMenuSelection(item) {
    setMenuSelections((prev) => {
      const updated = { ...prev };
      if (updated[item.id]) {
        delete updated[item.id];
      } else {
        updated[item.id] = item;
      }
      return updated;
    });
  }

  function getMenuTotal() {
    return Object.values(menuSelections).reduce(
      (sum, item) => sum + item.price,
      0,
    );
  }

  function getMenuSelectionsByCategory(category) {
    return Object.values(menuSelections).filter((item) =>
      item.id.startsWith(category),
    );
  }

  function clearMenuSelections() {
    setMenuSelections({});
  }

  const value = {
    cartItems,
    menuSelections,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartCount,
    toggleMenuSelection,
    getMenuTotal,
    getMenuSelectionsByCategory,
    clearMenuSelections,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
