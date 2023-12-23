import React from "react";
import "./bookGridItem.css";
export default function BookGridItem({ book }) {
    return (
        <div className="book-container">
            <img className="book-img" src={book.img_url} alt="book cover" />
            <h2>{book.title}</h2>
            <h3>{book.description}</h3>
            <p>Amount available: {book.available_copies}</p>
        </div>
    );
}
