import { useParams, useNavigate } from "react-router-dom";
import books from "../data/books";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import Toast from "../components/ui/Toast";

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
      <div style={styles.notFound}>
        <p>Libro no encontrado</p>
        <button style={styles.secondaryBtn} onClick={() => navigate("/home")}>
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
      <div style={styles.page}>
        <div style={styles.wrapper}>
          <div style={styles.leftColumn}>
            <img src={book.image} alt={book.title} style={styles.image} />

            {book.reviews?.length > 0 && (
              <div style={styles.reviewPreview}>
                <div style={styles.reviewPreviewHeader}>
                  <span style={styles.reviewPreviewStars}>⭐ {book.rating}</span>
                  <span style={styles.reviewPreviewCount}>{book.reviews.length} reseñas</span>
                </div>
                <p style={styles.reviewPreviewText}>“{book.reviews[0]?.comment}”</p>
              </div>
            )}
          </div>

          <div style={styles.info}>
            <div style={styles.badge}>Bestseller</div>
            <h1 style={styles.title}>{book.title}</h1>
            <p style={styles.author}>Por {book.author}</p>

            <div style={styles.rating}>
              <span style={styles.ratingStars}>⭐⭐⭐⭐☆</span>
              <span style={styles.ratingText}>({book.rating})</span>
            </div>

            <div style={styles.priceCard}>
              <p style={styles.priceLabel}>Precio</p>
              <p style={styles.price}>${book.price.toLocaleString()}</p>
            </div>

            <div style={styles.stockBox}>
              <p style={styles.stock}>Stock disponible: {availableStock}</p>
              {availableStock <= 3 && availableStock > 0 && (
                <p style={styles.lowStock}>🔥 Últimas unidades</p>
              )}
              {availableStock <= 0 && <p style={styles.noStock}>❌ Producto agotado</p>}
            </div>

            <div style={styles.descriptionBox}>
              <h3 style={styles.sectionTitle}>Descripción</h3>
              <p style={styles.description}>{book.description}</p>
            </div>

            <div style={styles.quantityCard}>
              <span style={styles.qtyLabel}>Cantidad</span>
              <div style={styles.qtyControls}>
                <button
                  style={styles.qtyBtn}
                  onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                >
                  −
                </button>
                <span style={styles.qtyValue}>{quantity}</span>
                <button
                  style={{
                    ...styles.qtyBtn,
                    ...(quantity >= availableStock ? styles.disabledQtyBtn : {}),
                  }}
                  disabled={quantity >= availableStock}
                  onClick={() => setQuantity((prev) => (prev < availableStock ? prev + 1 : prev))}
                >
                  +
                </button>
              </div>
            </div>

            <div style={styles.buttons}>
              <button
                style={{
                  ...styles.primaryBtn,
                  ...(availableStock <= 0 ? styles.disabledBtn : {}),
                }}
                disabled={availableStock <= 0}
                onClick={handleAdd}
              >
                🛒 Añadir {quantity} al carrito
              </button>
              <button style={styles.secondaryBtn} onClick={() => navigate("/home")}>
                ← Volver
              </button>
            </div>
          </div>
        </div>

        <div style={styles.reviewsSection}>
          <div style={styles.reviewTitleRow}>
            <h2 style={styles.reviewSectionTitle}>Opiniones de lectores</h2>
            <div style={styles.reviewBadge}>⭐ {book.rating} / 5</div>
          </div>

          <div style={styles.reviewsGrid}>
            {book.reviews?.map((review, index) => (
              <div key={index} style={styles.reviewCard}>
                <div style={styles.reviewHeader}>
                  <div>
                    <strong style={styles.reviewUser}>{review.user}</strong>
                    <p style={styles.reviewDate}>Compra verificada</p>
                  </div>
                  <span style={styles.reviewRating}>{"⭐".repeat(review.rating)}</span>
                </div>
                <p style={styles.reviewComment}>{review.comment}</p>
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

const styles = {
  page: {
    padding: "20px 16px 40px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  wrapper: {
    display: "grid",
    gridTemplateColumns: "280px 1fr",
    gap: "32px",
    alignItems: "start",
  },

  leftColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    position: "sticky",
    top: "16px",
  },

  image: {
    width: "100%",
    borderRadius: "12px",
    objectFit: "cover",
    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
  },

  reviewPreview: {
    background: "var(--bg-secondary)",
    border: "1px solid var(--border)",
    borderRadius: "10px",
    padding: "10px",
  },

  reviewPreviewHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "6px",
  },

  reviewPreviewStars: {
    fontWeight: "700",
    fontSize: "13px",
  },

  reviewPreviewCount: {
    fontSize: "11px",
    color: "var(--text-secondary)",
  },

  reviewPreviewText: {
    margin: 0,
    lineHeight: "1.4",
    color: "var(--text-secondary)",
    fontStyle: "italic",
    fontSize: "12px",
  },

  info: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  badge: {
    alignSelf: "flex-start",
    background: "rgba(59,130,246,0.12)",
    color: "var(--primary)",
    padding: "4px 10px",
    borderRadius: "999px",
    fontSize: "10px",
    fontWeight: "700",
  },

  title: {
    fontSize: "26px",
    lineHeight: "1.2",
    margin: 0,
    fontWeight: "800",
  },

  author: {
    fontSize: "13px",
    color: "var(--text-secondary)",
    marginTop: "-4px",
  },

  rating: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },

  ratingStars: {
    fontSize: "14px",
  },

  ratingText: {
    color: "var(--text-secondary)",
    fontWeight: "600",
    fontSize: "12px",
  },

  priceCard: {
    background: "var(--bg-secondary)",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    padding: "12px 16px",
  },

  priceLabel: {
    margin: 0,
    fontSize: "10px",
    color: "var(--text-secondary)",
  },

  price: {
    margin: "2px 0 0 0",
    fontSize: "26px",
    fontWeight: "800",
    color: "var(--primary)",
  },

  stockBox: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },

  stock: {
    margin: 0,
    fontWeight: "700",
    color: "#22c55e",
    fontSize: "13px",
  },

  lowStock: {
    margin: 0,
    color: "#f59e0b",
    fontWeight: "700",
    fontSize: "12px",
  },

  noStock: {
    margin: 0,
    color: "#ef4444",
    fontWeight: "700",
    fontSize: "12px",
  },

  descriptionBox: {
    background: "var(--bg-secondary)",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    padding: "14px",
  },

  sectionTitle: {
    marginTop: 0,
    marginBottom: "8px",
    fontSize: "16px",
  },

  description: {
    margin: 0,
    fontSize: "13px",
    lineHeight: "1.6",
    color: "var(--text-secondary)",
  },

  quantityCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "var(--bg-secondary)",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    padding: "10px 14px",
  },

  qtyLabel: {
    fontWeight: "700",
    fontSize: "13px",
  },

  qtyControls: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  qtyBtn: {
    width: "28px",
    height: "28px",
    borderRadius: "6px",
    border: "1px solid var(--border)",
    background: "var(--bg)",
    color: "var(--text)",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "700",
  },

  disabledQtyBtn: {
    opacity: 0.4,
    cursor: "not-allowed",
  },

  qtyValue: {
    minWidth: "20px",
    textAlign: "center",
    fontWeight: "700",
    fontSize: "14px",
  },

  buttons: {
    display: "flex",
    gap: "8px",
  },

  primaryBtn: {
    flex: 1,
    background: "var(--primary)",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "10px",
    fontWeight: "700",
    fontSize: "13px",
    cursor: "pointer",
  },

  disabledBtn: {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  secondaryBtn: {
    flex: 1,
    background: "var(--bg-secondary)",
    color: "var(--text)",
    border: "1px solid var(--border)",
    padding: "10px",
    borderRadius: "10px",
    fontWeight: "600",
    fontSize: "13px",
    cursor: "pointer",
  },

  reviewsSection: {
    marginTop: "40px",
  },

  reviewTitleRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
    flexWrap: "wrap",
    gap: "8px",
  },

  reviewSectionTitle: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "800",
  },

  reviewBadge: {
    background: "rgba(250,204,21,0.12)",
    color: "#eab308",
    padding: "6px 12px",
    borderRadius: "999px",
    fontWeight: "700",
    fontSize: "12px",
  },

  reviewsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "14px",
  },

  reviewCard: {
    background: "var(--bg-secondary)",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    padding: "14px",
  },

  reviewHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "8px",
    gap: "8px",
    flexWrap: "wrap",
  },

  reviewUser: {
    fontSize: "13px",
  },

  reviewDate: {
    margin: "2px 0 0 0",
    fontSize: "10px",
    color: "var(--text-secondary)",
  },

  reviewRating: {
    fontSize: "12px",
    whiteSpace: "nowrap",
  },

  reviewComment: {
    margin: 0,
    lineHeight: "1.5",
    color: "var(--text-secondary)",
    fontSize: "12px",
  },

  notFound: {
    padding: "40px",
    textAlign: "center",
  },
};