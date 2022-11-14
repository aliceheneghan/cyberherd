// libraries
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

// Style
import './_login.scss';

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const navigate = useNavigate();


 const handleSubmit = async (e) => {
  e.preventDefault();
 
  const formData = new FormData(e.target);

  try {
    await axios.post(`http://localhost:4000/api/user/create`, {
      email: formData.get("email"),
      password: formData.get("password"),
    });
    setError("");
    navigate("/dashboard");
  } catch (error) {
    setError(error)
    console.log(error)
  }
 };

  return (
    <div className='login-page'>
      <form onSubmit={handleSubmit}>
  
    <label for='email'>email
    <input id='email'
    onChange={(e) => setEmail(e.target.value)}
    type='email' 
    value={email}
    placeholder='email' 
    />
    </label>
    
    <label for='password'>password
    <input id='password'
    onChange={(e) => setPassword(e.target.value)}
    type='password' 
    value={password}
    placeholder='password' 
    />
    </label>
      
      <br/>
      <button>Login</button>
      </form>

      <div>
      {error ? <p>{error}</p> : null}
    </div>
    </div>
  )
}

export default Login;