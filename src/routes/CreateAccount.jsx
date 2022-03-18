import React from 'react'
import GenericHeader from '../components/GenericHeader'
import CreateAccountForm from '../components/CreateAccountForm'

const CreateAccount = () => {
    return (
        <>
            <GenericHeader />
            <div className='p-5'>
                <CreateAccountForm />
            </div>
        </>
    )
}

export default CreateAccount