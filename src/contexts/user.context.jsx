import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createdoc } from "../utility/firebase/firebase.utility";

export const userContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createdoc(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
