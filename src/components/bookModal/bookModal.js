import React, { useState } from "react";
import ReactModal from "react-modal";
import { borrowBookById } from "../utils/constants";

export default function BookModal({ open, setOpen, bookToAdd }) {
    const [loading, setLoading] = useState(false);

    const borrowBook = async () => {
        try {
            setLoading(true);
            await borrowBookById(bookToAdd.id);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    return (
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
    );
}
