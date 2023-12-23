import axios from "axios";

export const home = "/";
export const user = "/user";
export const register = "/register";
export const login = "/login";
export const SERVER_URL = "http://127.0.0.1:8000/";

export const getUser = async () => {
    try {
        const data = await axios.get(
            `${SERVER_URL}/users/${localStorage.getItem("id")}`,
            {
                headers: { Authorization: localStorage.getItem("token") },
            }
        );
        return data.data;
    } catch (error) {
        console.error(error);
    }
};

export const updateUserById = async (data) => {
    try {
        const res = await axios.patch(
            `${SERVER_URL}/users/${localStorage.getItem("id")}`,
            data,
            {
                headers: { Authorization: localStorage.getItem("token") },
            }
        );
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const getBorrowedBooksById = async () => {
    try {
        const data = await axios.get(
            `${SERVER_URL}/books/borrow/${localStorage.getItem("id")}`,
            {
                headers: { Authorization: localStorage.getItem("token") },
            }
        );
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const borrowBookById = async (book_id) => {
    try {
        const data = await axios.post(
            `${SERVER_URL}/books/borrow/`,
            { user: localStorage.getItem("id"), book: book_id },
            {
                headers: { Authorization: localStorage.getItem("token") },
            }
        );
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const returnBookById = async (book_id) => {
    try {
        const data = await axios.delete(
            `${SERVER_URL}/books/borrow/`,

            {
                params: { user: localStorage.getItem("id"), book: book_id },
                headers: { Authorization: localStorage.getItem("token") },
            }
        );
        return data;
    } catch (error) {
        console.error(error);
    }
};
