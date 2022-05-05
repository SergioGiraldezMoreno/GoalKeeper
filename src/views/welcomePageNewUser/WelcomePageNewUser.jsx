import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserOptionsHeader from '../../components/UserOptionsHeader';
import { AuthenticationContext } from '../../firebase/authentication';
import { getUserInfoByEmailPromise, updateUserInfoPromise } from '../../firebase/userCollectionOperations';

const WelcomePageNewUser = () => {

    const { currentUserInfo, setCurrentUserInfo } = useContext(AuthenticationContext);
    let navigate = useNavigate();
    
    const handleUserNickName = (event) => {
        event.preventDefault();
        const { nickName } = event.target.elements;
        updateUserInfoPromise(currentUserInfo.id, {nickName: nickName.value}).then(
            function(){
                getUserInfoByEmailPromise(currentUserInfo.email).then(
                    function(response){
                        const userInfo = {...response.docs[0].data(), id: response.docs[0].id}
                        setCurrentUserInfo(userInfo)
                        navigate("/user-goals", {replace: true})
                    },
                    function(error){
                        console.log('Error code:', error.code)
                        console.log('msg: ', error.message)
                    }
                )
            },
            function(error){
                console.log('Error code:', error.code)
                console.log('msg: ', error.message)
            }
        )
    }


    return (
        <>  
            <UserOptionsHeader />
            <div className='container mt-4'>
                <form onSubmit={handleUserNickName} className='p-4 small-form mx-auto border border-dark border-2 rounded-3 text-center'>
                    <h1 className='text-center mt-3 mb-5'>Welcome to GoalKeeper</h1>
                    <div className="mb-3 text-start">
                        <label htmlFor="InputNickName" className="form-label">How should we call you?</label>
                        <input type="text" name="nickName" className="form-control" id="InputNickName" required/>
                    </div>
                    <div className="mb-2">
                        <button type="submit" className="btn btn-dark">Continue</button>
                    </div>
                    <div className="mb-3">
                        <Link to="/" className="text-decoration-underline text-dark">Skip</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default WelcomePageNewUser