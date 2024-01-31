import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { UserContext } from "../../UserContext";


// const roles=['Client','Admin','Service Owner']


const defaultTheme = createTheme();

export default function SignIn() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [signinData, setSigninData] = React.useState({
    // role:'',
    email: "",
    password: "",
  });
  const[redirect,setRedirect]=React.useState(false);
  const navigate = useNavigate();
  const {setUser} = React.useContext(UserContext)

  async function loginUser() {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signinData),
    });
    const res = await response.json();
    console.log(res);
    if (res.user) {
      localStorage.setItem("token", res.user);
      alert("login success");
      navigate("/slotform");
    } else alert("please check your login credentials");
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    try{

      // const data = new FormData(event.currentTarget);
      const response=await axios.post("/login",{signinData});
     const {data}=response;
      setUser(data);
      console.log(signinData)
      console.log(data)
      alert("Login successful")
      setRedirect(true)
      // loginUser(data);
      // console.log({
      //   role:data.get('role'),
      //   email: data.get("email"),
      //   password: data.get("password"),
      // });
    }
    catch(err){
      alert("Login failed")
    }
      
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSigninData({ ...signinData, [name]: value });
  };
  if(redirect){
    return<Navigate to={'/'}/>
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
      
            sx={{ mt: 1 }}
          >
              {/* <FormControl fullWidth sx={{ width: '50%',mt:3 }}>
            <InputLabel id="roles-label">Select Role</InputLabel>
            <Select
              labelId="roles-label"
              id="roles-select"
              name="role"
              value={signinData.role}
              label="Select Role"
              onChange={handleChange}
              required
            >
              {roles.map((role,id) => (
                <MenuItem key={id} value={role}>
                  {role}
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}
            <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            {/* <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            /> */}
            <FormControl sx={{mt:2, width: '100ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password *</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            onChange={handleChange}
            required
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={ () => setShowPassword((show) => !show)}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,width:100 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
              <Grid item>
                <Link  to="/signup" className="underline" >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
