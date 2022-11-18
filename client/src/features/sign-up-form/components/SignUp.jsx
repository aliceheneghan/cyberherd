// libraries
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// style
import './_sign-up.scss';

export default function SignUp() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('testing123');
    const formData = new FormData(e.target);

    // const user =  {
    //   userName: formData.get("userName"),
    //   email: formData.get("email"),
    //   password: formData.get("password"),
    //   dateOfBirth: formData.get("dateOfBirth"),
    //   // image: formData.get("image")
    // }
    // console.log(user)
    try {
      await axios.post(`http://localhost:4000/api/user/create`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setError('');
      navigate('/login');
    } catch (error) {
      setError(error?.response?.data?.message);
      console.log(error?.response?.data?.message);
    }
  };

  return (
    <div className="connect-page">
      {/* <img src="http://localhost:4000/images/32ab7a21e3b9bbbe00fc333276a68951"/> */}

      <form onSubmit={handleSubmit}>
        <label for="user-name">
          <input
            id="user-name"
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            value={userName}
            placeholder="userName"
            name="userName"
          />
        </label>

        <label for="email">
          <input
            id="email-sign"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="email"
            name="email"
          />
        </label>

        <label for="password">
          <input
            id="password-sign"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            placeholder="password"
            name="password"
          />
        </label>

        <label for="dob">
          <input
            id="dob"
            onChange={(e) => setDateOfBirth(e.target.value)}
            type="date"
            value={dateOfBirth}
            placeholder="dateOfBirth"
            name="dateOfBirth"
          />
        </label>

        <label>
          Select image for upload
          <input type="file" accept="image/jpg" name="image" />
        </label>

        <br />
        <button className="button-sign" type="submit">
          Sign Up
        </button>
      </form>

      <div>{error ? <p>{error}</p> : null}</div>
    </div>
  );
}
