// libraries
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

// style
import '../../scss/layout/_login.scss';

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
  
    <label for='email'>email</label>
    <input id='email'
    onChange={(e) => setEmail(e.target.value)}
    type='email' 
    placeholder='email' 
    />
    
    <label for='password'>password</label>
    <input id='password'
    onChange={(e) => setPassword(e.target.value)}
    type='password' 
    placeholder='password' 
    />
      
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