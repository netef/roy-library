import React, { useState } from "react";
import ReactModal from "react-modal";
import { useBookContext } from "../../contexts/BookContext";
import { deleteBook } from "../utils/constants";

export default function RemoveBookModal({ open, setOpen, bookToRemove }) {
    const { setBooks } = useBookContext();
    const [loading, setLoading] = useState(false);
    const removeBook = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);
            const res = await deleteBook(bookToRemove.id);
            setBooks((prev) => {
                const tmp = [...prev];
                var index = tmp.indexOf(bookToRemove);
                tmp.splice(index, 1);
                return tmp;
            });

            setOpen(false);
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
            <form className="contactForm" onSubmit={removeBook}>
                <h1>{bookToRemove?.title}</h1>
                <button type="submit">
                    {loading ? "Loading..." : "Remove book"}
                </button>
            </form>
        </ReactModal>
    );
}
