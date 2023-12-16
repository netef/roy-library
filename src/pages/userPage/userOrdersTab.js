import React, { useState } from "react";
import "./userOrdersTab.css";
export default function UserOrdersTab() {
  const [open, setOpen] = useState(false);
  const [bookToReturn, setBookToReturn] = useState(null);

  function bookClickHandler(book) {
    setOpen(true);
    setBookToReturn(book);
  }
  const books = [
    {
      id: "123456",
      title: "Spring Book",
      description: "An amazing book about spring",
      quantity: 4,
      img: "https://content.wepik.com/statics/90897927/preview-page0.jpg",
    },
    {
      id: "1234567",
      title: "Spring Book",
      description: "An amazing book about spring",
      quantity: 4,
      img: "https://content.wepik.com/statics/90897927/preview-page0.jpg",
    },
    {
      id: "1234576",
      title: "Spring Book",
      description: "An amazing book about spring",
      quantity: 4,
      img: "https://content.wepik.com/statics/90897927/preview-page0.jpg",
    },
    {
      id: "1234756",
      title: "Spring Book",
      description: "An amazing book about spring",
      quantity: 4,
      img: "https://content.wepik.com/statics/90897927/preview-page0.jpg",
    },
    {
      id: "1237456",
      title: "Spring Book",
      description: "An amazing book about spring",
      quantity: 4,
      img: "https://content.wepik.com/statics/90897927/preview-page0.jpg",
    },
    {
      id: "1273456",
      title: "Spring Book",
      description: "An amazing book about spring",
      quantity: 4,
      img: "https://content.wepik.com/statics/90897927/preview-page0.jpg",
    },
    {
      id: "12345677",
      title: "Spring Book",
      description: "An amazing book about spring",
      quantity: 4,
      img: "https://content.wepik.com/statics/90897927/preview-page0.jpg",
    },
    {
      id: "123456777",
      title: "Spring Book",
      description: "An amazing book about spring",
      quantity: 4,
      img: "https://content.wepik.com/statics/90897927/preview-page0.jpg",
    },
    {
      id: "1234568",
      title: "Spring Book",
      description: "An amazing book about spring",
      quantity: 4,
      img: "https://content.wepik.com/statics/90897927/preview-page0.jpg",
    },
  ];
  return (
    <div className="layout">
      {books.map((book) => {
        return (
          <div className="book">
            <h2>{book.title}</h2>
            <img src={book.img} alt="book cover" height={200} width={150} />
            <button
              className="returnBtn"
              onClick={() => bookClickHandler(book)}
            >
              Return
            </button>
          </div>
        );
      })}
    </div>
  );
}
