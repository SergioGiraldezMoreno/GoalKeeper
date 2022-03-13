const LandPageHeader = () => {
  return (
    // TODO: convert the container to a nav bar when scrolling
    <div className="container-fluid bg-dark text-white">
        <h1 className="col-12 text-center">Welcome to Goal Keeper</h1>
        <div className="row text-center">
            <a className="m-auto col-4 btn btn-outline-light" href="#">Create account</a>
            <a className="m-auto col-4 btn btn-outline-light" href="#">Log in</a>
        </div>
    </div>
  )
}

export default LandPageHeader