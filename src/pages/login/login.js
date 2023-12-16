import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../components/utils/constants";

export default function Login() {
    const [loading, setLoading] = useState(false);
    const registerUser = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };
    return (
        <div className="page-layout center">
            <h1>Please login to use the library.</h1>
            <form id="form" className="contactForm" onSubmit={registerUser}>
                <label>Email: </label>
                <input name="email" type="text" required />
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
