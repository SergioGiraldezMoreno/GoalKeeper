import { Link } from "react-router-dom";

const LandPageHeader = ({isExpanded}) => {
  return (
    <>
      <div className={isExpanded ? 'expanded-header p-4 text-dark' : 'hide-slow bg-dark'}>
          <div className={isExpanded ? "col-12 h-40 d-flex justify-content-center align-items-center": 'd-none'}>
            <h1 className="fw-bold big-title">Welcome to Goal Keeper</h1>
          </div>
          <div className={isExpanded ? "row h-25": 'd-none'}>
            <img className='h-100 w-auto m-auto' src={require('../images/trophy.png')} alt="trophy image" />
          </div>
          <div className={isExpanded ? "row justify-content-center h-25 col-10 text-center m-auto": 'd-none'}>
              {/* TODO: IF LOGGED IN SHOW THE NAME INSTEAD OF THE BUTTONS */}
              <Link className="my-auto border-3 col-5 col-lg-3 btn btn-outline-dark" to="/create-account">Create account</Link>
              <span className='col-1'></span>
              <Link className="my-auto border-3 col-5 col-lg-3 btn btn-outline-dark" to="/sign-in">Sign in</Link>
          </div>
          <div className={isExpanded ? "row h-10 d-flex flex-column justify-content-center align-items-end": 'd-none'}>
            <p className='mt-auto mb-0 text-center'>scroll down</p>
            <img className={isExpanded ? 'mx-auto w-auto land-page-scroll-img' : 'd-none'} src={require('../images/double-arrow.png')} alt="scroll down" />
          </div>
      </div>
      <div className={isExpanded ? 'd-none' : 'generic-header text-light bg-dark text-center'}>
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
    </>
    
  )
}


export default LandPageHeader