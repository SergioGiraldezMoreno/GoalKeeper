import React from 'react'
import GenericHeader from '../components/GenericHeader'
import SignInForm from '../components/SignInForm'

const SignIn = () => {
    return (
        <>
            <GenericHeader />
            <div className='p-5'>
                <SignInForm />
            </div>
        </>
      )
}

export default SignIn