import { useParams, useNavigate } from "react-router-dom";
import books from "../data/books";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import Toast from "../components/ui/Toast";
import { ShoppingCart, ArrowLeft } from "lucide-react";

export default function Book() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [showToast, setShowToast] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const book = books.find((b) => b.id === Number(id));

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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
    addToCart(book);
    setShowToast(true);
  };

  return (
    <>
      <div
        style={{
          ...styles.wrapper,
          flexDirection: isDesktop ? "row" : "column",
          alignItems: isDesktop ? "flex-start" : "center",
        }}>
        <div
          style={{
            ...styles.imageContainer,
            alignItems: isDesktop ? "flex-start" : "center",
          }}>
          <button
            type="button"
            aria-label="Volver al catálogo"
            title="Volver"
            style={styles.backBtn}
            onClick={() => navigate("/home")}>
            <ArrowLeft size={16} />
          </button>
          <img src={book.image} alt={book.title} style={styles.image} />
        </div>

        <div style={styles.info}>
          <h1 style={styles.title}>{book.title}</h1>

          <p style={styles.author}>Por {book.author}</p>

          <div style={styles.rating}>
            ⭐⭐⭐⭐☆ <span>({book.rating || "4.2"})</span>
          </div>

          <p style={styles.price}>${book.price.toLocaleString()}</p>

          <p style={styles.description}>{book.description}</p>

          <div
            style={{
              ...styles.buttons,
              flexDirection: isDesktop ? "row" : "column",
            }}>
            <button style={styles.primaryBtn} onClick={handleAdd}>
              <ShoppingCart size={18} />
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>

      <Toast
        message="Libro añadido al carrito"
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    gap: "60px",
    padding: "40px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
    justifyContent: "center",
  },

  imageContainer: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    maxWidth: "380px",
  },

  image: {
    width: "100%",
    maxWidth: "380px",
    borderRadius: "14px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
  },

  info: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  title: {
    fontSize: "32px",
    margin: 0,
    fontWeight: "700",
  },

  author: {
    fontSize: "14px",
    color: "var(--text-secondary)",
  },

  rating: {
    fontSize: "15px",
  },

  price: {
    fontSize: "26px",
    fontWeight: "700",
    color: "var(--primary)",
  },

  description: {
    fontSize: "15px",
    lineHeight: "1.7",
    color: "var(--text-secondary)",
  },

  buttons: {
    display: "flex",
    gap: "12px",
    marginTop: "10px",
  },

  primaryBtn: {
    flex: 1,
    background: "var(--primary)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "10px",
    fontWeight: "600",
    cursor: "pointer",
  },

  secondaryBtn: {
    flex: 1,
    background: "var(--bg-secondary)",
    color: "var(--text)",
    border: "1px solid var(--border)",
    padding: "12px",
    borderRadius: "10px",
    cursor: "pointer",
  },

  backBtn: {
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "var(--bg-secondary)",
    color: "var(--text)",
    border: "1px solid var(--border)",
    padding: "10px",
    minWidth: "42px",
    borderRadius: "10px",
    cursor: "pointer",
  },

  notFound: {
    padding: "40px",
    textAlign: "center",
  },
};
