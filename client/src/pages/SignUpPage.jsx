// libraries
import React from 'react';

// features
import Navbar from '../features/navbar';
import SignUpForm from '../features/sign-up-form';

// styled-components
import { DefaultNavbar } from '../styled-components/navBar-styled-component';

export default function SignUpPage() {
  return (
    <>
      <DefaultNavbar noSearchBar>
        <Navbar />
      </DefaultNavbar>
      <div className="sign-form-page">
        <SignUpForm />
      </div>
    </>
  );
}
