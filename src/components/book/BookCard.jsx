import { useNavigate } from "react-router-dom";
import { memo } from "react";

function BookCard({ book }) {
  const navigate = useNavigate();

  return (
    <div
      style={styles.card}
      onClick={() => navigate(`/book/${book.id}`)}
    >
      <div style={styles.imageWrapper}>
        <img
          src={book.image}
          alt={book.title}
          style={styles.image}
          loading="lazy"
        />
      </div>

      <div style={styles.info}>
        <h3 style={styles.title}>{book.title}</h3>

        <p style={styles.author}>{book.author}</p>

        <p style={styles.price}>
          ${book.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default memo(BookCard);

const styles = {
  card: {
    background: "var(--bg-secondary)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius)",
    overflow: "hidden",
    cursor: "pointer",

    display: "flex",
    flexDirection: "column",

    transition: "all 0.25s ease",

    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },

  cardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
  },

  imageWrapper: {
    width: "100%",
    height: "220px",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },

  info: {
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },

  title: {
    margin: 0,
    fontSize: "15px",
    fontWeight: "600",

    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  author: {
    margin: 0,
    fontSize: "13px",
    color: "var(--text-secondary)",
  },

  price: {
    marginTop: "6px",
    fontWeight: "bold",
    fontSize: "15px",
    color: "var(--primary)",
  },
};