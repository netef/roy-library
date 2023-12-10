import React from "react";
import "./booksGrid.css";
import BookGridItem from "../bookGridItem/bookGridItem";
export default function BooksGrid() {
  return (
    <div className="books-grid">
      <BookGridItem />
      <BookGridItem />
      <BookGridItem />
      <BookGridItem />
      <BookGridItem />
    </div>
  );
}
