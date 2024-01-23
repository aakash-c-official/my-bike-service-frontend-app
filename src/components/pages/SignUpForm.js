import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const navigate=useNavigate()

  async function registerUser(){
 const response= await fetch('http://localhost:1337/api/register',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(signupData)
  })
  const data=await response.json()
  console.log(data)
  if(data.status==='ok'){
    navigate('/signin')
  }
  else
  alert('Retry')
  }

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here with signupData
    registerUser();
    console.log('Signup data:', signupData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  return (
    <form onSubmit={handleSignup}>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        name="username"
        value={signupData.username}
        onChange={handleChange}
        required
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        name="email"
        type="email"
        value={signupData.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        name="password"
        type="password"
        value={signupData.password}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Sign Up
      </Button>
    </form>
  );
}

export default SignUpForm;
