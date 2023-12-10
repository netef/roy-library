import React from "react";
import "./bookGridItem.css";
export default function BookGridItem() {
  return (
    <div className="book-container">
      <img
        className="book-img"
        src="https://content.wepik.com/statics/90897927/preview-page0.jpg"
        alt="book cover"
      />
      <h3>Spring Book</h3>
      <p>4 available</p>
    </div>
  );
}
