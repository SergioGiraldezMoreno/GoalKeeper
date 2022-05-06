import React from "react";
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount } from 'enzyme';
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from "@testing-library/react";
import MilestoneField from "./MilestoneField";


Enzyme.configure({ adapter: new Adapter() });

function renderMilestone() {
    return render(
        <MilestoneField milestone={{ id: "10", title: "", date: "date 1" }}  />
    )
}

test('render component', () => {
    const component = renderMilestone()
    expect(component).toBeDefined()
})

test('clear date when button clicked', () => {
    const wrapper = mount(<MilestoneField 
        milestone={{ id: "10", title: "", date: "2022-05-18" }}
        updateMilestoneHandler={jest.fn()}  />);
    const date = wrapper.find({name: 'date'})
    expect(date.instance().value).toBe("2022-05-18")
    wrapper.find('.btn').simulate('click')
    expect(date.instance().value).toBe("")
})