import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../../../firebase/authentication";
import { signOutPromise } from "../../../firebase/userCollectionOperations";
import '../styles/LandPageHeader.css';


const LandPageHeader = ({isExpanded}) => {

  const { currentUserAuth } = useContext(AuthenticationContext);

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


  return (
    <>
      <div className={isExpanded ? 'expanded-header p-4 text-dark' : 'hide-slow bg-dark'}>
          <div className={isExpanded ? "col-12 h-40 d-flex justify-content-center align-items-center": 'd-none'}>
            <h1 className="fw-bold big-title">Welcome to Goal Keeper</h1>
          </div>
          <div className={isExpanded ? "row h-25": 'd-none'}>
            <img className='h-100 w-auto m-auto' src={require('../../../images/trophy.png')} alt="trophy" />
          </div>
          <div className={isExpanded ? "row justify-content-center h-25 col-10 text-center m-auto": 'd-none'}>
              {/* TODO: IF LOGGED IN SHOW THE NAME INSTEAD OF THE BUTTONS */}
              <Link className={!!currentUserAuth ? "d-none" : "my-auto border-3 col-5 col-lg-3 btn btn-outline-dark"} to="/create-account">create account</Link>
              <Link className={!!currentUserAuth ? "my-auto border-3 col-5 col-lg-3 btn btn-outline-dark" : "d-none"} to="/user-goals">my account</Link>
              <span className='col-1'></span>
              <Link className={!!currentUserAuth ? "d-none" : "my-auto border-3 col-5 col-lg-3 btn btn-outline-dark"} to="/sign-in">sign in</Link>
              <button onClick={signOut} className={!!currentUserAuth ? "my-auto border-3 col-5 col-lg-3 btn btn-outline-dark" : "d-none"}>sign out</button>
          </div>
          <div className={isExpanded ? "row h-10 d-flex flex-column justify-content-center align-items-end": 'd-none'}>
            <p className='mt-auto mb-0 text-center'>scroll down</p>
            <img className={isExpanded ? 'mx-auto w-auto land-page-scroll-img' : 'd-none'} src={require('../../../images/double-arrow.png')} alt="scroll down" />
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
                <a className="nav-link" href="#our_methods_section">Our methods</a> {/* TODO: MOVE PAGE TO TITLE DOM */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#our_team_section">Our whatever</a> {/* TODO: MOVE PAGE TO TITLE DOM */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#our_team_section">Our team</a> {/* TODO: MOVE PAGE TO TITLE DOM */}
              </li>
            </ul>
            {/* TODO: MY ACCOUNT BUTTON IF LOGGED IN INSTED OF SIGN IN */}
            <div className={!!currentUserAuth ? "d-none d-md-block nav-item dropdown ms-auto" : "d-none"}>
              <a className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img className="header-img-size" src={require('../../../images/white-profile-border-icon.png')} alt="profil user" />
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/user-goals">Goals</Link></li>
                <li><Link className="dropdown-item" to="/under-development">Settings</Link></li>
                <li><button className="dropdown-item" onClick={signOut}>Sign out</button></li>
              </ul>
            </div>
            <div className={!!currentUserAuth ? "d-block d-md-none nav-item dropdown ms-auto" : "d-none"}>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <img className="header-img-size mt-2" src={require('../../../images/white-profile-border-icon.png')} alt="profil user" />
                </li>
                <li className="nav-item">
                  <Link className={!!currentUserAuth ?  'nav-link btn d-md-none m-auto col-6' : 'd-none'}  to="/user-goals">Goals</Link>
                </li>
                <li className="nav-item">
                  <Link className={!!currentUserAuth ?  'nav-link btn d-md-none m-auto col-6' : 'd-none'}  to="/under-development">Settings</Link>
                </li>
                <li className="nav-item">
                <button onClick={signOut} className={!!currentUserAuth ?  'nav-link btn d-md-none m-auto col-6' : 'd-none'}  to="/sign-in">Sign out</button>
                </li>
              </ul>
            </div>
            <Link className={!!currentUserAuth ? 'd-none' : 'btn btn-light d-none d-md-block ms-auto'}  to="/sign-in">sign in</Link>
            <Link className={!!currentUserAuth ? 'd-none' : 'btn btn-light d-md-none col-8 mt-5 mb-2'}  to="/sign-in">sign in</Link>
          </div>
        </nav>
      </div>
    </>
    
  )
}


export default LandPageHeader