import React, { useEffect, useState } from "react";
import "./userOrdersTab.css";
import {
    getBorrowedBooksById,
    returnBookById,
} from "../../components/utils/constants";
import ReactModal from "react-modal";

export default function UserOrdersTab() {
    const [open, setOpen] = useState(false);
    const [bookToReturn, setBookToReturn] = useState(null);
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    function bookClickHandler(book) {
        setOpen(true);
        setBookToReturn(book);
    }

    const returnBook = async () => {
        setLoading(true);
        const res = await returnBookById(bookToReturn.id);
        console.log(res);
        setLoading(false);
    };

    useEffect(() => {
        const getBorrowedBooks = async () => {
            const res = await getBorrowedBooksById();
            setBorrowedBooks(res.data);
        };
        getBorrowedBooks();
    }, [setBorrowedBooks]);

    return (
        <div className="layout">
            {borrowedBooks.length > 0 ? (
                borrowedBooks.map((book) => {
                    return (
                        <div key={book.id} className="book">
                            <h2>{book.title}</h2>
                            <img
                                src={book.img_url}
                                alt="book cover"
                                height={200}
                                width={150}
                            />
                            <button
                                className="returnBtn"
                                onClick={() => bookClickHandler(book)}
                            >
                                Return
                            </button>
                        </div>
                    );
                })
            ) : (
                <h1>You did not borrow any books.</h1>
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
                    <h1>{bookToReturn?.title ?? ""}</h1>
                    <img
                        width={"50%"}
                        src={bookToReturn?.img_url ?? ""}
                        alt="book-cover"
                    />
                    <p>Do you want to return this book?</p>
                    <button
                        className="book-modal-container-btn"
                        onClick={returnBook}
                    >
                        {loading ? "Loading..." : "Return"}
                    </button>
                </div>
            </ReactModal>
        </div>
    );
}
