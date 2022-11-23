import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/index'
import Filme from './pages/Filme/index'

import React from 'react'

function RoutesApp(){
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/filme/:id" element={<Filme></Filme>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp