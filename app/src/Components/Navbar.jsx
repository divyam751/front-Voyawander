import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Main.css";
import { Box, Button, Flex, WrapItem } from "@chakra-ui/react";
import Logo from "../Images/Logo/Logo.png";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className='transparent-navbar'>
      {" "}
      {/* Added the "transparent-navbar" class */}
      {/* <h1>Voyawander</h1> */}
      <img src={Logo} alt='logo' style={{ height: 70 }} />
      <Box id='headerBox'>
        <nav ref={navRef}>
          <a href='/#'>Home</a>
          <a href='/#'>About Us</a>
          <a href='/#'>Hotels</a>
          <a href='/#'>Flights</a>
          <a href='/#'>Holidays</a>
          <a href='/#'>Contact Us</a>

          <WrapItem>
            <Button colorScheme='orange' m={4}>
              LogIn
            </Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme='whatsapp'>Sign Up</Button>
          </WrapItem>

          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>

        <button className='nav-btn' onClick={showNavbar}>
          <FaBars />
        </button>
      </Box>
    </header>
  );
}

export default Navbar;
