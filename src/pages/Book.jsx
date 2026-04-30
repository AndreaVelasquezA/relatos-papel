import { useParams, useNavigate } from "react-router-dom";
import books from "../data/books";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Toast from "../components/ui/Toast";
import "./Book.css";

export default function Book() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cart } = useContext(CartContext);

  const [showToast, setShowToast] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const book = books.find((b) => b.id === Number(id));
  const cartItem = cart.find((b) => b.id === book?.id);

  const quantityInCart = cartItem?.quantity || 0;
  const availableStock = book ? book.stock - quantityInCart : 0;

  if (!book) {
    return (
      <div className="book-not-found">
        <p>Libro no encontrado</p>

        <button
          className="book-secondary-btn"
          onClick={() => navigate("/home")}
        >
          Volver al catálogo
        </button>
      </div>
    );
  }

  const handleAdd = () => {
    if (availableStock <= 0) return;

    addToCart(book, quantity);
    setShowToast(true);
    setQuantity(1);
  };

  return (
    <>
      <div className="book-page">
        <div className="book-wrapper">
          <div className="book-left-column">
            <img
              src={book.image}
              alt={book.title}
              className="book-image"
            />

            {book.reviews?.length > 0 && (
              <div className="book-review-preview">
                <div className="book-review-preview-header">
                  <span className="book-review-preview-stars">
                    ⭐ {book.rating}
                  </span>

                  <span className="book-review-preview-count">
                    {book.reviews.length} reseñas
                  </span>
                </div>

                <p className="book-review-preview-text">
                  “{book.reviews[0]?.comment}”
                </p>
              </div>
            )}
          </div>

          <div className="book-info">
            <div className="book-badge">Bestseller</div>

            <h1 className="book-title">{book.title}</h1>

            <p className="book-author">
              Por {book.author}
            </p>

            <div className="book-rating">
              <span className="book-rating-stars">
                ⭐⭐⭐⭐☆
              </span>

              <span className="book-rating-text">
                ({book.rating})
              </span>
            </div>

            <div className="book-price-card">
              <p className="book-price-label">Precio</p>

              <p className="book-price">
                ${book.price.toLocaleString()}
              </p>
            </div>

            <div className="book-stock-box">
              <p className="book-stock">
                Stock disponible: {availableStock}
              </p>

              {availableStock <= 3 && availableStock > 0 && (
                <p className="book-low-stock">
                  🔥 Últimas unidades
                </p>
              )}

              {availableStock <= 0 && (
                <p className="book-no-stock">
                  ❌ Producto agotado
                </p>
              )}
            </div>

            <div className="book-description-box">
              <h3 className="book-section-title">
                Descripción
              </h3>

              <p className="book-description">
                {book.description}
              </p>
            </div>

            <div className="book-quantity-card">
              <span className="book-qty-label">
                Cantidad
              </span>

              <div className="book-qty-controls">
                <button
                  className="book-qty-btn"
                  onClick={() =>
                    setQuantity((prev) =>
                      prev > 1 ? prev - 1 : 1
                    )
                  }
                >
                  −
                </button>

                <span className="book-qty-value">
                  {quantity}
                </span>

                <button
                  className={`book-qty-btn ${
                    quantity >= availableStock
                      ? "book-disabled-qty-btn"
                      : ""
                  }`}
                  disabled={quantity >= availableStock}
                  onClick={() =>
                    setQuantity((prev) =>
                      prev < availableStock
                        ? prev + 1
                        : prev
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>

            <div className="book-buttons">
              <button
                className={`book-primary-btn ${
                  availableStock <= 0
                    ? "book-disabled-btn"
                    : ""
                }`}
                disabled={availableStock <= 0}
                onClick={handleAdd}
              >
                🛒 Añadir {quantity} al carrito
              </button>

              <button
                className="book-secondary-btn"
                onClick={() => navigate("/home")}
              >
                ← Volver
              </button>
            </div>
          </div>
        </div>

        <div className="book-reviews-section">
          <div className="book-review-title-row">
            <h2 className="book-review-section-title">
              Opiniones de lectores
            </h2>

            <div className="book-review-badge">
              ⭐ {book.rating} / 5
            </div>
          </div>

          <div className="book-reviews-grid">
            {book.reviews?.map((review, index) => (
              <div key={index} className="book-review-card">
                <div className="book-review-header">
                  <div>
                    <strong className="book-review-user">
                      {review.user}
                    </strong>

                    <p className="book-review-date">
                      Compra verificada
                    </p>
                  </div>

                  <span className="book-review-rating">
                    {"⭐".repeat(review.rating)}
                  </span>
                </div>

                <p className="book-review-comment">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Toast
        message={`${quantity} libro(s) añadido(s) al carrito`}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}