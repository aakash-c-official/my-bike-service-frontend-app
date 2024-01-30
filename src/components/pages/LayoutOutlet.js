import { Outlet } from "react-router-dom";
import React from 'react'
import Header from "../../views/Header";
import Footer from "../../views/Footer"
const LayoutOutlet = () => {
  return (
    <>
    <Header/>
    <main className="App min-h-screen"><Outlet/></main>
    <Footer/>
    </>
  )
}

export default LayoutOutlet