import { useState, useEffect, useMemo, useRef } from 'react';
import { Search, Library, Sparkles } from 'lucide-react';
import useBooks from '../hooks/useBooks';
import BookList from '../components/book/BookList';
import './Home.css';
const STORAGE_KEY = 'books_current_page';
export default function Home() {
    const [search, setSearch] = useState('');
    const [debounced, setDebounced] = useState('');
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);
    const gridRef = useRef(null);
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
            .gridTemplateColumns.split(' ').length;
        const isMobile = window.innerWidth < 600;
        if (isMobile) {
            setPageSize(6);
        } else {
            setPageSize(columns * 2);
        }
    };
    useEffect(() => {
        const timeout = setTimeout(calculatePageSize, 100);
        window.addEventListener('resize', calculatePageSize);
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('resize', calculatePageSize);
        };
    }, []);
    /* debounce búsqueda */ useEffect(() => {
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
    useEffect(() => {
        if (page > totalPages && totalPages > 0) {
            setPage(1);
        }
    }, [totalPages, page]);
    return (
        <div className="home-page">
            {' '}
            <section className="home-hero">
                {' '}
                <div className="home-badge"> Biblioteca digital </div>{' '}
                <h1 className="home-title"> Explora nuevas historias </h1>{' '}
                <p className="home-subtitle">
                    {' '}
                    Encuentra libros, autores y relatos para cada momento.{' '}
                </p>{' '}
                <div className="home-stats">
                    {' '}
                    <div className="home-stat">
                        {' '}
                        <Library size={18} />{' '}
                        <span> Catálogo actualizado </span>{' '}
                    </div>{' '}
                    <div className="home-stat">
                        {' '}
                        <Sparkles size={18} />{' '}
                        <span> Descubrimientos diarios </span>{' '}
                    </div>{' '}
                </div>{' '}
            </section>{' '}
            <section className="home-search-section">
                {' '}
                <div className="search-wrapper">
                    {' '}
                    <Search size={18} className="search-icon" />{' '}
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Buscar por título, autor o género..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />{' '}
                </div>{' '}
            </section>{' '}
            <section className="books-section">
                {' '}
                <BookList
                    books={paginatedBooks}
                    page={page}
                    setPage={setPage}
                    totalPages={totalPages}
                    gridRef={gridRef}
                />{' '}
            </section>{' '}
        </div>
    );
}
