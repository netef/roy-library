import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { login } from "../../components/utils/constants";

export default function Register() {
    const [loading, setLoading] = useState(false);
    const registerUser = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            date_of_birth: e.target.date_of_birth.value,
        };
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };
    return (
        <div className="page-layout center">
            <h1>Please register to use the library.</h1>
            <form id="form" className="contactForm" onSubmit={registerUser}>
                <label>Email: </label>
                <input name="email" type="text" required />
                <label>Password: </label>
                <input name="password" type="password" required />
                <label>First name: </label>
                <input name="first_name" type="text" required />
                <label>Last name: </label>
                <input name="last_name" type="text" required />
                <label>Date of birth: </label>
                <input name="date_of_birth" type="date" required />
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <button type="submit">submit</button>
                )}
            </form>

            <p>
                Already registered?{" "}
                <Link style={{ color: "blue" }} to={login}>
                    click to login
                </Link>
            </p>
        </div>
    );
}
