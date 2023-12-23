import React, { useEffect, useState } from "react";
import "./userOrdersTab.css";
import {
    getBorrowedBooksById,
    returnBookById,
} from "../../components/utils/constants";
import ReactModal from "react-modal";
import { useBookContext } from "../../contexts/BookContext";

export default function UserAdminTab() {
    const [open, setOpen] = useState(false);
    const [bookToReturn, setBookToReturn] = useState(null);
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const { books } = useBookContext();

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

    return <div className="layout"></div>;
}
