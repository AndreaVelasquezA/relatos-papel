import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";

import Toast from "../components/ui/Toast";
import ConfirmModal from "../components/ui/ConfirmModal";

import "./Checkout.css";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const isDark = theme === "dark";

  const [showToast, setShowToast] = useState(false);

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [showErrorModal, setShowErrorModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    card: "",
  });

  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const totalItems = cart.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckout = () => {
    if (!cart.length) return;

    if (!form.name || !form.address || !form.card) {
      setShowErrorModal(true);
      return;
    }

    setShowToast(true);

    setShowSuccessModal(true);

    clearCart();

    localStorage.setItem("books_current_page", 1);
  };

  return (
    <>
      <div className="checkout-container">
        <div className="checkout-form">
          <h2 className="title">Datos de envío</h2>

          <input
            placeholder="Nombre completo"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="input"
          />

          <input
            placeholder="Dirección"
            value={form.address}
            onChange={(e) => handleChange("address", e.target.value)}
            className="input"
          />

          <input
            placeholder="Ciudad"
            value={form.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="input"
          />

          <h2 className="title">Pago</h2>

          <input
            placeholder="Número de tarjeta"
            value={form.card}
            onChange={(e) => handleChange("card", e.target.value)}
            className="input"
          />
        </div>

        <div className="checkout-summary">
          <h2 className="title">Resumen</h2>

          <div className="items">
            {cart.length === 0 && (
              <p className="empty">Tu carrito está vacío</p>
            )}

            {cart.map((item) => (
              <div key={item.id} className="item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="image"
                />

                <div className="info">
                  <p className="itemTitle">{item.title}</p>

                  <p className="itemAuthor">{item.author}</p>

                  <p
                    style={{
                      fontSize: "13px",
                      opacity: 0.8,
                      marginTop: "4px",
                    }}
                  >
                    Cantidad: <strong>{item.quantity || 1}</strong>
                  </p>

                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      marginTop: "4px",
                    }}
                  >
                    Subtotal: $
                    {(
                      item.price * (item.quantity || 1)
                    ).toLocaleString()}
                  </p>
                </div>

                <p className="price">
                  ${item.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          <div
            className="total"
            style={{
              marginBottom: "10px",
            }}
          >
            <span>Total de libros</span>

            <strong>{totalItems}</strong>
          </div>

          <div className="total">
            <span>Total</span>

            <strong>${total.toLocaleString()}</strong>
          </div>

          <button
            className={`payBtn ${!cart.length ? "disabled" : ""}`}
            disabled={!cart.length}
            onClick={handleCheckout}
          >
            Pagar ahora
          </button>
        </div>
      </div>

      <Toast
        message="Compra realizada con éxito"
        show={showToast}
        onClose={() => setShowToast(false)}
      />

      <ConfirmModal
        open={showErrorModal}
        title="Datos incompletos"
        message="Debes completar los datos de envío y pago."
        confirmText="Entendido"
        cancelText=""
        onClose={() => setShowErrorModal(false)}
        onConfirm={() => setShowErrorModal(false)}
        isDark={isDark}
      />

      <ConfirmModal
        open={showSuccessModal}
        title="Pago exitoso"
        message="Tu compra fue procesada correctamente."
        confirmText="Ir al inicio"
        cancelText=""
        onClose={() => {
          setShowSuccessModal(false);
          navigate("/");
        }}
        onConfirm={() => {
          setShowSuccessModal(false);
          navigate("/");
        }}
        isDark={isDark}
      />
    </>
  );
}