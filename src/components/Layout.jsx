import React from 'react'
import NavBar from './NavBar'
import Fotter from './Fotter'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  return (
    <div>
    <NavBar/>
    <Outlet/>
    <Fotter/>
    </div>
  )
}

