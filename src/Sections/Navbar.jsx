import React, { useState } from "react";
import {navLinks} from "../Constants/index"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevOpen) =>
      !prevOpen
    );
  };

  const NavItems=()=>{
    return(
      <ul className="nav-ul">
        {navLinks.map(({id, href, name})=>(
          <li key={id} className="font-Generalsans nav-li">
            <a href={href} onClick={()=>{}} className=" text-lg md:text-base hover:text-white transition-colors">{name}</a>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto ">
        <div className="items-center justify-between py-5 flex mx-auto sm:px-10 px-5">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Pradyumna
          </a>
          <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex " aria-label="Toggle menu">
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems/>
          </nav>


          <div className={`nav-sidebar  ${isOpen? "max-h-screen": "max-h-0"}`}>
          <nav className="p-5 ">
          <NavItems/>
          </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
