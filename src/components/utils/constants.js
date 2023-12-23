import axios from "axios";

export const home = "/";
export const user = "/user";
export const register = "/register";
export const login = "/login";
export const SERVER_URL = "http://127.0.0.1:8000/";

export const getUser = async () => {
    try {
        const data = await axios.get(
            `${SERVER_URL}/users/${localStorage.getItem("id")}`
        );
        return data.data;
    } catch (error) {
        console.error(error);
    }
};

export const getBorrowedBooksById = async (id) => {
    try {
        const data = await axios.get(
            `${SERVER_URL}/books/borrow/${localStorage.getItem("id")}`,
            {
                headers: { Authorization: localStorage.getItem("token") },
            }
        );
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
