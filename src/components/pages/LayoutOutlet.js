import { Outlet } from "react-router-dom";
import React from 'react'

const LayoutOutlet = () => {
  return (
    <main className="App"><Outlet/></main>
  )
}

export default LayoutOutlet