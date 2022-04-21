import React from 'react'

const CreateGoalPopup = () => {
    const handleGoalCreation = (event) => {
        console.log('under dev: create goal.')
    }
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">CREATE A NEW GOAL</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className='mx-auto rounded-3 text-center'>
                            <div className="mb-3 text-start row">
                                <div className='col d-flex align-items-center'>
                                    <label htmlFor="InputGoalName" className="form-label my-0 me-2">Name</label>
                                    <input type="name" name="name" className="form-control" id="InputGoalName" required/>
                                </div>
                                <div className='col'>
                                    <select class="form-select" aria-label=".form-select-sm">
                                        <option selected>Choose category</option>
                                        <option value="1">Sport</option>
                                        <option value="2">Food</option>
                                        <option value="3">Study</option>
                                        <option value="4">Custom</option> 
                                        {/* TODO: ADD CATEGORY CREATION */}
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button onClick={handleGoalCreation} type="button" className="btn btn-primary">Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateGoalPopup