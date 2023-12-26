import React from "react";
import ReactModal from "react-modal";
import { deleteUserById } from "../utils/constants";

export default function DeleteUserModal({
    open,
    setOpen,
    userToDelete,
    setUserList,
}) {
    return (
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
                <h2>Delete User: {userToDelete?.id}?</h2>
                <div className="logoutModalBtns">
                    <button
                        onClick={async () => {
                            try {
                                await deleteUserById(userToDelete.id);
                                setUserList((prev) => {
                                    const tmp = [...prev];
                                    var index = tmp.indexOf(userToDelete);
                                    tmp.splice(index, 1);
                                    return tmp;
                                });
                                setOpen(false);
                            } catch (error) {
                                console.error(error);
                            }
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
    );
}
