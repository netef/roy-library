import React, { useState } from "react";
import ReactModal from "react-modal";
import { useUserContext } from "../../contexts/UserContext";
import { borrowBookById, createBook, uploadImage } from "../utils/constants";
import { useBookContext } from "../../contexts/BookContext";

export default function BookModal({
    open,
    setOpen,
    bookToAdd,
    book_id = undefined,
}) {
    const { user } = useUserContext();
    const { books, setBooks } = useBookContext();
    const [loading, setLoading] = useState(false);

    const borrowBook = async () => {
        try {
            setLoading(true);
            const res = await borrowBookById(bookToAdd.id);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    const addBook = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);
            const data = {
                title: e.target.title.value,
                available_copies: e.target.available_copies.value,
                img_url: (await uploadImage(e.target.img_url.files[0]))
                    .Location,
            };
            const res = await createBook(data);
            const book = res.data;
            setBooks((prev) => [...prev, book]);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    const updateBook = async (e) => {
        try {
            setLoading(true);
            const data = {
                title: e.target.title.value,
                available_copies: e.target.available_copies.value,
                img_url: await uploadImage(e.target.img_url.files[0]),
            };
            const res = await createBook(data);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    if (user.is_admin) return <AdminBookModal />;
    return <UserBookModal />;

    function AdminBookModal() {
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
                <form
                    className="contactForm"
                    onSubmit={book_id ? updateBook : addBook}
                >
                    <label>Title: </label>
                    <input name="title" type="text" required />
                    <label>Available copies: </label>
                    <input
                        name="available_copies"
                        type="number"
                        min={0}
                        required
                    />
                    <input type="file" name="img_url" required />
                    <button type="submit">Add book</button>
                </form>
            </ReactModal>
        );
    }
    function UserBookModal() {
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
}
