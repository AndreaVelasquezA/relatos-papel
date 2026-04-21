import BookCard from "./BookCard";
import "./BookList.css";

export default function BookList({ books, page, setPage, totalPages, gridRef }) {
  if (!books || books.length === 0) {
    return <p className="empty">No hay resultados</p>;
  }

  const Pagination = () => (
    <div className="pagination">
      <button
        className="btn"
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        disabled={page === 1}
      >
        ←
      </button>

      <span className="pageInfo">
        {page} / {totalPages || 1}
      </span>

      <button
        className="btn"
        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
        disabled={page >= totalPages}
      >
        →
      </button>
    </div>
  );

  return (
    <div className="wrapper">
      <Pagination />

      <div className="grid" ref={gridRef}>
        {books.map((book) => (
          <div key={book.id} className="cardWrapper">
            <BookCard book={book} />
          </div>
        ))}
      </div>

      <Pagination />
    </div>
  );
}