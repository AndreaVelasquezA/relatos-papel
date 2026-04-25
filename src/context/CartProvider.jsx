import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // AGREGAR LIBRO
  const addToCart = (book, quantity = 1) => {
    setCart((prev) => {
      const exists = prev.find((b) => b.id === book.id);

      // si ya existe → aumentar cantidad
      if (exists) {
        return prev.map((b) =>
          b.id === book.id
            ? {
                ...b,
                quantity: (b.quantity || 1) + quantity,
              }
            : b
        );
      }

      // si no existe → agregar nuevo
      return [
        ...prev,
        {
          ...book,
          quantity,
        },
      ];
    });

    return true;
  };

  // ELIMINAR 1 UNIDAD
  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((b) =>
          b.id === id
            ? {
                ...b,
                quantity: (b.quantity || 1) - 1,
              }
            : b
        )
        .filter((b) => b.quantity > 0)
    );
  };

  // ELIMINAR COMPLETAMENTE
  const removeAllFromCart = (id) => {
    setCart((prev) => prev.filter((b) => b.id !== id));
  };

  // VACIAR CARRITO
  const clearCart = () => {
    setCart([]);
  };

  // TOTAL ITEMS
  const totalItems = cart.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  // TOTAL PRECIO
  const totalPrice = cart.reduce(
    (acc, item) =>
      acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}