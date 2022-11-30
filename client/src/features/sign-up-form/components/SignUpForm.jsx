// libraries
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// style
import './_sign-up.scss';

export default function SignUpForm() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('testing123');
    const formData = new FormData(e.target);

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
    <div className='connect-page'>
      {/* <img src="http://localhost:4000/images/32ab7a21e3b9bbbe00fc333276a68951"/> */}

      <form onSubmit={handleSubmit}>
        <label>
          <input
            id='user-name'
            onChange={(e) => setUserName(e.target.value)}
            type='text'
            value={userName}
            placeholder='userName'
            name='userName'
          />
        </label>

        <label htmlFor='email'>
          <input
            id='email-sign'
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            value={email}
            placeholder='email'
            name='email'
          />
        </label>

        <label htmlFor='password'>
          <input
            id='password-sign'
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            value={password}
            placeholder='password'
            name='password'
          />
        </label>

        <label htmlFor='dob'>
          <input
            id='dob'
            onChange={(e) => setDateOfBirth(e.target.value)}
            type='date'
            value={dateOfBirth}
            placeholder='dateOfBirth'
            name='dateOfBirth'
          />
        </label>

        <div className='file-upload'>
          <label htmlFor='image'>Select image for upload </label>
          <input
            id='image-upload'
            type='file'
            accept='.jpg,.png,.jpeg'
            name='image'
          />
        </div>
        
        <br />
        <button className='button-sign' type='submit'>
          Sign Up
        </button>
      </form>
      <div>{error ? <p>{error}</p> : null}</div>
    </div>
  );
}