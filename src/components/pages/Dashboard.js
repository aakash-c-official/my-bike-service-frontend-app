import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Dashboard = () => {
  const [services, setServices] = useState([]);
  //  const navigate=useNavigate()
  // useEffect(() => {
  // 	const token = localStorage.getItem('token')
  // 	if (token) {
  // 		const user = jwtDecode(token)
  // 		console.log(user,'user')
  // 		if (!user) {
  // 			localStorage.removeItem('token')

  // 			navigate('/')
  // 		} else {
  // 			// populateQuote()
  // 		}
  // 	}
  // }, [])

  useEffect(() => {
    axios.get("/allservices").then(({ data }) => {
      setServices(data);
    });
  }, []);

  console.log(services);
  return (
    <>
      <div>Dashboard</div>
      <div>All service centers</div>
      <div className="mt-4">
        {services.length > 0 &&
          services.map((service) => (
            <div className="bg-gray-200 p-4 rounded-2xl flex gap-4">{service.city}
			{service.services.length > 0 && service.services.map((e)=> <div>{e}</div>)}
			</div>
          ))}
      </div>
    </>
  );
};

export default Dashboard;
