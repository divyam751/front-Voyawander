import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import HomeContent from "./Components/HomContent";
import Cards from "./Components/Cards";
// import Card from "./Components/PlaceCard";
import PlaceCard from "./Components/PlaceCard";
import SignupCard from "./Components/SignupCard";
import SigninCard from "./Components/SigninCard";
// import { Card } from "@chakra-ui/react";

function App() {
  return (
    <div className='App'>
      {/* <Navbar /> */}
      <Home />
      {/* <HomeContent /> */}
      {/* <Cards /> */}
      <PlaceCard />
      <SignupCard />
      <SigninCard />
    </div>
  );
}

export default App;
