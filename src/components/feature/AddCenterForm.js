import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
// import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import axios from "axios";

const defaultTheme = createTheme();
function AddCenterForm() {
   const [servicesList,setServicesList]=useState([]);
  const [formData, setFormData] = useState({
    city: "",
    centerName: "",
    
  });
  const[redirect,setRedirect]=useState('')
 
  const citiesData = [
    { id: 1, name: "City 1" },
    { id: 2, name: "City 2" },
    // Add more cities as needed
  ];

  const centersData = {
    1: [
      { id: 1, name: "Center 1A" },
      { id: 2, name: "Center 1B" },
      // Add more centers for City 1
    ],
    2: [
      { id: 3, name: "Center 2A" },
      { id: 4, name: "Center 2B" },
      // Add more centers for City 2
    ],
    // Add more cities with their respective centers
  };

  const handleInputChange = (event) => {
    const { name, value,checked } = event.target;
    setFormData({ ...formData, [name]: value });
     // If the input is a checkbox, handle the checked state
  // if (event.target.type === 'checkbox') {
  //   if (checked) {
  //     // If the checkbox is checked, add the value to the array
  //     setFormData({ ...formData, [name]: [...formData[name], value] });
  //   } else {
  //     // If the checkbox is unchecked, remove the value from the array
  //     setFormData({
  //       ...formData,
  //       [name]: formData[name].filter((item) => item !== value),
  //     });
  //   }
  // } else {
  //   // For non-checkbox inputs, update the value directly
  //   setFormData({ ...formData, [name]: value });
  // }
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
    // Here you can send formData to your backend or perform any other actions
    console.log("Form submitted:", formData);
    const payload={formData,servicesList}
   const{data} =await axios.post('/addservice',payload);
   setRedirect('/slotform')
    // Reset form fields after submission
    // setFormData({ city: '', centerName: '' });
    // handleCenterAdded()
  };

  function handleCenterAdded() {
    function convertFormDataToCitiesAndCenters(
      formCity,
      formCenter,
      citiesData,
      centersData
    ) {
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

      if (centersData && cityId && formCenter) {
        // Ensure the city exists in the data structure
        if (!centersData[cityId]) {
          centersData[cityId] = [];
        }

        // Directly append the new center to the city's list
        centersData[cityId].push({
          id: centersData[cityId].length + 1,
          name: formCenter,
        });
      }

      return { citiesData, centersData };
    }

    const { citiesData: updatedCitiesData, centersData: updatedCentersData } =
      convertFormDataToCitiesAndCenters(
        formData.city,
        formData.centerName,
        citiesData,
        centersData
      );
    console.log("Updated citiesData:", updatedCitiesData);
    console.log("Updated centersData:", updatedCentersData);
  }

  function handleCbClick(ev){
const {checked,name}=ev.target;
if(checked){
  setServicesList([...servicesList,name]);
}
else{
  setServicesList([...servicesList.filter(selectedName=>selectedName!==name)]);
}
  }
  console.log(servicesList)
  if(redirect){
    return <Navigate to={redirect}/>
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
            Add Service Center
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
            {/* <TextField
              onChange={handleInputChange}
              margin="normal"
              required
              fullWidth
              name="servicesNames"
              label="Services Name"
              type="text"
              id="serviceName"
              autoComplete="serviceName"
            /> */}
<h3 className="mt-5">Select Available Services:</h3>
            <div className="my-1">
            {/* <div className="grid gap-2 grid-cols-2 md:grid-cols-2 lg:grid-cols-6"> */}
              
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" name="full-service" onChange={handleCbClick}/>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
                <span>Full Service</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" name="engine-service" onChange={handleCbClick}/>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                  />
                </svg>
                <span>Engine Service</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" name="bike-wash" onChange={handleCbClick}/>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                  />
                </svg>
                <span>Bike Wash</span>
              </label>
            </div>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Center
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default AddCenterForm;
