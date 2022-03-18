import React from 'react'

const CreateAccountForm = () => {
  return (
    <div className='container'>
        <form className='p-4 create-account-form mx-auto border border-dark border-2 rounded-3 text-center'>
            <h1 className='text-center mt-3 mb-5'>Start achieving your goals</h1>
            <div class="mb-3 text-start">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3 text-start">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">
                    {/* TODO: ADD LINKS TO BOTH (terms of service and privacy notice) */}
                    I agree to the Terms of Service and I have read the Privacy Notice.
                </label>
            </div>
            <button type="submit" class="btn btn-dark">Create account</button>
        </form>
    </div>
  )
}

export default CreateAccountForm