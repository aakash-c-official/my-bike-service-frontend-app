import React, { useContext, useEffect, useState } from "react";
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
import {  Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../UserContext";



const slots = ["Morning", "Afternoon"];

function SlotForm() {
  // const {id}=useParams();
  const { ready, user,setUser } = useContext(UserContext);
  const [name,setName]=useState("");
  // const name=user?.name;
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCenter, setSelectedCenter] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedService, setSelectedService] = useState("");
const [servicesData,setServicesData]=useState([])
const [redirect,setRedirect]=useState(false)
  // useEffect(()=>{
  //   if(!id){
  //     return;
  //   }
  //   axios.get(`/services/${id}`).then(response=>{
  //     const {data}=response;
  //     setServicesData(data)
  //     // setSelectedCity(data.city)
  //   })
  // },[id]);
  useEffect(() => {
    axios.get("/allservicesforall").then((response) => {
      setServicesData(response.data);
      
    });
  }, []);
  useEffect(()=>{
    if(user){ 
      setName(user.name  )
    }
  },[user])
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
console.log(servicesData)
// let cities=servicesData.map(e=>e.city);
let cities=[...new Set (servicesData.map(e=>e.city))];
let scenter=servicesData.map(e=>e.center)
let serviceCenters=servicesData.filter(e=>e.city==selectedCity).map(e=>e.center);
let serviceTypes=servicesData.filter(e=>e.city==selectedCity).filter(e=>e.center==selectedCenter).map(e=>e.services);
let serviceCenterId=servicesData.filter(e=>e.city==selectedCity).filter(e=>e.center==selectedCenter)[0]?.owner;
// console.log(serviceCenters)
console.log(serviceCenterId);
console.log(serviceTypes)
console.log(servicesData) 
// console.log(cities)
async function  handleSubmit(){
  try{
     console.log(selectedCity,selectedCenter,selectedSlot,selectedService);
  const response=  await axios.post("/booking",{serviceCenterId,selectedCity,selectedCenter,selectedSlot,selectedService,name});
  const bookingId=response.data._id;
  console.log(bookingId);
  alert("Booked successfully!!")
  setRedirect(true) 
  }
  catch{
    alert("Booking failed")
  }



}

if(redirect){
  return <Navigate to={'/'}/>
}
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
                <MenuItem key={city} value={city}>
                  {city}
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
                serviceCenters.map((center) => (
                  <MenuItem key={center} value={center}>
                    {center}
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
              {serviceTypes[0]?.map((service) => (
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
            // onClick={() =>{
            //   alert(
            //     `Selected City: ${selectedCity}, Selected Center: ${selectedCenter}, Selected Slot: ${selectedSlot}, Selected Service: ${selectedService}`
            //   );handleSubmit();}
              onClick={()=>handleSubmit()}
            // }
          >
            Book Service
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SlotForm;
