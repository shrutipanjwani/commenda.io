import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/HeaderNav/HeaderNav";
import Header from "./Sections/Header";
import About from "./Sections/About";
import Features from "./Sections/Features";
import Blog from "./Sections/Blog";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Dropdown from "./Components/HeaderNav/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header />
      <About />
      <Features />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
