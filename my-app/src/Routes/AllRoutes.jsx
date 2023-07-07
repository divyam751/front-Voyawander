import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Components/Cart'
import Holiday from '../Components/Holiday'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/holiday" element={<Holiday/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
  )
}

export default AllRoutes
