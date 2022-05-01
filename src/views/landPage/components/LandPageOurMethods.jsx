import React from 'react'

const LandPageOurMethods = () => {
  return (
    <div id='our_methods_section' className='h-100 text-center container' style={{paddingTop: '14vh'}}>
        <h1 className='fw-bold'>OUR METHODS</h1>
        <div className='p-3'>
          <div className='text-md-start border-bottom border-dark border-2 my-5 my-md-3'>
            <h3>Our methods summarized</h3>          
            <p>Here will be a brief introduction to our methodology to motivate and help the people achieve their goals.</p>
          </div>
          <div className='text-md-end border-bottom border-dark border-2 my-5 my-md-3'>
            <h3>Where do we get our ideas from</h3>
            <p>Include also a list of recomended books that could give an idea of the kind of approach we follow.</p>
          </div>
          <div className='text-md-start my-5 my-md-3'>
            <h3>Studies and research</h3>          
            <p>A list of studies and a sumary of each of them.</p>
          </div>
        </div>
    </div>
  )
}

export default LandPageOurMethods