import React from 'react'
import { Link } from 'react-router-dom'

const GenericHeader = () => {
  return (
    <div className='generic-header'>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark px-3">
          <Link className="navbar-brand" to="/">GoalKeeper</Link> {/* TODO: ADD LINK TO TOP */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Our methods</a> {/* TODO: MOVE PAGE TO TITLE DOM */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Our whatever</a> {/* TODO: MOVE PAGE TO TITLE DOM */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Our team</a> {/* TODO: MOVE PAGE TO TITLE DOM */}
              </li>
            </ul>
            {/* TODO: MY ACCOUNT BUTTON IF LOGGED IN INSTED OF SIGN IN */}
            <Link className='btn btn-light d-none d-md-block ms-auto'  to="/sign-in">sign in</Link>
            <Link className='btn btn-light d-md-none col-8 mt-5 mb-2'  to="/sign-in">sign in</Link>
          </div>
        </nav>
    </div>
  )
}

export default GenericHeader