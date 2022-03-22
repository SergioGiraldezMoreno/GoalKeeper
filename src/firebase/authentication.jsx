import React, { useEffect, useState } from "react";
import firebaseApp from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const AuthenticationContext = React.createContext();

const AuthenticationProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const auth = getAuth()

    useEffect (() => {
        // auth.onAuthStateChanged(setCurrentUser);
        auth.onAuthStateChanged(user => {
            console.log(user)
        });
    }, []);

    return (
        <AuthenticationContext.Provider value={{currentUser}}>
            {children}
        </AuthenticationContext.Provider>
    );
};

// TODO: do it ASYNC!!!
function createUserWithEmail(email, password) {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential.user.email, 'created in successfully')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // TODO: IMPROVE THAT!
            console.log('Error code:', errorCode)
            console.log('msg: ', errorMessage)
        });
}

function signInEmailUser(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential.user.email, 'sign in successfully')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // TODO: IMPROVE THAT!
            console.log('Error code:', errorCode)
            console.log('msg: ', errorMessage)
        });
}

export {
    AuthenticationContext,
    AuthenticationProvider,
    createUserWithEmail,
    signInEmailUser
}