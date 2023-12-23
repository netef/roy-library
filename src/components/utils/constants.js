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
