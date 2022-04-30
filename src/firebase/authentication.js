import React, { useEffect, useState } from "react";
import firebaseApp from "./firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getUserInfoByEmailPromise } from "./userCollectionOperations";


const AuthenticationContext = React.createContext();

const AuthenticationProvider = ({ children }) => {
    const [currentUserAuth, setCurrentUserAuth] = useState(null);
    const [currentUserInfo, setCurrentUserInfo] = useState(null)

    useEffect(() => {
        const auth = getAuth(firebaseApp)
        const unlisten = onAuthStateChanged(auth, user => {
            if (user) {
                setCurrentUserAuth(user)
                getUserInfoByEmailPromise(user.email).then(
                    function(response){
                        const userInfo = {...response.docs[0].data(), id: response.docs[0].id}
                        setCurrentUserInfo(userInfo)
                        console.log('AuthContext useffect: updating currentUserInfo', userInfo)
                    },
                    function(error){
                        console.log('Error code:', error.code)
                        console.log('msg: ', error.message)
                        setCurrentUserInfo(null)
                    }
                )
            } else {
                setCurrentUserAuth(null)
                setCurrentUserInfo(null)
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
                await loadCurrentUserInfo()
            }
        }

        setCurrentUserInfoOnLoad();
    }, [currentUserAuth]);


    const loadCurrentUserInfo = async () => {
        if (currentUserAuth) {
        const email = currentUserAuth.email
            getUserInfoByEmailPromise(email).then(
                function(response){
                    const userInfo = {...response.docs[0].data(), id: response.docs[0].id}
                    setCurrentUserInfo(userInfo)
                    console.log('loaded info:', userInfo)
                },
                function(error){
                    console.log('Error code:', error.code)
                    console.log('msg: ', error.message)
                    setCurrentUserInfo(null)
                }
            )
        }
    }

    return (
        <AuthenticationContext.Provider value={{currentUserAuth, currentUserInfo, setCurrentUserInfo, loadCurrentUserInfo}}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export {
    AuthenticationContext,
    AuthenticationProvider
}