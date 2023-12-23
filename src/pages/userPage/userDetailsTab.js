import React, { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { getUser, updateUserById } from "../../components/utils/constants";
import "./userDetailsTab.css";

export default function UserDetailsTab() {
    const { user, setUser } = useUserContext();
    const [canEdit, setCanEdit] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadUser = async () => {
            setUser(await getUser());
        };
        !user && loadUser();
    }, [setUser]);

    const modifyUser = async (e) => {
        e.preventDefault();
        setCanEdit(false);
        setLoading(true);
        const data = {
            first_name:
                e.target.first_name.value.trim() === ""
                    ? undefined
                    : e.target.first_name.value,
            last_name:
                e.target.last_name.value.trim() === ""
                    ? undefined
                    : e.target.last_name.value,
        };
        await updateUserById(data);
        setLoading(false);
    };

    return !user ? (
        <h1>Loading data...</h1>
    ) : (
        <form id="form" className="contactForm" onSubmit={modifyUser}>
            <label>First name: </label>
            <input
                name="first_name"
                type="text"
                placeholder={user.first_name}
                disabled={!canEdit}
            />
            <label>Last name: </label>
            <input
                name="last_name"
                type="text"
                placeholder={user.last_name}
                disabled={!canEdit}
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
