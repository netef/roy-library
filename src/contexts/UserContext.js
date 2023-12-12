import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    const [getUser, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ getUser, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
