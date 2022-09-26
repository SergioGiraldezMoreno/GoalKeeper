import { collection, addDoc, getDocs, query, where, updateDoc, doc, onSnapshot, orderBy } from "firebase/firestore"
import firebaseApp, { db } from "./firebaseConfig"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const usersCollectionRef = collection(db, "users")

const createUserInfo = async (email) => {
    const userRef = await addDoc(usersCollectionRef, { email: email, nickName: ''})
    await createGoalPromise(userRef.id, { title: 'set up my account', done: false })
}


const getUserInfoByEmailPromise = async (email) => {
    let promise = new Promise((onSuccess, onFail) => {
        const userByEmailQuery =  query(collection(db, "users"), where("email", "==", email));    
        getDocs(userByEmailQuery)
            .then(onSuccess)
            .catch(onFail);
    })
    return promise
}

const updateUserInfoPromise = async (userInfoId, info) => {
    let promise = new Promise((onSuccess, onFail) => {
        const userInfoRef = doc(db, 'users', userInfoId);        
        updateDoc(userInfoRef, info)
            .then(onSuccess)
            .catch(onFail);
    })
    return promise
}

function createUserPromise(email, password) {
    let promise = new Promise((onSuccess, onFail) => {
        const auth = getAuth(firebaseApp)
        createUserWithEmailAndPassword(auth, email, password)
            .then(response => {
                createUserInfo(email)
                onSuccess(response)
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

const createGoalPromise = async (userInfoId, goalInfo) => {
    let promise = new Promise((onSuccess, onFail) => {
        const goalsCollectionRef = collection(db, 'users', userInfoId, 'goals');
        addDoc(goalsCollectionRef, goalInfo)
            .then(onSuccess)
            .catch(onFail);
    })
    return promise
}

const getUserGoalsPromise = async (userInfoId) => {
    let promise = new Promise((onSuccess, onFail) => {
        const goalsCollectionRef = collection(db, 'users', userInfoId, 'goals');
        getDocs(goalsCollectionRef)
            .then(onSuccess)
            .catch(onFail);
    })
    return promise
}


function getGoalsStream(userInfoId, snapshot, error) {
    const itemsColRef = collection(db, 'users', userInfoId, 'goals');
    const itemsQuery = query(itemsColRef, orderBy('title'))
    return onSnapshot(itemsQuery, snapshot, error);
}


export {
    createUserPromise,
    signInEmailPromise,
    signOutPromise,
    updateUserInfoPromise,
    getUserInfoByEmailPromise,
    createGoalPromise,
    getUserGoalsPromise,
    getGoalsStream
}