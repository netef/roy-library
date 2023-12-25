import React from "react";
import "./booksGrid.css";
export default function BookGridTools({ search, setSearch }) {
    return (
        <div className="tools-container">
            <div>
                <label>Search: </label>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </div>
    );
}
