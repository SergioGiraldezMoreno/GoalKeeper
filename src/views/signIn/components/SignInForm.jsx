import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInEmailPromise } from '../../../firebase/userCollectionOperations';

const SignInForm = () => {

    let navigate = useNavigate();
    
    const handleUserSignIn = (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        signInEmailPromise(email.value, password.value).then(
            function(){
                navigate("/user-goals", {replace: true})
                console.log('User logged in')
            },
            function(error){
                alert(error.message)
                console.log('Error code:', error.code)
                console.log('msg: ', error.message)
            }
        )
    }

    return (
        <div className='container'>
            <form onSubmit={handleUserSignIn} className='p-4 small-form mx-auto border border-dark border-2 rounded-3 text-center'>
                <h1 className='text-center mt-3 mb-5'>Welcome back!</h1>
                <div className="mb-3 text-start">
                    <label htmlFor="InputEmail" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-5 text-start">
                    <label htmlFor="InputPassword" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="InputPassword" />
                </div>
                <div className="mb-2">
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