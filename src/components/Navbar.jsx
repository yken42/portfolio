import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMail } from "react-icons/hi";

export const Navbar = ({ scrollToSection }) => {
  
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 600) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className={`z-40 transition duration-200 backdrop-blur-xl h-16 border-b-2 border-white/40 w-full fixed shadow-2xl ${scrolled ? 'bg-black' : 'bg-transparent'}`}>
      <div className='navbar flex justify-between text-white w-[85%] mx-auto'>
        <div className='hidden md:block header text-[34px] font-bold font-poppins my-2'>Yair <span className='text-[#5C51D6]'>Ken</span></div>
        <div className='md:hidden header text-[34px] font-bold font-poppins my-2'>Y<span className='text-[#5C51D6]'>Ken</span></div>
        <nav>
          <ul className='flex text-[18px] font-quicksand my-3'>
            <li className='hidden md:block transition duration-200 mx-4 py-1 hover:text-white/80'>
              <Link to="/" onClick={() => scrollToSection("About")}>About</Link>
            </li>
            <li className='hidden md:block transition duration-200 mx-4 py-1 hover:text-white/80'>
              <Link to="/" onClick={() => scrollToSection("Projects")}>Projects</Link>
            </li>
            <li className='hidden md:block transition duration-200 rounded-full bg-[#5C51D6] mx-4 px-4 py-1 hover:bg-[#FFFFFF] hover:text-[#5C51D6]'>
              <Link to="/" onClick={() => scrollToSection("Contact")}>Contact Me</Link>
            </li>
            <li className='md:hidden transition duration-200 rounded-full bg-[#5C51D6] mx-4 px-4 py-1 hover:bg-[#FFFFFF] hover:text-[#5C51D6]'>
              <Link to="/" onClick={() => scrollToSection("Contact")}>
                <HiOutlineMail className='text-3xl'/>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}