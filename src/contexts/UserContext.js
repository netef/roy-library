import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    // const dummy = {
    //     first_name: "david",
    //     last_name: "ben gurion",
    //     email: "davidthegreat@gmail.com",
    //     is_admin: true,
    // };
    const [getUser, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ getUser, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
