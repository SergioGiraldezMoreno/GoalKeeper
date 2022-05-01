import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import CreateGoalPopup from './components/CreateGoalPopup'
import GenericHeader from '../../components/GenericHeader'
import UserAchievedGoalsSection from './components/UserAchievedGoalsSection'
import UserCurrentGoalsSection from './components/UserCurrentGoalsSection'
import UserGoalsTopSection from './components/UserGoalsTopSection'
import { AuthenticationContext } from '../../firebase/authentication'
import firebaseApp from '../../firebase/firebaseConfig'
import { getUserInfoByEmailPromise } from '../../firebase/userCollectionOperations'

const UserGoals = () => {
    
    const { currentUserAuth } = useContext(AuthenticationContext)
    const [ isLoading, setIsLoading ] = useState(true) 
    
    useEffect(() => {
        const auth = getAuth(firebaseApp)
        const unlisten = onAuthStateChanged(auth, user => {
            if (user) {
                getUserInfoByEmailPromise(user.email).then(() => {setIsLoading(false)})
            }
        });
        return () => {unlisten()}
    }, []);

    
    if (isLoading) {
        return (
            <div className='container py-3 text-center'>
                <h1 className='big-title'>Loading ...</h1>
            </div>
        )
    } else if (!!currentUserAuth)  {
        return (
            <>  
                <GenericHeader />
                <CreateGoalPopup />
                <div className='container py-3'>
                    <UserGoalsTopSection />
                    <UserCurrentGoalsSection />
                    <UserAchievedGoalsSection />
                </div>
            </>
        )
    } else {
        return <Navigate to="/sign-in" />;
    }
}

export default UserGoals