import React from "react";
import { HouseDoor, PersonCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { home, user } from "../utils/constants";
import "./navbar.css";
export default function Navbar() {
    return (
        <div className="container">
            <Link to={home} className="left-group">
                <HouseDoor size={36} />
                <h1>Roy's Library</h1>
            </Link>
            <Link to={user}>
                <PersonCircle size={36} />
            </Link>
        </div>
    );
}
