import React from "react";
import BooksGrid from "../../components/booksGrid/booksGrid";
import Navbar from "../../components/navbar/navbar";
export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="page-layout">
                <h2>
                    Welcome to Roy's Library, the digital haven where your
                    literary dreams come to life! As you step into our online
                    sanctuary of stories, you're not just visiting a website;
                    you're embarking on a journey through the endless realms of
                    imagination and knowledge.
                </h2>
                <BooksGrid />
            </div>
        </div>
    );
}
