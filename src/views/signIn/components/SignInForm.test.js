import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from "@testing-library/react";
import SignInForm from "./SignInForm";
import { BrowserRouter } from 'react-router-dom';


const userCollectionOperations = require('../../../firebase/userCollectionOperations');

jest.mock('../../../firebase/userCollectionOperations');


test('component renders', () =>{
    const component = render(
        <BrowserRouter>
            <SignInForm />
        </BrowserRouter>
        )
    expect(component).toBeDefined()
})


test('Sign in button triggers the function', () => {
    const component = render(
        <BrowserRouter>
            <SignInForm />
        </BrowserRouter>
        )
    const signInButton = component.getByText('Sign in')
    userCollectionOperations.signInEmailPromise.mockResolvedValue()
    fireEvent.click(signInButton)
    expect(userCollectionOperations.signInEmailPromise).toHaveBeenCalled()
    
})