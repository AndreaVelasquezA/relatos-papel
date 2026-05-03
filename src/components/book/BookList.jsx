import BookCard from "./BookCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./BookList.css";

function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="pagination">
      <button
        className="btn"
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        disabled={page === 1}>
        <ChevronLeft size={22} aria-hidden />
      </button>

      <span className="pageInfo">
        {page} / {totalPages || 1}
      </span>

      <button
        className="btn"
        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
        disabled={page >= totalPages}>
        <ChevronRight size={22} aria-hidden />
      </button>
    </div>
  );
}

export default function BookList({
  books,
  page,
  setPage,
  totalPages,
  gridRef,
}) {
  if (!books || books.length === 0) {
    return <p className="empty">No hay resultados</p>;
  }

  return (
    <div className="wrapper">
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />

      <div className="grid" ref={gridRef}>
        {books.map((book) => (
          <div key={book.id} className="cardWrapper">
            <BookCard book={book} />
          </div>
        ))}
      </div>

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
}
