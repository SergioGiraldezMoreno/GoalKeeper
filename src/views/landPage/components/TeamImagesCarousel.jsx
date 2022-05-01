import React from 'react'

const TeamImagesCarousel = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100 bg-dark text-white">
                    <img src={require('../../../images/designer-portrait.jpg')} className="card-img-top" alt="designer member portrait" />
                    <div className="card-body ">
                        <h4 className="card-title" style={{color: '#cc66ff'}}>Designer</h4>
                        <h6 className="card-text" style={{color: '#ccccff'}}>Sergi Giraldez</h6>
                        <p className="card-text">Gifted with awesome talent and a incredible experience in the field.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100 bg-dark text-white">
                    <img src={require('../../../images/frontend-portrait.jpg')} className="card-img-top" alt="frontend member portrait" />
                    <div className="card-body ">
                        <h4 className="card-title" style={{color: '#cc66ff'}}>Front-end Dev</h4>
                        <h6 className="card-text" style={{color: '#ccccff'}}>Sergi Giraldez</h6>
                        <p className="card-text">Outstanding in all the front-end frameworks and programming lenguajes you can imagine, with tons of projects in his portfolio.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100 bg-dark text-white">
                    <img src={require('../../../images/backend-portrait.jpg')} className="card-img-top" alt="backend member portrait" />
                    <div className="card-body ">
                        <h4 className="card-title" style={{color: '#cc66ff'}}>Back-end Dev</h4>
                        <h6 className="card-text" style={{color: '#ccccff'}}>Sergi Giraldez</h6>
                        <p className="card-text">With a large amount of knowledge in software arquitecture, scalability and highly reliable code.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamImagesCarousel