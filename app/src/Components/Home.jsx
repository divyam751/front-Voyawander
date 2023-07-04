import React from "react";
import bg from "../Background/bg.mp4";
import "../Styles/Home.css";
import Navbar from "./Navbar";
import HomeContent from "./HomContent";

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <video className='background-video' autoPlay loop muted>
        {/* <source src={bgVideo} type='video/mp4' /> */}
        <source src={bg} type='video/mp4' />
      </video>
      <HomeContent />
    </div>
  );
};

export default Home;
