import React, { useEffect, useState } from "react";
import BookGridItem from "../bookGridItem/bookGridItem";
import ReactModal from "react-modal";
import "./booksGrid.css";
import { useUserContext } from "../../contexts/UserContext";
import { SERVER_URL, borrowBookById, getUser } from "../utils/constants";
import axios from "axios";
import { useBookContext } from "../../contexts/BookContext";
import BookModal from "../bookModal/bookModal";
export default function BooksGrid() {
    const [open, setOpen] = useState(false);
    const [bookToAdd, setBookToAdd] = useState(null);
    const { books, setBooks } = useBookContext();
    const { user, setUser } = useUserContext();
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
        const receiveUser = async () => {
            try {
                const data = await getUser();
                setUser(data);
            } catch (error) {
                console.error(error);
            }
        };
        getBooks();
        !user && receiveUser();
    }, [setBooks]);
    function bookClickHandler(book) {
        setOpen(true);
        setBookToAdd(book);
    }

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
            {user && (
                <BookModal
                    open={open}
                    setOpen={setOpen}
                    bookToAdd={bookToAdd}
                />
            )}
        </div>
    );
}
