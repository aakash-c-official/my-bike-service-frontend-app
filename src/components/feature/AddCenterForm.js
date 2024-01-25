import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
// import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";

const defaultTheme = createTheme();
function AddCenterForm() {
  const [formData, setFormData] = useState({
    city: '',
    centerName: '',
  });
  const citiesData = [
    { id: 1, name: 'City 1' },
    { id: 2, name: 'City 2' },
    // Add more cities as needed
  ];
  
  const centersData = {
    1: [
      { id: 1, name: 'Center 1A' },
      { id: 2, name: 'Center 1B' },
      // Add more centers for City 1
    ],
    2: [
      { id: 3, name: 'Center 2A' },
      { id: 4, name: 'Center 2B' },
      // Add more centers for City 2
    ],
    // Add more cities with their respective centers
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can send formData to your backend or perform any other actions
    console.log('Form submitted:', formData);
    // Reset form fields after submission
    // setFormData({ city: '', centerName: '' });
    // handleCenterAdded()
  };

function handleCenterAdded(){
  function convertFormDataToCitiesAndCenters(formCity, formCenter, citiesData, centersData) {
    // Check if the city already exists in citiesData
    const existingCity = citiesData.find((city) => city.name === formCity);
    let cityId;
    if (existingCity) {
      cityId = existingCity.id;
    } else {
      // If the city does not exist, create a new entry
      cityId = citiesData.length + 1;
      citiesData.push({ id: cityId, name: formCity });
    }
  
    // Check if the center already exists in centersData for the city
    // const existingCenter = centersData[cityId]?.find((center) => center.name === formCenter);
    // if (!existingCenter) {
    //   // If the center does not exist, create a new entry for the city
    // //   if (!centersData[cityId]) {
    // //     centersData[cityId] = [];
    // //   }
    //   centersData[cityId]?.push({ id: centersData[cityId].length + 1, name: formCenter });
    // }

    if(centersData && cityId && formCenter) {
        // Ensure the city exists in the data structure
        if (!centersData[cityId]) {
          centersData[cityId] = [];
        }
      
        // Directly append the new center to the city's list
        centersData[cityId].push({
          id: centersData[cityId].length + 1,
          name: formCenter
        });
      }
    
    return { citiesData, centersData };
  }


  
 
  
  const { citiesData: updatedCitiesData, centersData: updatedCentersData } = convertFormDataToCitiesAndCenters(
    formData.city,
    formData.centerName,
    citiesData,
    centersData
  );
  console.log('Updated citiesData:', updatedCitiesData);
  console.log('Updated centersData:', updatedCentersData);
}return (

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
          Add Service Center
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}            
            sx={{ mt: 1 }}
          >
           
            <TextField
              
              onChange={handleInputChange}
              margin="normal"
              required
              fullWidth
              id="city"
              label="Select City"
              name="city"
              autoComplete="city"
              autoFocus
            />
            <TextField
              onChange={handleInputChange}
              margin="normal"
              required
              fullWidth
              name="centerName"
              label="Center Name"
              type="text"
              id="centerName"
              autoComplete="centerName"
            />
               <TextField
              onChange={handleInputChange}
              margin="normal"
              required
              fullWidth
              name="servicesNames"
              label="Services Name"
              type="text"
              id="serviceName"
              autoComplete="serviceName"
            />
       

        
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Center
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
              <Grid item>
         
              </Grid>
            </Grid>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  
  );
}

export default AddCenterForm;
