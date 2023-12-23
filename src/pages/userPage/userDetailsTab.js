import React, { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import {
    getUser,
    login,
    updateUserById,
} from "../../components/utils/constants";
import "./userDetailsTab.css";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";

export default function UserDetailsTab() {
    const { user, setUser } = useUserContext();
    const [canEdit, setCanEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loadUser = async () => {
            setUser(await getUser());
        };
        !user && loadUser();
    }, [setUser, user]);

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
        <div>
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
            <button style={{ margin: "10px 0" }} onClick={() => setOpen(true)}>
                logout
            </button>
            <ReactModal
                isOpen={open}
                ariaHideApp={false}
                onRequestClose={() => setOpen(false)}
                style={{
                    content: {
                        height: "80px",
                        width: "300px",
                        margin: "auto",
                    },
                }}
            >
                <div className="logoutModal">
                    <h2>Logout from the system?</h2>
                    <div className="logoutModalBtns">
                        <button
                            onClick={() => {
                                localStorage.removeItem("id");
                                localStorage.removeItem("token");
                                navigate(login);
                            }}
                        >
                            Yes
                        </button>
                        <button
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            No
                        </button>
                    </div>
                </div>
            </ReactModal>
        </div>
    );
}
