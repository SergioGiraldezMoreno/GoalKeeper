import React from 'react'
import UserOptionsHeader from '../../components/UserOptionsHeader'
import CreateAccountForm from './components/CreateAccountForm'

const CreateAccount = () => {
    return (
        <>
            <UserOptionsHeader />
            <div className='p-5'>
                <CreateAccountForm />
            </div>
        </>
    )
}

export default CreateAccount