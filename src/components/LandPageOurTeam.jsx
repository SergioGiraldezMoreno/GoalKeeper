import React from 'react'
import TeamImagesCarousel from './TeamImagesCarousel'

const LandPageOurTeam = () => {
  return (
    <div className='h-100 text-center container pt-3 pb-5'>
        <h1 className='fw-bold'>OUR TEAM</h1>
        <div className='p-3'>
            <p>Our team is composed with a huge variety of professionals, and each of them is an 
                expert in his field!
            </p>
            <TeamImagesCarousel />
        </div>
    </div>
  )
}

export default LandPageOurTeam