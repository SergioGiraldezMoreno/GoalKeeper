import React, { useContext } from 'react'
import { AuthenticationContext } from '../firebase/authentication'
import TrophiesSection from './TrophiesSection'

const UserGoalsTopSection = () => {
    const { currentUserInfo } = useContext(AuthenticationContext)
    return (
        <section className='goals-top-panel'>
            <div className='row h-100'>
                <div className='col-8 h-100 d-flex flex-column align-items-start'>
                    <h1 className='big-title mt-auto'>Hi {!!currentUserInfo ? currentUserInfo.nickName : "" }!</h1>
                    <TrophiesSection />
                </div>
                <div className='col-3 h-100 d-flex flex-column align-items-center'>
                    <img className="h-100 mx-auto mb-auto" src={require('../images/white-profile-border-icon.png')} alt="" />
                </div>
            </div>
        </section>
        
    )
}

export default UserGoalsTopSection