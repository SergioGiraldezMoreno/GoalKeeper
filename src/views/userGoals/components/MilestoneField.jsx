import React, { useRef, useState } from 'react'

const MilestoneField = (props) => {

    const [milestone, setMilestone] = useState(props.milestone);
    const dateRefDesktop = useRef()
    const dateRefMobile = useRef()

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
        console.log(event.target)
        event.preventDefault();
        milestone.date = ""
        dateRefDesktop.current.value = ""
        dateRefMobile.current.value = ""
        setMilestone(milestone)
        event.target.blur()
        props.updateMilestoneHandler(milestone)
    }

    return (
        <>
        <div className='col d-none d-md-flex align-items-center'>
            <input type="text" defaultValue={milestone.title} name="milestone" className="form-control me-2" placeholder='milestone title' onChange={updateTitleInfo} />
            <input type="date" value={milestone.date} name="date" className="form-control" ref={dateRefDesktop}  onChange={updateDateInfo} required/>
            <button className='btn d-none d-md-block' onClick={clearDate} style={{position: "absolute", marginLeft: "71%", color:"red"}}>x</button>
        </div>
        <div className='col d-flex flex-column d-md-none align-items-center'>
            <input type="text" defaultValue={milestone.title} name="milestone" className="form-control" placeholder='milestone title' onChange={updateTitleInfo} />
            <div className='d-flex w-100'>
                <input type="date" value={milestone.date} name="date" className="form-control" ref={dateRefMobile}  onChange={updateDateInfo} required/>
                <button className='btn' onClick={clearDate} style={{position: "absolute", marginLeft: "60%", color:"red"}}>x</button>
            </div>
        </div>
        </>
    )
}

export default MilestoneField