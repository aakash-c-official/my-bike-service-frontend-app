import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

// Sample data
const cities = [
  { id: 1, name: "City 1" },
  { id: 2, name: "City 2" },
  // Add more cities as needed
];

const serviceCenters = {
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

const slots = ["Morning", "Afternoon"];

const services = ["Full Service", "Engine Service", "Wash"];

function SlotForm() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCenter, setSelectedCenter] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedCenter("");
  };

  const handleCenterChange = (event) => {
    setSelectedCenter(event.target.value);
  };

  const handleSlotChange = (event) => {
    setSelectedSlot(event.target.value);
  };

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Bike Servicing Website
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="city-label">Select City</InputLabel>
            <Select
              labelId="city-label"
              id="city-select"
              value={selectedCity}
              label="Select City"
              onChange={handleCityChange}
            >
              {cities.map((city) => (
                <MenuItem key={city.id} value={city.id}>
                  {city.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth disabled={!selectedCity}>
            <InputLabel id="center-label">Select Service Center</InputLabel>
            <Select
              labelId="center-label"
              id="center-select"
              value={selectedCenter}
              label="Select Service Center"
              onChange={handleCenterChange}
            >
              {selectedCity &&
                serviceCenters[selectedCity].map((center) => (
                  <MenuItem key={center.id} value={center.id}>
                    {center.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth disabled={!selectedCenter}>
            <InputLabel id="slot-label">Select Slot</InputLabel>
            <Select
              labelId="slot-label"
              id="slot-select"
              value={selectedSlot}
              label="Select Slot"
              onChange={handleSlotChange}
            >
              {slots.map((slot) => (
                <MenuItem key={slot} value={slot}>
                  {slot}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth disabled={!selectedSlot}>
            <InputLabel id="service-label">Select Service Type</InputLabel>
            <Select
              labelId="service-label"
              id="service-select"
              value={selectedService}
              label="Select Service Type"
              onChange={handleServiceChange}
            >
              {services.map((service) => (
                <MenuItem key={service} value={service}>
                  {service}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            disabled={!selectedService}
            onClick={() =>
              alert(
                `Selected City: ${selectedCity}, Selected Center: ${selectedCenter}, Selected Slot: ${selectedSlot}, Selected Service: ${selectedService}`
              )
            }
          >
            Book Service
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SlotForm;
