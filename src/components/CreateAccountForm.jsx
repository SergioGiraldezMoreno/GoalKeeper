import React from 'react'

const CreateAccountForm = () => {
  return (
    <div className='container'>
        <form className='p-4 create-account-form mx-auto border border-dark border-2 rounded-3 text-center'>
            <h1 className='text-center mt-3 mb-5'>Start achieving your goals</h1>
            <div className="mb-3 text-start">
                <label for="InputEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3 text-start">
                <label for="InputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="InputPassword" />
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="TermsOfServiceCheck" />
                <label className="form-check-label" for="TermsOfServiceCheck">
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