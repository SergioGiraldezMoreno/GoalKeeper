import { collection, addDoc, getDocs, query, where } from "firebase/firestore"
import firebaseApp, { db } from "./firebaseConfig"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const usersCollectionRef = collection(db, "users")

const createUserInfo = async (email) => {
    await addDoc(usersCollectionRef, { email: email})
}

const fetchUserInfoByEmail = async (email) => {
    const userByEmailQuery =  query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(userByEmailQuery);
    if (querySnapshot.docs.length === 1){
        return querySnapshot.docs[0]
    }
}

function createUserPromise(email, password) {
    let promise = new Promise((onSuccess, onFail) => {
        const auth = getAuth(firebaseApp)
        createUserWithEmailAndPassword(auth, email, password)
            .then(response => {
                onSuccess(response)
                createUserInfo(email)
            })
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
    createUserPromise,
    signInEmailPromise,
    signOutPromise,
    fetchUserInfoByEmail
}