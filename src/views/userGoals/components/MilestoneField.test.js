import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from "@testing-library/react";
import MilestoneField from "./MilestoneField";

function renderMilestone() {
    return render(
        <MilestoneField milestone={{ id: "10", title: "", date: "" }} updateMilestoneHandler={jest.fn()} />
    )
}

test('render component', () => {
    const component = renderMilestone()
    expect(component).toBeDefined()
})

test('list of milestones increase when add button clicked', () => {
    const component = renderMilestone()
    const button = component.getByLabelText('clear-date-button')
    fireEvent.click(button)
    const date = component.getByLabelText('milestone-date')
    expect(date.value).toBe("")
})