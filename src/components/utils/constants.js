import axios from "axios";
import AWS from "aws-sdk";
const S3_BUCKET = "roylibrarybucket";
const REGION = "eu-north-1";

AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: REGION,
});

const s3 = new AWS.S3();

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

export const createBook = async (data) => {
    try {
        const book = await axios.post(`${SERVER_URL}/books/`, data, {
            headers: { Authorization: localStorage.getItem("token") },
        });
        return book;
    } catch (error) {
        console.error(error);
    }
};

export const uploadImage = async (file) => {
    const params = {
        Bucket: S3_BUCKET,
        Key: file.name,
        Body: file,
        ContentType: file.type,
    };
    return s3.upload(params).promise();
};
