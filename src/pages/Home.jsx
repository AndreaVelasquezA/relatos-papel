import { useState, useEffect, useMemo, useRef } from "react";
import useBooks from "../hooks/useBooks";
import BookList from "../components/book/BookList";
import { Search } from "lucide-react";

const STORAGE_KEY = "books_current_page";

export default function Home() {
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  const gridRef = useRef(null);
  const isFirstLoad = useRef(true); // 🔥 clave

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
    const columns =
      window.getComputedStyle(grid).gridTemplateColumns.split(" ").length;

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

  /* debounce búsqueda */
  // useEffect(() => {
  //   // evitar ejecutar en el primer render
  //   if (isFirstLoad.current) {
  //     isFirstLoad.current = false;
  //     return;
  //   }

  //   const timeout = setTimeout(() => {
  //     setDebounced(search);
  //     setPage(1);

  //     localStorage.removeItem(STORAGE_KEY);
  //   }, 300);

  //   return () => clearTimeout(timeout);
  // }, [search]);

  const books = useBooks(debounced);

  const paginatedBooks = useMemo(() => {
    const start = (page - 1) * pageSize;
    return books.slice(start, start + pageSize);
  }, [books, page, pageSize]);

  const totalPages = Math.ceil(books.length / pageSize);

  /* evitar páginas inválidas */
  useEffect(() => {
    if (page > totalPages && totalPages > 0) {
      setPage(1);
    }
  }, [totalPages, page]);

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>📚 Catálogo de libros</h1>
        <p style={styles.subtitle}>
          Explora, busca y descubre nuevas historias
        </p>
      </div>

      <div style={styles.searchWrapper}>
        <Search size={18} style={styles.icon} />

        <input
          style={styles.input}
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

const styles = {
  page: {
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "30px 24px",
  },

  header: {
    textAlign: "center",
    marginBottom: "25px",
  },

  title: {
    fontSize: "clamp(26px, 4vw, 38px)",
    marginBottom: "6px",
    fontWeight: "700",
  },

  subtitle: {
    fontSize: "14px",
    opacity: 0.7,
  },

  searchWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "var(--bg-secondary)",
    border: "1px solid var(--border)",
    padding: "10px 14px",
    borderRadius: "12px",
    maxWidth: "600px",
    margin: "0 auto 30px auto",
  },

  icon: {
    opacity: 0.6,
  },

  input: {
    width: "100%",
    border: "none",
    outline: "none",
    background: "transparent",
    color: "var(--text)",
    fontSize: "14px",
  },
};