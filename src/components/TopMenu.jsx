import React, { useEffect, useState } from "react";
import logo from "../assets/Logo.png";


const TopMenu = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<nav className={`navbar-container relative p-5 ${scrolled ? "scrolled" : ""}`}>
<div className="blur-bg absolute inset-0 z-0 filter blur-[34px] bg-gradient-to-br from-rose-600 via-fuchsia-600 to-violet-600"></div>
  <div className="top-menu relative">
    <div className="logo">
      <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
    </div>
    <ul className="nav-links">
      <li>
        <a href="#" className="nav-link">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="nav-link">
          About
        </a>
      </li>
      <li>
        <a href="#" className="nav-link">
          <span className="signUp-btn">Sign up</span>
        </a>
      </li>
    </ul>
   
  </div>
 
</nav>



  );
};

export default TopMenu;
