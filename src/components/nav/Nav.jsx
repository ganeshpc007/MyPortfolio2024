import React from "react";
import "./nav.css";
import { HiOutlineHome } from "react-icons/hi";
import { LuUser2 } from "react-icons/lu";
import { RiBook2Line } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" title="Home" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active':''}>
        <HiOutlineHome />
      </a>
      <a href="#about" title="About" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}>
        <LuUser2 />
      </a>
      <a href="#experience" title="Experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active':''}>
        <RiBook2Line />
      </a>
      <a href="#contact" title="Contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
