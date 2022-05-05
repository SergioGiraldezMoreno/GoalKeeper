import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from "@testing-library/react";
import LandPageHeader from "./LandPageHeader";
import { AuthenticationContext } from '../../../firebase/authentication'
import { BrowserRouter } from 'react-router-dom';

function renderHeader(currentUserAuth) {
    return render(
        <BrowserRouter>
            <AuthenticationContext.Provider value={{ currentUserAuth }}>
                <LandPageHeader />
            </AuthenticationContext.Provider>
        </BrowserRouter>

    )
}


const userCollectionOperations = require('../../../firebase/userCollectionOperations');

jest.mock('../../../firebase/userCollectionOperations');


test('component do render without user', () => {
    const component = renderHeader(null)
    expect(component).toBeDefined()
})

test('component do render with user', () => {
    const user = "user authenticated"
    const component = renderHeader(user)
    expect(component).toBeDefined()
})

test('sign out button togles the sign out authentication call', () => {
    const user = "user authenticated"
    const component = renderHeader(user)
    const signOutLinks = component.getAllByText('sign out')
    const signOutCapLinks = component.getAllByText('Sign out')
    const concatenatedLinks = [...signOutLinks, ...signOutCapLinks]
    userCollectionOperations.signOutPromise.mockResolvedValue()
    concatenatedLinks.forEach(link =>{
        fireEvent.click(link)
    })
    expect(userCollectionOperations.signOutPromise).toHaveBeenCalledTimes(concatenatedLinks.length)

})

