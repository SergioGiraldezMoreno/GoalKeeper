import React, { useRef, useState } from 'react'

const MilestoneField = (props) => {

    const [milestone, setMilestone] = useState(props.milestone);
    const dateRef = useRef()

    const updateTitleInfo = (event) => {
        event.preventDefault();
        milestone.title = event.target.value
        setMilestone(milestone)
        props.updateMilestoneHandler(milestone)
    }

    const updateDateInfo = (event) => {
        event.preventDefault();
        milestone.date = event.target.value
        setMilestone(milestone)
        props.updateMilestoneHandler(milestone)
    }

    const clearDate = (event) => {
        event.preventDefault();
        milestone.date = ""
        dateRef.current.value = ""
        setMilestone(milestone)
        event.target.blur()
        props.updateMilestoneHandler(milestone)
    }

    return (
        <div className='col d-flex align-items-center'>
            <input type="text" defaultValue={milestone.title} name="milestone" className="form-control me-2" placeholder='milestone title' onChange={updateTitleInfo} />
            <input type="date" defaultValue={milestone.date} name="date" className="form-control" ref={dateRef}  onChange={updateDateInfo} required/>
            <button className='btn d-none d-md-block' onClick={clearDate} style={{position: "absolute", marginLeft: "71%", color:"red"}}>x</button>
        </div>
    )
}

export default MilestoneField