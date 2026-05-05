import { useParams, useNavigate } from "react-router-dom";
import books from "../data/books";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Toast from "../components/ui/Toast";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import "./Book.css";

export default function Book() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [showToast, setShowToast] = useState(false);

  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div className="book-not-found">
        <p>Libro no encontrado</p>
        <button
          type="button"
          className="book-secondary-btn"
          onClick={() => navigate("/home")}
        >
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
      <div className="book-page">
        <div className="book-cover">
          <button
            type="button"
            aria-label="Volver al catálogo"
            title="Volver"
            className="book-back-btn"
            onClick={() => navigate("/home")}
          >
            <ArrowLeft size={16} />
          </button>
          <img src={book.image} alt={book.title} className="book-image" />
        </div>

        <div className="book-info">
          <h1 className="book-title">{book.title}</h1>

          <p className="book-author">Por {book.author}</p>

          <div className="book-rating">
            ⭐⭐⭐⭐☆ <span>({book.rating || "4.2"})</span>
          </div>

          <p className="book-price">${book.price.toLocaleString()}</p>

          <p className="book-description">{book.description}</p>

          <div className="book-actions">
            <button type="button" className="book-add-btn" onClick={handleAdd}>
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
