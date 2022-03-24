import React, { useEffect, useState } from "react";
import firebaseApp from "./firebaseConfig";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


const AuthenticationContext = React.createContext();

const AuthenticationProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const auth = getAuth(firebaseApp)
        const unlisten = onAuthStateChanged(auth, user => {
            if (user) {
                setCurrentUser(user)
                console.log("authenticated", user.email);
            } else {
                setCurrentUser(null)
                console.log("signed out");
            }
        });

        return () => {
            unlisten()
        }
    }, []);

    
    return (
        <AuthenticationContext.Provider value={{currentUser}}>
            {children}
        </AuthenticationContext.Provider>
    );
};


function createUserPromise(email, password) {
    let promise = new Promise((onSuccess, onFail) => {
        const auth = getAuth(firebaseApp)
        createUserWithEmailAndPassword(auth, email, password)
            .then(onSuccess)
            .catch(onFail);
    })
    return promise
}

function signInEmailPromise(email, password) {
    let promise = new Promise((onSuccess, onFail) => {
        const auth = getAuth(firebaseApp)
        signInWithEmailAndPassword(auth, email, password)
            .then(onSuccess)
            .catch(onFail);
    })
    return promise
}

function signOutPromise() {
    let promise = new Promise((onSuccess, onFail) => {
        const auth = getAuth(firebaseApp)
        signOut(auth)
            .then(onSuccess)
            .catch(onFail);
    })
    return promise
}

export {
    AuthenticationContext,
    AuthenticationProvider,
    createUserPromise,
    signInEmailPromise,
    signOutPromise
}