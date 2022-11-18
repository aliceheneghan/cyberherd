// libraries
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

// style
import './_login.scss';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(true);

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);


    try {
      const response = await axios.post(
        `http://localhost:4000/api/user/login`,
        {
          email: formData.get('email'),
          password: formData.get('password'),
        }
      );
      console.log("login response:",response)
      if (response.data.success) {
        setError('');
        setLoggedIn(true);
        navigate(`/dashboard/${response.data.id}`);
      } else {
        setError(response.data.message);
      }
      console.log(response);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <label for="email">
          <input
            id="email-log"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            name="email"
            placeholder="email"
          />
        </label>

        <label for="password">
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
          {/* <Link to="/sign-up">forgot password?</Link> */}
          <Link className="not-registered" to="/sign-up">
            not registered yet?
          </Link>
        </div>

        <button className="button-log">Login</button>
      </form>

      <div>{error ? <p>{error}</p> : null}</div>
    </div>
  );
}
