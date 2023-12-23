import React, { useState } from "react";
import ReactModal from "react-modal";
import { useBookContext } from "../../contexts/BookContext";
import { editBook, uploadImage } from "../utils/constants";

export default function EditBookModal({ open, setOpen, bookToAdd }) {
    const { setBooks } = useBookContext();
    const [loading, setLoading] = useState(false);
    const updateBook = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);
            const data = {
                title:
                    e.target.title.value.trim() === ""
                        ? undefined
                        : e.target.title.value,
                available_copies:
                    e.target.available_copies.value.trim() === ""
                        ? undefined
                        : e.target.available_copies.value,
                img_url:
                    e.target.img_url.files[0] &&
                    (await uploadImage(e.target.img_url.files[0])),
            };
            await editBook(bookToAdd.id, data);
            setBooks((prev) => {
                return prev.map((b) => {
                    if (b.id !== bookToAdd.id) return b;
                    for (const key of Object.keys(data)) {
                        if (data[key] !== undefined) {
                            b[key] = data[key];
                        }
                    }
                    return b;
                });
            });
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
            <form className="contactForm" onSubmit={updateBook}>
                <label>Title: </label>
                <input
                    name="title"
                    type="text"
                    placeholder={bookToAdd?.title}
                />
                <label>Available copies: </label>
                <input
                    name="available_copies"
                    type="number"
                    placeholder={bookToAdd?.available_copies}
                    min={0}
                />
                <input type="file" name="img_url" />
                <button type="submit">
                    {loading ? "Loading..." : "Edit book"}
                </button>
            </form>
        </ReactModal>
    );
}
