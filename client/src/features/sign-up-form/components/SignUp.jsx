// libraries
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// style
import "./_sign-up.scss";

function SignUp() {
 const [userName, setUserName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [dateOfBirth, setDateOfBirth] = useState("");
 const [error, setError] = useState("");
 
 const navigate = useNavigate();

 const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("testing123");
  const formData = new FormData(e.target);

  try {
    await axios.post(`http://localhost:4000/api/user/create`, {
      userName: formData.get("userName"),
      email: formData.get("email"),
      password: formData.get("password"),
      dateOfBirth: formData.get("dateOfBirth"),
    });
    setError("");
    navigate("/login");
  } catch (error) {
    setError(error)
    console.log(error)
  }
 };

 return (
  <div className='connect-page'>
    <form onSubmit={handleSubmit}>

    <label for='user-name'>
    <input id='user-name'
    onChange={(e) => setUserName(e.target.value)}
    type='text' 
    value={userName}
    placeholder='userName' 
    name="userName"
    />
    </label>

    <label for='email'>
    <input id='email-sign'
    onChange={(e) => setEmail(e.target.value)}
    type='email' 
    value={email}
    placeholder='email' 
    name="email"
    />
    </label>
    
    <label for='password'>
    <input id='password-sign'
    onChange={(e) => setPassword(e.target.value)}
    type='password' 
    value={password}
    placeholder='password' 
    name="password"
    />
    </label>
    
    <label for='dob'>
    <input id='dob'
    onChange={(e) => setDateOfBirth(e.target.value)}
    type='date' 
    value={dateOfBirth}
    placeholder='dateOfBirth' 
    name="dateOfBirth"
    />
    </label>

    <br/>
    <button className="button-sign" type='submit'>Sign Up</button>
    </form>

    <div>
      {error ? <p>{error}</p> : null}
    </div>
  </div>
)
}

export default SignUp;