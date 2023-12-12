import BooksGrid from "./components/booksGrid/booksGrid";
import "./page.css";
function App() {
    return (
        <div className="page-layout">
            <h2>
                Welcome to Roy's Library, the digital haven where your literary
                dreams come to life! As you step into our online sanctuary of
                stories, you're not just visiting a website; you're embarking on
                a journey through the endless realms of imagination and
                knowledge.
            </h2>
            <BooksGrid />
        </div>
    );
}

export default App;
