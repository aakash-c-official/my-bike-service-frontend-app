import React, { useState } from 'react';
import { Container, Typography, Grid, FormControl, InputLabel, Select, MenuItem, Button, makeStyles } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
const serviceCenters = ['Center A', 'Center B', 'aCenter C']; // List of service centers

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

function SlotForm() {
//   const classes = useStyles();
  const [selectedCenter, setSelectedCenter] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const handleCenterChange = (event) => {
    setSelectedCenter(event.target.value);
  };

  const handleSlotChange = (event) => {
    setSelectedSlot(event.target.value);
  };

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(`Selected Center: ${selectedCenter}, Selected Slot: ${selectedSlot}, Selected Service: ${selectedService}`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Bike Servicing Website
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <Autocomplete
            value={selectedCenter}
            onChange={handleCenterChange}
            options={serviceCenters}
            renderInput={(params) => (
              <FormControl >
                <InputLabel id="center-select-label">Select Service Center</InputLabel>
                <Select
                  labelId="center-select-label"
                  label="Select Service Center"
                  {...params}
                >
                  {serviceCenters.map((center, index) => (
                    <MenuItem key={index} value={center}>{center}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Grid>


        <Grid item xs={12}>
          <FormControl className>
            <InputLabel id="center-select-label">Select Service Center</InputLabel>
            <Select
              labelId="center-select-label"
              id="center-select"
              value={selectedCenter}
              label="Select Service Center"
              onChange={handleCenterChange}
            >
              {serviceCenters.map((center, index) => (
                <MenuItem key={index} value={center}>{center}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className>
            <InputLabel id="slot-select-label">Select Slot</InputLabel>
            <Select
              labelId="slot-select-label"
              id="slot-select"
              value={selectedSlot}
              label="Select Slot"
              onChange={handleSlotChange}
            >
              <MenuItem value="morning">Morning</MenuItem>
              <MenuItem value="afternoon">Afternoon</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className>
            <InputLabel id="service-select-label">Select Service Type</InputLabel>
            <Select
              labelId="service-select-label"
              id="service-select"
              value={selectedService}
              label="Select Service Type"
              onChange={handleServiceChange}
            >
              <MenuItem value="full-service">Full Service</MenuItem>
              <MenuItem value="engine-service">Engine Service</MenuItem>
              <MenuItem value="wash">Wash</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" className onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SlotForm;
