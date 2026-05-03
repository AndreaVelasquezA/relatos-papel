import { useMemo } from "react";
import booksData from "../data/books";

const normalize = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export default function useBooks(searchTerm = "") {
  const books = useMemo(() => {
    const term = normalize(searchTerm.trim());

    if (!term) return booksData;

    return booksData.filter((b) =>
      [b.title, b.author].some((field) => normalize(field).includes(term)),
    );
  }, [searchTerm]);

  return books;
}
