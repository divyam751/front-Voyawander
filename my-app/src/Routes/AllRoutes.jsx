import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Components/Cart'
import Holiday from '../Components/Holiday'
import Hotel from '../Components/Hotel'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/holiday" element={<Holiday/>}></Route>
        <Route path="/cart/:id" element={<Cart/>}></Route>
        <Route path="/hotel" element={<Hotel/>}></Route>
    </Routes>
  )
}

export default AllRoutes
