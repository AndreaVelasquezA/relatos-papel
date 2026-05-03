import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Checkout.css";

export default function Checkout() {
  const navigate = useNavigate();

  const { cart, clearCart } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    card: "",
  });

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckout = () => {
    if (!cart.length) return;

    if (!form.name || !form.address || !form.card) {
      alert("Completa los datos");
      return;
    }

    window.alert("Compra realizada con éxito");
    clearCart();
    navigate("/home");
  };

  return (
    <>
      <div className="checkout-container">
        {/* FORM */}
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

        {/* SUMMARY */}
        <div className="checkout-summary">
          <h2 className="title">Resumen</h2>

          <div className="items">
            {cart.length === 0 && (
              <p className="empty">Tu carrito está vacío</p>
            )}

            {cart.map((item) => (
              <div key={item.id} className="item">
                <img src={item.image} alt={item.title} className="image" />

                <div className="info">
                  <p className="itemTitle">{item.title}</p>
                  <p className="itemAuthor">{item.author}</p>
                </div>

                <p className="price">${item.price.toLocaleString()}</p>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>${total.toLocaleString()}</strong>
          </div>

          <button
            className={`payBtn ${!cart.length ? "disabled" : ""}`}
            disabled={!cart.length}
            onClick={handleCheckout}>
            Pagar ahora
          </button>
        </div>
      </div>
    </>
  );
}
