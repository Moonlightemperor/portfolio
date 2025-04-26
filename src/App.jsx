import React from "react";
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto bg-black">
      <Navbar />
      <Hero/>
      <About/>
    </div>
  );
};

export default App;
