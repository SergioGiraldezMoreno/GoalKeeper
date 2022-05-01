import React, { useEffect, useState } from 'react'
import MilestoneField from './MilestoneField';

const CreateGoalPopup = () => {

    // TODO: ADD THE OPTION TO SEND THE GOAL INFO AS ARGS AND OPEN THE POPUP WITH THE INFO FILLED
   
    const [milestones, setMilestones] = useState([
            { id: "1", title: "", date: "" }
          ]);

    useEffect(()=>{},[milestones])

    const handleGoalCreation = (event) => {
        console.log('under dev: create goal.')
    }

    const updateMilestone = (newMilestoneInfo) => {
        var index = milestones.findIndex((milestone) => {
            return milestone.id === newMilestoneInfo.id;
        })
        milestones[index] = newMilestoneInfo;
        setMilestones([...milestones])
    }

    const addMilestone = (event) => {
        event.preventDefault();
        event.currentTarget.blur()
        const newMilestone = { id: getNextId(), title: "", date: "" };
        milestones.push(newMilestone)
        setMilestones([...milestones])
    }

    const getNextId = () => {
        if (milestones.length === 0){
            return "1"
        }
        const allIds = milestones.map(milestone => milestone.id)
        const lastId = Math.max(...allIds) 
        const newId = lastId + 1;
        return String(newId)
    }

    const removeMilestone = (event) => {
        event.preventDefault();
        var index = milestones.findIndex((milestone) => {
            return milestone.id === event.target.id;
        })
        if (index !== -1) milestones.splice(index, 1);
        setMilestones([...milestones])
    }

    const setHoverSrc = (event) => {
        event.target.src = require('../../../images/add-icon-hover.png')
    }

    const resetHoverSrc = (event) => {
        event.target.src = require('../../../images/add-icon.png')
    }

    const getSortedMilestones = (milestones) => {
        const sortedMilestones = milestones.sort((a, b) => {
            if (a.date === "" && b.date === ""){
                return parseInt(a.id) - parseInt(b.id)
            } else if (a.date === ""){
                return 1
            } else if (b.date === ""){
                return -1
            } else {
                return new Date(a.date).getTime() - new Date(b.date).getTime()
            }
        })
        return sortedMilestones
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
                                    <input type="name" name="name" className="form-control" placeholder="Title" id="InputGoalName" required/>
                                </div>
                                <div className='col d-flex align-items-center ps-0'>
                                    <select className="form-select" aria-label=".form-select-sm">
                                        <option value="0" defaultValue>Category</option>
                                        <option value="1">Sport</option>
                                        <option value="2">Food</option>
                                        <option value="3">Study</option>
                                        <option value="4">Custom</option> 
                                        {/* TODO: ADD CATEGORY CREATION */}
                                    </select>
                                </div>
                            </div>
                            <fieldset className='form-group border p-2'>
                                <legend className="col-form-label col-sm-2 pt-0">Milestones</legend>
                                <div className="mb-3 text-start row">
                                    {getSortedMilestones(milestones).map(milestone => {
                                        return (
                                            <div className='d-flex align-items-center my-1' key={milestone.id}>
                                                <MilestoneField milestone={milestone} updateMilestoneHandler={updateMilestone} />
                                                <button className='btn p-0 mx-1' onClick={removeMilestone} style={{maxHeight:"1.5em", height:"1.5em"}}>
                                                    <img className='h-100' src={require('../../../images/remove-icon.png')} id={milestone.id} alt="" />
                                                </button>
                                            </div>
                                        )}
                                    )}
                                </div>
                                <button className='btn p-0 mx-1' onClick={addMilestone} style={{width:"2.5em", height:"2.5em"}}>
                                    <img onMouseOver={setHoverSrc} onMouseLeave={resetHoverSrc} className='h-100' src={require('../../../images/add-icon.png')} alt="" />
                                </button>
                            </fieldset>
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