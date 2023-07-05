import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import PlaceCard from "../Components/PlaceCard";
import SignupCard from "../Components/SignupCard";
import SigninCard from "../Components/SigninCard";
import Contact from "../Components/Contact";
import Admin from "../AdminPannel/Admin";
import Footer from "../Components/Footer";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/holidays' element={<PlaceCard />} />
      <Route path='/signup' element={<SignupCard />} />
      <Route path='/signin' element={<SigninCard />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/footer' element={<Footer />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  );
};

export default AllRoutes;
