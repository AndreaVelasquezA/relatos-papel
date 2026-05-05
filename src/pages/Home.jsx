import { useState, useEffect, useMemo, useRef } from "react";
import useBooks from "../hooks/useBooks";
import BookList from "../components/book/BookList";
import { Search } from "lucide-react";
import "./Home.css";

const STORAGE_KEY = "books_current_page";

export default function Home() {
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  const gridRef = useRef(null);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const savedPage = parseInt(localStorage.getItem(STORAGE_KEY), 10);

    if (savedPage && !isNaN(savedPage)) {
      setPage(savedPage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, page);
  }, [page]);

  const calculatePageSize = () => {
    if (!gridRef.current) return;

    const grid = gridRef.current;
    const columns = window
      .getComputedStyle(grid)
      .gridTemplateColumns.split(" ").length;

    const isMobile = window.innerWidth < 600;

    if (isMobile) {
      setPageSize(6);
    } else {
      setPageSize(columns * 2);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(calculatePageSize, 100);

    window.addEventListener("resize", calculatePageSize);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", calculatePageSize);
    };
  }, []);

  useEffect(() => {
    // evitar ejecutar en el primer render
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    const timeout = setTimeout(() => {
      setDebounced(search);
      setPage(1);

      localStorage.removeItem(STORAGE_KEY);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);

  const books = useBooks(debounced);

  const paginatedBooks = useMemo(() => {
    const start = (page - 1) * pageSize;
    return books.slice(start, start + pageSize);
  }, [books, page, pageSize]);

  const totalPages = Math.ceil(books.length / pageSize);

  /* pagina invalidas */
  useEffect(() => {
    if (page > totalPages && totalPages > 0) {
      setPage(1);
    }
  }, [totalPages, page]);

  return (
    <div className="home-page">
      <div className="home-header">
        <h1 className="home-title">Catálogo de libros</h1>
        <p className="home-subtitle">
          Explora, busca y descubre nuevas historias
        </p>
      </div>

      <div className="home-search">
        <Search size={18} className="home-search-icon" aria-hidden />

        <input
          className="home-search-input"
          type="text"
          placeholder="Buscar por título, autor o género..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <BookList
        books={paginatedBooks}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        gridRef={gridRef}
      />
    </div>
  );
}
