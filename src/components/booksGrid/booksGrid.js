import React, { useState } from "react";
import BookGridItem from "../bookGridItem/bookGridItem";
import ReactModal from "react-modal";
import { FileMinus, FilePlus } from "react-bootstrap-icons/dist";
import "./booksGrid.css";
export default function BooksGrid() {
    const [open, setOpen] = useState(false);
    const [bookToAdd, setBookToAdd] = useState(null);
    const [quantitySelected, setQuantitySelected] = useState(1);
    function bookClickHandler(book) {
        setQuantitySelected(1);
        setOpen(true);
        setBookToAdd(book);
    }

    const books = [
        {
            id: "123456",
            title: "Spring Book",
            description: "An amazing book about spring",
            quantity: 4,
            img: "https://content.wepik.com/statics/90897927/preview-page0.jpg",
        },
        {
            id: "1234567",
            title: "Spring Book",
            description: "An amazing book about spring",
            quantity: 4,
            img: "https://content.wepik.com/statics/90897927/preview-page0.jpg",
        },
        {
            id: "1234576",
            title: "Spring Book",
            description: "An amazing book about spring",
            quantity: 4,
            img: "https://content.wepik.com/statics/90897927/preview-page0.jpg",
        },
        {
            id: "1234756",
            title: "Spring Book",
            description: "An amazing book about spring",
            quantity: 4,
            img: "https://content.wepik.com/statics/90897927/preview-page0.jpg",
        },
        {
            id: "1237456",
            title: "Spring Book",
            description: "An amazing book about spring",
            quantity: 4,
            img: "https://content.wepik.com/statics/90897927/preview-page0.jpg",
        },
        {
            id: "1273456",
            title: "Spring Book",
            description: "An amazing book about spring",
            quantity: 4,
            img: "https://content.wepik.com/statics/90897927/preview-page0.jpg",
        },
        {
            id: "12345677",
            title: "Spring Book",
            description: "An amazing book about spring",
            quantity: 4,
            img: "https://content.wepik.com/statics/90897927/preview-page0.jpg",
        },
        {
            id: "123456777",
            title: "Spring Book",
            description: "An amazing book about spring",
            quantity: 4,
            img: "https://content.wepik.com/statics/90897927/preview-page0.jpg",
        },
        {
            id: "1234568",
            title: "Spring Book",
            description: "An amazing book about spring",
            quantity: 4,
            img: "https://content.wepik.com/statics/90897927/preview-page0.jpg",
        },
    ];
    return (
        <div className="books-grid">
            {books.map((book) => {
                return (
                    <div key={book.id} onClick={(e) => bookClickHandler(book)}>
                        <BookGridItem book={book} />
                    </div>
                );
            })}
            <ReactModal
                isOpen={open}
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
                        src={bookToAdd?.img ?? ""}
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
