const LandPageHeader = () => {
  return (
    // TODO: convert the container to a nav bar when scrolling
    <div className="container h-100 p-4 text-dark">
        <div className="col-12 h-25 d-flex justify-content-center align-items-center">
          <h1 className="fw-bold">Welcome to Goal Keeper</h1>
        </div>
        <div className="row h-25">
          <img className='h-100 w-auto m-auto' src={require('../images/trophy.png')} alt="" />
        </div>
        <div className="row h-25 col-10 text-center m-auto">
            <a className="m-auto border-3 col-5 btn btn-outline-dark" href="#">Create account</a>
            <a className="m-auto border-3 col-5 btn btn-outline-dark" href="#">Log in</a>
        </div>
        <div className="row h-25 d-flex flex-column justify-content-center align-items-end">
          <p className='mt-auto mb-0 text-center'>scroll down</p>
          <img style={{height: "30px"}} className='mx-auto w-auto' src={require('../images/double-arrow.png')} alt="scroll down" />
        </div>
    </div>
  )
}

export default LandPageHeader