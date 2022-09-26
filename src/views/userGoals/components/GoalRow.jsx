import React from 'react'

const GoalRow = (props) => {
    return (
        <tr>
            <th scope="row">{props.goal.title}</th>
            <td>In progress</td>
            <td>{props.goal.description}</td>
        </tr>
    )
}

export default GoalRow