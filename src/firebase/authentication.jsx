import React, { useEffect, useState } from "react";
import firebaseApp from "./firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { fetchUserInfoByEmail } from "./userCollectionOperations";


const AuthenticationContext = React.createContext();

const AuthenticationProvider = ({ children }) => {
    const [currentUserAuth, setCurrentUserAuth] = useState(null);
    const [currentUserInfo, setCurrentUserInfo] = useState(null)

    useEffect(() => {
        const auth = getAuth(firebaseApp)
        const unlisten = onAuthStateChanged(auth, user => {
            if (user) {
                setCurrentUserAuth(user)
                const currentUserInfo = fetchUserInfoByEmail(user.email)
                setCurrentUserInfo(currentUserInfo)
                console.log("authenticated", user.email);
            } else {
                setCurrentUserAuth(null)
                console.log("signed out");
            }
        });

        return () => {
            unlisten()
        }
    }, []);

    
    useEffect(() => {
        const setCurrentUserInfoOnLoad = async () => {
            if (currentUserAuth) {
                const currentUserInfo = fetchUserInfoByEmail(currentUserAuth.email)
                setCurrentUserInfo(currentUserInfo)
                console.log('user id:', currentUserInfo.uid)
            }
        }

        setCurrentUserInfoOnLoad();
    }, []);


    return (
        <AuthenticationContext.Provider value={{currentUserAuth, currentUserInfo}}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export {
    AuthenticationContext,
    AuthenticationProvider
}