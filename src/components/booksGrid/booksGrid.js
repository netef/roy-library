import React, { useEffect, useState } from "react";
import BookGridItem from "../bookGridItem/bookGridItem";
import ReactModal from "react-modal";
import { FileMinus, FilePlus } from "react-bootstrap-icons/dist";
import "./booksGrid.css";
import { useUserContext } from "../../contexts/UserContext";
import { SERVER_URL, getBooks } from "../utils/constants";
import axios from "axios";
export default function BooksGrid() {
    const [open, setOpen] = useState(false);
    const [bookToAdd, setBookToAdd] = useState(null);
    const [quantitySelected, setQuantitySelected] = useState(1);
    const [books, setBooks] = useState([]);
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
        getBooks();
    }, []);
    function bookClickHandler(book) {
        setQuantitySelected(1);
        setOpen(true);
        setBookToAdd(book);
    }

    return (
        <div className="books-grid">
            {books.map((book) => {
                return (
                    <div key={book.id} onClick={() => bookClickHandler(book)}>
                        <BookGridItem book={book} />
                    </div>
                );
            })}
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
                    <p>How many copies do you want to borrow?</p>
                    <div className="counter">
                        <FileMinus
                            style={{ cursor: "pointer" }}
                            size={36}
                            onClick={() =>
                                setQuantitySelected((prev) =>
                                    prev - 1 > 0 ? prev - 1 : prev
                                )
                            }
                        />
                        <p>{quantitySelected}</p>
                        <FilePlus
                            style={{ cursor: "pointer" }}
                            size={36}
                            onClick={() =>
                                setQuantitySelected((prev) =>
                                    prev + 1 < bookToAdd.quantity + 1
                                        ? prev + 1
                                        : prev
                                )
                            }
                        />
                    </div>
                    <button>Submit</button>
                </div>
            </ReactModal>
        </div>
    );
}
