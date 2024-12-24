import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Herosection from './components/Herosection'
import About from './components/About'
import Expertise from './components/Expertise'
import Services from './components/Services'
import Projects from './components/Projects'
import Feedbacks from './components/Feedbacks'
import ContactUs from './components/ContactUs'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route path='' element={<Herosection/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/portfolio' element={<Projects/>} />
    <Route path='/Techstack' element={<Expertise/>} />
    <Route path='/feedback' element={<Feedbacks/>} />
    <Route path='/contact' element={<ContactUs/>} />
    </Route>    
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}>

</RouterProvider>
)
