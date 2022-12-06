// libraries
import React from 'react';

import Navbar from '../features/navbar/index.jsx';

// features
import LoginForm from '../features/login-form';

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
