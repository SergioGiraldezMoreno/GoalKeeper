import React from 'react'
import UserOptionsHeader from '../../components/UserOptionsHeader'
import SignInForm from './components/SignInForm'

const SignIn = () => {
    return (
        <>
            <UserOptionsHeader />
            <div className='p-5'>
                <SignInForm />
            </div>
        </>
      )
}

export default SignIn