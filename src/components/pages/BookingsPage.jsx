import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BookingsPage = () => {
    const [bookings,setBookings]=useState([]);
    useEffect(()=>{
axios.get('allbookings').then((response)=>{
    setBookings(response.data)
})
    },[])
    console.log(bookings)
  return (<>
    <div>BookingsPage(applied)</div>
    <div>
        {bookings.length>0 && bookings.map((booking)=>(
            <div className='gap-4 flex py-4'>
               <div> {booking.city}</div>
               <div> {booking.center}</div>
               <div> {booking.services}</div>
               
            </div>
        ))}
    </div>
  </>
  )
}

export default BookingsPage