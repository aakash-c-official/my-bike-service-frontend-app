import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
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
    axios.get("/allservicesofowner").then(({ data }) => {
      setServices(data);
    });
  }, []);

  console.log(services);
  return (
    <>
      <div>Dashboard</div>
   <div> <div className="text-2xl">My  own service centers</div>
      {/* <div className="mt-4">
        {services.length > 0 &&
          services.map((service) => (
            <Link to={'/account/services/'+service._id} className="bg-gray-200 p-4 rounded-2xl flex gap-4 cursor-pointer">{service.city}
			<div>{service.center}</div>
			{service.services.length > 0 && service.services.map((e)=> <div>{e}</div>)}
			</Link>
          ))}
      </div> */}
       <div className="px-80 py-10">
      <table className="w-full table-auto striped">
      <thead>
        <tr className="bg-indigo-400 text-white">
          <th>City</th>
          <th>Center</th>
          <th>Services</th>
        </tr>
      </thead>
      <tbody>
        {services.map((item) => (
          <tr key={item.city} className="even:bg-amber-100 odd:bg-blue-100">
            <td className="p-5">{item.city}</td>
            <td className="p-5">{item.center}</td>
            <td className="p-5">{item.services.map((e)=><div className=" ">{e}</div>)}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
	  </div>  
    </>
  );
};

export default Dashboard;
