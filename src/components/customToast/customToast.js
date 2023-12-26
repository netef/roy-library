import React from "react";
import { Toast } from "react-bootstrap";
import { X } from "react-bootstrap-icons";

export default function CustomToast({ message, show, setShow }) {
    return (
        <Toast
            style={{
                width: "fit-content",
                border: "1px solid black",
                padding: 20,
            }}
            show={show}
        >
            <Toast.Header closeButton={false}></Toast.Header>
            <Toast.Body style={{ display: "flex", alignItems: "center" }}>
                <X size={48} onClick={() => setShow(false)} />
                {message}
            </Toast.Body>
        </Toast>
    );
}
