import React, { useEffect } from 'react'
import {jwtDecode} from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
	 const navigate=useNavigate()
    useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			const user = jwtDecode(token)
			console.log(user,'user')
			if (!user) {
				localStorage.removeItem('token')
			
				navigate('/')
			} else {
				// populateQuote()
			}
		}
	}, [])


  return (
    <div >Dashboard</div>
  )
}

export default Dashboard