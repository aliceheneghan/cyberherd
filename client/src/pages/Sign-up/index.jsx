// libraries
import React, { useState } from "react";
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

// style
import '../../scss/layout/_sign-up.scss';

function SignUp() {
 const [userName, setUserName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [dateOfBirth, setDateOfBirth] = useState("");
 const [error, setError] = useState("");
 
 const navigate = useNavigate();


 const handleSubmit = async (e) => {
  e.preventDefault();

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

    <label for='user-name'>user name
    <input id='user-name'
    onChange={(e) => setUserName(e.target.value)}
    type='text' 
    value={userName}
    placeholder='userName' 
    />
    </label>

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
    
    <label for='dob'>date of birth
    <input id='dob'
    onChange={(e) => setDateOfBirth(e.target.value)}
    type='date' 
    value={dateOfBirth}
    placeholder='dateOfBirth' 
    />
    </label>

    <br/>
    <button>Sing Up</button>
    <button>Sign In</button>
    </form>

    <div>
      {error ? <p>{error}</p> : null}
    </div>
  </div>
)
}


export default SignUp;