import React, { useEffect, useState } from "react";
import BooksGrid from "../../components/booksGrid/booksGrid";
import Navbar from "../../components/navbar/navbar";
import { useUserContext } from "../../contexts/UserContext";
import AddBookModal from "../../components/bookModal/addBookModal";
import { getUser } from "../../components/utils/constants";
export default function Home() {
    const { user, setUser } = useUserContext();
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const receiveUser = async () => {
            try {
                const data = await getUser();
                setUser(data);
            } catch (error) {
                console.error(error);
            }
        };
        !user && receiveUser();
    }, [user, setUser]);
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
                {user && user.is_admin && (
                    <button
                        style={{
                            height: "70px",
                            width: "200px",
                            alignSelf: "center",
                        }}
                        onClick={() => setOpen(true)}
                    >
                        add new book +
                    </button>
                )}
                <BooksGrid />
                <AddBookModal open={open} setOpen={setOpen} />
            </div>
        </div>
    );
}
