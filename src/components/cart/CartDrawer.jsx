import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, X } from "lucide-react";

export default function CartDrawer({ open, onClose }) {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      {/* OVERLAY */}
      {open && <div style={styles.overlay} onClick={onClose} />}

      {/* DRAWER */}
      <div
        style={{
          ...styles.drawer,
          ...(open ? styles.drawerOpen : {}),
        }}>
        {/* HEADER */}
        <div style={styles.header}>
          <h2
            style={{
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
            <ShoppingCart size={22} aria-hidden />
            <span>Carrito</span>
          </h2>
          <button onClick={onClose} style={styles.close}>
            <X size={22} aria-hidden />
          </button>
        </div>

        {/* BODY */}
        <div style={styles.body}>
          {cart.length === 0 && (
            <p style={styles.empty}>Tu carrito está vacío</p>
          )}

          {cart.map((item) => (
            <div key={item.id} style={styles.card}>
              <img src={item.image} alt={item.title} style={styles.image} />

              <div style={styles.info}>
                <h4 style={styles.title}>{item.title}</h4>
                <p style={styles.author}>{item.author}</p>
                <p style={styles.price}>${item.price.toLocaleString()}</p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                style={styles.remove}>
                <X size={22} aria-hidden />
              </button>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div style={styles.footer}>
          <div style={styles.total}>
            <span>Total:</span>
            <strong>${total.toLocaleString()}</strong>
          </div>

          <button
            style={styles.checkout}
            disabled={!cart.length}
            onClick={() => {
              onClose();
              navigate("/checkout");
            }}>
            Finalizar compra
          </button>
        </div>
      </div>
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
    alignItems: "center",
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
  },

  remove: {
    background: "transparent",
    border: "none",
    color: "#f87171",
    cursor: "pointer",
    fontSize: "18px",
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
