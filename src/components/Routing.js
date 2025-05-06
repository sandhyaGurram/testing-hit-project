import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Slider from './Slider'
import About from './About'
import Contact from './Contact'

export const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/about' element={<About/>} />
            <Route path='/skincare' element={<Slider/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
    </div>
  )
}
