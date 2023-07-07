import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import PlaceCard from "../Components/PlaceCard";
import SignupCard from "../Components/SignupCard";
import SigninCard from "../Components/SigninCard";
import Contact from "../Components/Contact";
import Admin from "../AdminPannel/Admin";
import Footer from "../Components/Footer";
import Hotels from "../Components/Hotels";
import Flight from "../Components/Flight";
import About from "../Components/About";
import BookingForm from "../Components/BookingForm";
import CompleteDetails from "../Components/CompleteDetails";
import Payment from "../Components/Payment";
import PaymentSuccess from "../Components/PaymentSuccess";
import FinalPage from "../Components/FinalPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/holidays' element={<PlaceCard />} />
      <Route path='/hotels' element={<Hotels />} />
      <Route path='/flight' element={<Flight />} />
      <Route path='/signin' element={<SigninCard />} />
      <Route path='/booking' element={<BookingForm />} />
      <Route path='/details' element={<CompleteDetails />} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/success' element={<PaymentSuccess />} />
      <Route path='/final' element={<FinalPage />} />
      <Route path='/about' element={<About />} />
      <Route path='/signup' element={<SignupCard />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/footer' element={<Footer />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  );
};

export default AllRoutes;
