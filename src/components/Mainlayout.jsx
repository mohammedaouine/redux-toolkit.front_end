import React from 'react'
import { Outlet } from "react-router";
import Navbar from './Navbar';

function Mainlayout() {
  return (
 <>
    <Navbar/>



    <Outlet />
 
 </>



  )
}

export default Mainlayout