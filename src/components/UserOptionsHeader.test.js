import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from "@testing-library/react";
import UserOptionsHeader from "./UserOptionsHeader";
import { AuthenticationContext } from '../firebase/authentication'
import { BrowserRouter } from 'react-router-dom';
// import { signOutPromise } from "../firebase/userCollectionOperations";

function renderHeader(currentUserAuth) {
    return render(
        <BrowserRouter>
            <AuthenticationContext.Provider value={{ currentUserAuth }}>
                <UserOptionsHeader />
            </AuthenticationContext.Provider>
        </BrowserRouter>

    )
}

// // mocking user operation functions
// jest.mock('../firebase/userCollectionOperations', () => {
//     const originalModule = jest.requireActual('../firebase/userCollectionOperations');
  
//     //Mock the default export and named export 'foo'
//     return {
//       __esModule: true,
//       ...originalModule,
//       signOutPromise: jest.fn(() => ''),
//     };
//   });


const userCollectionOperations = require('../firebase/userCollectionOperations');

jest.mock('../firebase/userCollectionOperations');


test('component do render without user', () => {
    const component = renderHeader(null)
    expect(component).toBeDefined()
})

test('links to sign out hidden when user not logged in', () =>{
    const component = renderHeader(null)
    const signOutLinks = component.getAllByText('sign out')
    signOutLinks.forEach(link =>{
        expect(link).toHaveClass('d-none')
    })
})

test('component do render with user', () => {
    const user = "user authenticated"
    const component = renderHeader(user)
    expect(component).toBeDefined()
})

test('links to sign in hidden when user logged in', () =>{
    const user = "user authenticated"
    const component = renderHeader(user)
    const signInLinks = component.getAllByText('sign in')
    signInLinks.forEach(link =>{
        expect(link).toHaveClass('d-none')
    })
})

test('sign out button togles the sign out authentication call', () => {
    const user = "user authenticated"
    const component = renderHeader(user)
    const signOutLinks = component.getAllByText('sign out')
    userCollectionOperations.signOutPromise.mockResolvedValue()
    signOutLinks.forEach(link =>{
        fireEvent.click(link)
    })
    expect(userCollectionOperations.signOutPromise).toHaveBeenCalledTimes(signOutLinks.length)

})

