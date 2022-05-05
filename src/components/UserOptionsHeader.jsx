import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthenticationContext } from '../firebase/authentication'
import { signOutPromise } from "../firebase/userCollectionOperations";

const UserOptionsHeader = () => {

  const { currentUserAuth } = useContext(AuthenticationContext)

  const signOut = () => {
    signOutPromise().then(
      function(){
        console.log('Successful sign out')
      },
      function(error){
        console.log('(Sign out) Error code:', error.code)
        console.log('(Sign out) msg: ', error.message)
      }
    )
  };
  // TODO: CHANGE THAT FOR A REALLY GENERIC ONE
  return (
    <div className='generic-header text-light bg-dark text-center'>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">GoalKeeper</Link> {/* TODO: ADD LINK TO TOP */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/user-goals">Goals</Link> {/* TODO: MOVE PAGE TO TITLE DOM */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/under-development">Account</Link> {/* TODO: MOVE PAGE TO TITLE DOM */}
              {/* TODO: CREATE MY SETTINGS PAGE (PAGE WITH DIFERENT TABS FOR INFO / SECURITY / PAYMENT ...) */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/under-development">Help</Link> {/* TODO: MOVE TO HELP PAGE (Q/A, topics... ) */}
            </li>
          </ul>
          {/* TODO: MY ACCOUNT BUTTON IF LOGGED IN INSTED OF SIGN IN */}
          <Link className={!!currentUserAuth ? 'd-none' : 'btn btn-light d-none d-md-block ms-auto'}  to="/sign-in">sign in</Link>
          <button onClick={signOut} className={!!currentUserAuth ? "btn btn-light d-none ms-auto d-md-block" : "d-none"}>sign out</button>
          <Link className={!!currentUserAuth ? 'd-none' : 'btn btn-light d-md-none col-8 mt-5 mb-2'}  to="/sign-in">sign in</Link>
          <button onClick={signOut} className={!!currentUserAuth ? "btn btn-light d-md-none  col-8 mt-5 mb-2" : "d-none"}>sign out</button>
        </div>
      </nav>
    </div>
  )
}

export default UserOptionsHeader