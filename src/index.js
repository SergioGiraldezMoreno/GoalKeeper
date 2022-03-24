import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import App from './App';
import CreateAccount from './routes/CreateAccount'
import SignIn from './routes/SignIn';
import reportWebVitals from './reportWebVitals';
import PageUnderDevelopment from './routes/PageUnderDevelopment';
import WelcomePageNewUser from './routes/WelcomePageNewUser';
import { AuthenticationProvider } from './firebase/authentication';

ReactDOM.render(
  <AuthenticationProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="new-account" element={<WelcomePageNewUser />} />
        <Route path="under-development" element={<PageUnderDevelopment />} />
      </Routes>
    </BrowserRouter>
  </AuthenticationProvider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
