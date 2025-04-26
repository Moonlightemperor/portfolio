import React from "react";
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Project from "./Sections/Project";
import Footer from "./Sections/Footer";
import Contact from "./Sections/Contact";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto bg-black">
      <Navbar />
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
