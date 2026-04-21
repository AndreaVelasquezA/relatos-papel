import { useMemo } from "react";
import booksData from "../data/books";

export default function useBooks(searchTerm = "") {
  const books = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    if (!term) return booksData;

    return booksData.filter((b) =>
      [b.title, b.author].some((field) =>
        field.toLowerCase().includes(term)
      )
    );
  }, [searchTerm]);

  return books;
}