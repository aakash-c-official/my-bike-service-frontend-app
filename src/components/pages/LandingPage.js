import React, { useState } from 'react';
import BannerBackground from "../../Assets/home-banner-background.jpeg";
import BannerImage from "../../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import { Navigate, useNavigate } from 'react-router-dom';
const LandingPage = () => {
    const [redirect,setRedirect]=useState(false)
    const navigate= useNavigate();
    if(redirect)return <Navigate to={'/signup'}/> 
    function goTo(){
    return <Navigate to={'/signup'}/>        
    }
  return (
    <div className="home-container">
    {/* <Navbar /> */}
    <div className="home-banner-container">
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
      <div className="home-text-section">
        <h1 className="primary-heading">
          Bike service app
        </h1>
        <p className="primary-text">
         A bike need a service , get it done today!!!
        </p>
        {/* <button className="secondary-button" onClick={()=>goTo()}> */}
        {/* <button className="secondary-button" onClick={()=>setRedirect(true)}> */}
        <button className="secondary-button" onClick={()=>(navigate('/signup'))}>
          Book Now <FiArrowRight />{" "}
        </button>
      </div>
      <div className="home-image-section">
        <img src={BannerImage} alt="" />
      </div>
    </div>
  </div>
  )
}

export default LandingPage