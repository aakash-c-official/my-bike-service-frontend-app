import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import axios from "axios";

const roles = ["Client", "Admin", "Service Owner"];

function SignUpForm() {
  const [signupData, setSignupData] = useState({
    role: "",
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  async function registerUser() {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    });
    const data = await response.json();
    console.log(data);
    if (data.status === "ok") {
      navigate("/signin");
    } else alert("Retry");
  }

  const handleSignup =async (e) => {
    e.preventDefault();
    try{

      // Perform signup logic here with signupData
      // registerUser();
      await axios.post("/register",{signupData})
      // axios.get('/test')
      alert("Registration successful")
      console.log("Signup data:", signupData);
    }
    catch(err){
      alert("Registeration Failed")
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
      <LockOutlinedIcon />
    </Avatar> */}
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSignup} sx={{ mt: 1 }}>
          <FormControl fullWidth sx={{ width: "50%", mt: 3 }}>
            <InputLabel id="city-label">Select Role</InputLabel>
            <Select
              labelId="roles-label"
              id="roles-select"
              name="role"
              value={signupData.role}
              label="Select Role"
              onChange={handleChange}
              required
            >
              {roles.map((role, id) => (
                <MenuItem key={id} value={role}>
                  {role}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            sx={{ mt: 3 }}
            label="Username"
            variant="outlined"
            autoFocus
            fullWidth
            name="username"
            value={signupData.username}
            onChange={handleChange}
            required
          />
          <TextField
            sx={{ mt: 3 }}
            inputMode="off"
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
            sx={{ mt: 3 }}
            label="Password"
            variant="outlined"
            fullWidth
            name="password"
            type="password"
            value={signupData.password}
            onChange={handleChange}
            required
          />
          {/* <TextField
       sx={{ mt: 3 }}
        label="Confirm Password"
        variant="outlined"
        fullWidth
        name="confirmPassword"
        type="password"
        value={signupData.password}
        onChange={handleChange}
        required
      /> */}
          <Button
            type="submit"
            sx={{ mt: 3, width: 100, mb: 3 }}
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
        </Box>
        {/* <Grid item> */}
        <Link to="/signin" className="underline text-right">
          {"Already a member? Sign In"}
        </Link>
        {/* </Grid> */}
      </Box>
    </>
  );
}

export default SignUpForm;
