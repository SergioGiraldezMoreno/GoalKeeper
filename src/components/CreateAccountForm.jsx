
import React, { useContext } from 'react'
import { AuthenticationContext, createUserWithEmail, signInEmailUser } from '../firebase/authentication';

const CreateAccountForm = () => {
    // const { currentUser } = useContext(AuthenticationContext);
    
    const handleUserCreation = (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        // TODO: make them async 
        createUserWithEmail(email.value, password.value)
        signInEmailUser(email.value, password.value)
    };

    return (
        <div className='container'>
            <form onSubmit={handleUserCreation} className='p-4 create-account-form mx-auto border border-dark border-2 rounded-3 text-center'>
                <h1 className='text-center mt-3 mb-5'>Start achieving your goals</h1>
                <div className="mb-3 text-start">
                    <label htmlFor="InputEmail" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="InputPassword" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="InputPassword" required/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="TermsOfServiceCheck" required/>
                    <label className="form-check-label" htmlFor="TermsOfServiceCheck">
                        {/* TODO: ADD LINKS TO BOTH (terms of service and privacy notice) */}
                        I agree to the Terms of Service and I have read the Privacy Notice.
                    </label>
                </div>
                <button type="submit" className="btn btn-dark">Create account</button>
            </form>
        </div>
    )
}

export default CreateAccountForm