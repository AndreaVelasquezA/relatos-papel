import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

import ConfirmModal from "../ui/ConfirmModal";

export default function CartDrawer({ open, onClose }) {
  const {
    cart,
    removeFromCart,
    removeAllFromCart,
    clearCart,
    addToCart,
  } = useContext(CartContext);

  const { theme } = useContext(ThemeContext);

  const [confirmClear, setConfirmClear] = useState(false);

  const isDark = theme === "dark";

  const navigate = useNavigate();

  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <>
      {open && <div style={styles.overlay} onClick={onClose} />}

      <div
        style={{
          ...styles.drawer,
          ...(open ? styles.drawerOpen : {}),
        }}
      >
        <div style={styles.header}>
          <h2 style={{ margin: 0 }}>🛒 Carrito</h2>

          <button onClick={onClose} style={styles.close}>
            ✕
          </button>
        </div>

        <div style={styles.body}>
          {cart.length === 0 && (
            <p style={styles.empty}>Tu carrito está vacío</p>
          )}

          {cart.map((item) => {
            const quantity = item.quantity || 1;

            const stock = item.stock || 0;

            const reachedStock = quantity >= stock;

            return (
              <div key={item.id} style={styles.card}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={styles.image}
                />

                <div style={styles.info}>
                  <h4 style={styles.title}>{item.title}</h4>

                  <p style={styles.author}>{item.author}</p>

                  <p style={styles.price}>
                    ${item.price.toLocaleString()}
                  </p>

                  <p style={styles.stock}>
                    Stock disponible: {stock}
                  </p>

                  <p style={styles.quantity}>
                    Cantidad: {quantity}
                  </p>

                  <p style={styles.subtotal}>
                    Subtotal: $
                    {(
                      item.price * quantity
                    ).toLocaleString()}
                  </p>

                  <div style={styles.actions}>
                    <button
                      style={styles.qtyBtn}
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      −
                    </button>

                    <button
                      style={{
                        ...styles.qtyBtn,
                        ...(reachedStock
                          ? styles.disabledBtn
                          : {}),
                      }}
                      disabled={reachedStock}
                      onClick={() => addToCart(item, 1)}
                    >
                      +
                    </button>
                  </div>

                  {reachedStock && (
                    <p style={styles.limitText}>
                      Límite de stock alcanzado
                    </p>
                  )}
                </div>

                <button
                  style={styles.removeBtn}
                  onClick={() =>
                    removeAllFromCart(item.id)
                  }
                >
                  ✕
                </button>
              </div>
            );
          })}
        </div>

        <div style={styles.footer}>
          <div style={styles.total}>
            <span>Total:</span>

            <strong>${total.toLocaleString()}</strong>
          </div>

          <button
            style={styles.clear}
            disabled={!cart.length}
            onClick={() => setConfirmClear(true)}
          >
            Vaciar carrito
          </button>

          <button
            style={styles.checkout}
            disabled={!cart.length}
            onClick={() => {
              onClose();
              navigate("/checkout");
            }}
          >
            Finalizar compra
          </button>
        </div>
      </div>

      <ConfirmModal
        open={confirmClear}
        title="¿Vaciar carrito?"
        message="Todos los libros serán eliminados del carrito."
        confirmText="Vaciar"
        cancelText="Cancelar"
        onClose={() => setConfirmClear(false)}
        onConfirm={() => {
          clearCart();
          setConfirmClear(false);
        }}
        isDark={isDark}
      />
    </>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(4px)",
    zIndex: 999,
  },

  drawer: {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%",
    maxWidth: "420px",
    background: "var(--bg-secondary)",
    transform: "translateX(100%)",
    transition: "transform 0.3s ease",
    zIndex: 1000,

    display: "flex",
    flexDirection: "column",
    borderLeft: "1px solid var(--border)",
  },

  drawerOpen: {
    transform: "translateX(0)",
  },

  header: {
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid var(--border)",
  },

  close: {
    background: "transparent",
    border: "none",
    color: "var(--text)",
    fontSize: "20px",
    cursor: "pointer",
  },

  body: {
    flex: 1,
    overflowY: "auto",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  empty: {
    textAlign: "center",
    color: "var(--text-secondary)",
    marginTop: "40px",
  },

  card: {
    display: "flex",
    gap: "12px",
    background: "var(--bg)",
    padding: "12px",
    borderRadius: "12px",
    alignItems: "flex-start",
    border: "1px solid var(--border)",
  },

  image: {
    width: "60px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "6px",
  },

  info: {
    flex: 1,
  },

  title: {
    margin: 0,
    fontSize: "14px",
    color: "var(--text)",
  },

  author: {
    fontSize: "12px",
    color: "var(--text-secondary)",
    margin: "4px 0",
  },

  price: {
    fontWeight: "bold",
    fontSize: "14px",
    color: "var(--primary)",
    marginBottom: "4px",
  },

  stock: {
    fontSize: "12px",
    color: "#22c55e",
    marginBottom: "4px",
  },

  quantity: {
    fontSize: "13px",
    color: "var(--text-secondary)",
    marginBottom: "4px",
  },

  subtotal: {
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "10px",
  },

  actions: {
    display: "flex",
    gap: "8px",
  },

  qtyBtn: {
    width: "30px",
    height: "30px",
    borderRadius: "8px",
    border: "1px solid var(--border)",
    background: "var(--bg-secondary)",
    color: "var(--text)",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },

  disabledBtn: {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  limitText: {
    marginTop: "8px",
    fontSize: "12px",
    color: "#ef4444",
    fontWeight: "600",
  },

  removeBtn: {
    background: "transparent",
    border: "none",
    color: "#f87171",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "bold",
    alignSelf: "flex-start",
  },

  footer: {
    padding: "20px",
    borderTop: "1px solid var(--border)",
    background: "var(--bg-secondary)",
  },

  total: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
    fontSize: "18px",
    color: "var(--text)",
  },

  clear: {
    width: "100%",
    padding: "12px",
    background: "transparent",
    border: "1px solid #f87171",
    borderRadius: "10px",
    color: "#f87171",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "12px",
  },

  checkout: {
    width: "100%",
    padding: "14px",
    background: "var(--primary)",
    border: "none",
    borderRadius: "10px",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
  },
};