import React from "react";
import "./navbar.css";
import { PersonCircle } from "react-bootstrap-icons";
export default function Navbar() {
  return (
    <div className="container">
      <h1>Roy's Library</h1>
      <PersonCircle size={48} />
    </div>
  );
}
