import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from "@testing-library/react";
import CreateGoalPopup from "./CreateGoalPopup";


test('render component', () => {
    const component = render(<CreateGoalPopup />)
    expect(component).toBeDefined()
})

test('list of milestones increase when add button clicked', () => {
    const component = render(<CreateGoalPopup />)
    const button = component.getByAltText('add milestone icon')
    const inputTextMilestones = component.queryAllByPlaceholderText('milestone title')
    const initialNumberOfMilestones = inputTextMilestones.length
    fireEvent.click(button)
    const milestonesAfterClick = component.queryAllByPlaceholderText('milestone title')
    expect(milestonesAfterClick.length).toBe(initialNumberOfMilestones+1)
})