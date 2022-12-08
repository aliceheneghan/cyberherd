// libraries
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

// context
import { Context } from '../../../context/Context.jsx';

// style
import './_login-form.scss';
import { LoginBtn } from '../../../styled-components/buttons.js';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const [loggedIn, setLoggedIn] = useState(true);
  const { loggedIn, setLoggedIn, setUserID } = useContext(Context);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await axios.post(`/api/user/login`, {
        email: formData.get('email'),
        password: formData.get('password'),
      });
      console.log('login response:', response);
      if (response.data.success) {
        setError('');
        setLoggedIn(true);
        setUserID(response.data.id);
        console.log('response data id: ', response.data.id);
        navigate(`/dashboard/${response.data.id}`);
      } else {
        setError(response.data.message);
      }
      console.log(response);
    } catch (error) {
      setError(error?.response?.data?.message);
      console.log(error.message);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">
          <input
            id="email-log"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            name="email"
            placeholder="email"
          />
        </label>

        <label htmlFor="password">
          <input
            id="password-log"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            name="password"
            placeholder="password"
          />
        </label>
        <div>
          <Link className="forgot-password" to="/sign-up">
            forgot password?
          </Link>
          <Link className="not-registered" to="/sign-up">
            not registered yet?
          </Link>
        </div>
        
        <LoginBtn type="submit">Login</LoginBtn>
      </form>
      <div>{error ? <p>{error}</p> : null}</div>
    </div>
  );
}
