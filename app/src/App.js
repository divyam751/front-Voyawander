import "./App.css";
import BookingForm from "./Components/BookingForm";
import CompleteDetails from "./Components/CompleteDetails";
import DebitCard from "./Components/PaymentSuccess";
import Flight from "./Components/Flight";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Payment from "./Components/Payment";
import Ticket from "./Components/Ticket";

import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <AllRoutes />
      <Footer />
      {/* <Payment /> */}
      {/* <BookingForm /> */}
      {/* <CompleteDetails /> */}
      {/* <Ticket /> */}
    </div>
  );
}

export default App;
