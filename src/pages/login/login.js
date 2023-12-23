import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { home, register } from "../../components/utils/constants";
import { useUserContext } from "../../contexts/UserContext";
import axios from "axios";
import { SERVER_URL } from "../../components/utils/constants";

export default function Login() {
    const [loading, setLoading] = useState(false);
    const { setUser } = useUserContext();
    const navigate = useNavigate();
    const registerUser = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            username: e.target.username.value,
            password: e.target.password.value,
        };
        try {
            const user = await axios.post(`${SERVER_URL}/auth/login/`, data);
            localStorage.setItem("token", `Token ${user.data.token}`);
            localStorage.setItem("id", user.data.id);
            setUser(user.data);
            navigate(home);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };
    return (
        <div className="page-layout center">
            <h1>Please login to use the library.</h1>
            <form id="form" className="contactForm" onSubmit={registerUser}>
                <label>Username: </label>
                <input name="username" type="text" required />
                <label>Password: </label>
                <input name="password" type="password" required />

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <button type="submit">submit</button>
                )}
            </form>

            <p>
                Not registered?{" "}
                <Link style={{ color: "blue" }} to={register}>
                    click to register
                </Link>
            </p>
        </div>
    );
}
