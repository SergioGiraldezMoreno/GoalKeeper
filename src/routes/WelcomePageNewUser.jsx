import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthenticationContext } from '../firebase/authentication';

const WelcomePageNewUser = () => {

    const { currentUserAuth } = useContext(AuthenticationContext);

    return (
        <div className='container text-center'>
            <h1>Welcome {currentUserAuth.email}!</h1>
            <Link className='btn btn-outline-dark' to="/">Set up my profile</Link>    
            <Link to="/create-account" className="text-decoration-underline text-dark">skip configuration</Link>    
        </div>
    )
}

export default WelcomePageNewUser