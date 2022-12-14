// libraries
import React from 'react';

// features
import LoginForm from '../features/login-form';
import Navbar from '../features/navbar/index.jsx';

// styled-components
import { DefaultNavbar } from '../styled-components/navBar-styled-component';

export default function LoginPage() {
  return (
    <>
      <DefaultNavbar noSearchBar>
        <Navbar />
      </DefaultNavbar>
      <div className="login-form-page">
        <LoginForm />
      </div>
    </>
  );
}