import React, { useEffect, useState } from "react";
import BookGridItem from "../bookGridItem/bookGridItem";
import ReactModal from "react-modal";
import "./booksGrid.css";
import { useUserContext } from "../../contexts/UserContext";
import { SERVER_URL, borrowBookById } from "../utils/constants";
import axios from "axios";
import { useBookContext } from "../../contexts/BookContext";
export default function BooksGrid() {
    const [open, setOpen] = useState(false);
    const [bookToAdd, setBookToAdd] = useState(null);
    const { books, setBooks } = useBookContext();
    const { user, setUser } = useUserContext();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getBooks = async () => {
            try {
                const data = await axios.get(`${SERVER_URL}/books`, {
                    headers: { Authorization: localStorage.getItem("token") },
                });
                setBooks(data.data);
            } catch (error) {
                console.error(error);
            }
        };
        getBooks();
    }, [setBooks]);
    function bookClickHandler(book) {
        setOpen(true);
        setBookToAdd(book);
    }

    const borrowBook = async () => {
        setLoading(true);
        const res = await borrowBookById(bookToAdd.id);
        setLoading(false);
    };

    return (
        <div className="books-grid">
            {books.length > 0 ? (
                books.map((book) => {
                    return (
                        <div
                            key={book.id}
                            onClick={() => bookClickHandler(book)}
                        >
                            <BookGridItem book={book} />
                        </div>
                    );
                })
            ) : (
                <h1>There are no books in the library</h1>
            )}
            <ReactModal
                isOpen={open}
                ariaHideApp={false}
                onRequestClose={() => setOpen(false)}
                style={{
                    content: {
                        height: "450px",
                        width: "300px",
                        margin: "auto",
                    },
                }}
            >
                <div className="book-modal-container">
                    <h1>{bookToAdd?.title ?? ""}</h1>
                    <img
                        width={"50%"}
                        src={bookToAdd?.img_url ?? ""}
                        alt="book-cover"
                    />
                    <p>Do you want to borrow this book?</p>
                    <button
                        className="book-modal-container-btn"
                        onClick={borrowBook}
                    >
                        {loading ? "Loading..." : "Borrow"}
                    </button>
                </div>
            </ReactModal>
        </div>
    );
}
