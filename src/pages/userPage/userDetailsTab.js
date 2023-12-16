import React, { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import "./userDetailsTab.css";

export default function UserDetailsTab() {
    const updateUser = async (e) => {
        e.preventDefault();
        setCanEdit(false);
        setLoading(true);
        const data = {
            email: e.target.email.value,
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            date_of_birth: e.target.date_of_birth.value,
        };
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };
    const { getUser } = useUserContext();
    const [canEdit, setCanEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    function formatDate(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        return `${year}-${month}-${day}`;
    }
    return (
        <form className="contactForm" onSubmit={updateUser}>
            <label>Email: </label>
            <input
                name="email"
                placeholder={getUser.email}
                type="text"
                disabled
            />
            <label>First name: </label>
            <input
                name="first_name"
                type="text"
                placeholder={getUser.first_name}
                disabled={!canEdit}
            />
            <label>Last name: </label>
            <input
                name="last_name"
                type="text"
                placeholder={getUser.last_name}
                disabled={!canEdit}
            />
            <label>Date of birth: </label>
            <input
                name="date_of_birth"
                type="text"
                placeholder={formatDate(getUser.dob)}
                onFocus={(e) => (e.target.type = "date")}
                // onBlur={(e) => (e.target.type = "text")}
                // disabled={!canEdit}
            />
            {loading ? (
                <p>Loading...</p>
            ) : canEdit ? (
                <div style={{ display: "flex", gap: "5px" }}>
                    <button type="button" onClick={() => setCanEdit(false)}>
                        cancel
                    </button>
                    <button type="submit">submit</button>
                </div>
            ) : (
                <button type="button" onClick={() => setCanEdit(true)}>
                    edit
                </button>
            )}
        </form>
    );
}
