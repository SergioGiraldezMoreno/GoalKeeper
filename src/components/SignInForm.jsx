import React from 'react'
import { Link } from 'react-router-dom'

const SignInForm = () => {
  return (
    <div className='container'>
        <form className='p-4 create-account-form mx-auto border border-dark border-2 rounded-3 text-center'>
            <h1 className='text-center mt-3 mb-5'>Start achieving your goals</h1>
            <div className="mb-3 text-start">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-4 text-start">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-dark">Sign in</button>
            </div>
            <div className="mb-3">
                <Link to="/create-account" className="text-decoration-underline text-dark">I don't have an account</Link>
            </div>
        </form>
    </div>
  )
}

export default SignInForm