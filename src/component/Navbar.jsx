import React, { useEffect, useRef, useState } from 'react';
import img from '../assets/paparazzi-logo.png';
import { NavLink } from 'react-router-dom';
import { RiCloseLine, RiMenu3Fill } from '@remixicon/react';
import Whatsapp from "../assets/whatsapp.png";
import Group from "../assets/group.png"
import Recycle from "../assets/recycle.png"
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      ref.current.classList.remove('max-md:translate-x-full');
    } else {
      ref.current.classList.add('max-md:translate-x-full');
    }

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Clean up the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="bg-[#363636]">
      <div className="mx-auto max-w-screen-2xl w-full p-4 flex justify-between items-center">
        <div className="flex items-center shrink-0">
          <img className="h-16" src={img} alt="Logo" />
        </div>

        {/* Links */}
        <div ref={ref} className='static max-md:fixed max-md:top-0 max-md:right-0 max-md:h-screen bg-[#363636] max-md:w-[60vw] max-md:min-w-80 max-md:shadow-2xl z-50 max-md:translate-x-full transition-transform'>
          <ul className='flex gap-4 items-center justify-start max-md:pt-28 max-md:flex-col max-md:h-full relative text-base max-md:text-lg'>
            <li><NavLink onClick={toggleMenu} to="/" className="[&.active]:text-yellow-500  [&.active]:border-b-2 [&.active]:border-yellow-500" >Home</NavLink></li>
            <li><NavLink onClick={toggleMenu} to="/about" className="[&.active]:text-yellow-500 [&.active]:border-b-2 [&.active]:border-yellow-500" >About</NavLink></li>
            <li><NavLink onClick={toggleMenu} to="/services" className="[&.active]:text-yellow-500 [&.active]:border-b-2 [&.active]:border-yellow-500" >Services</NavLink></li>
            <li><NavLink onClick={toggleMenu} to="/career" className="[&.active]:text-yellow-500 [&.active]:border-b-2 [&.active]:border-yellow-500" >Career</NavLink></li>
            <li><NavLink onClick={toggleMenu} to="/case-studies" className="[&.active]:text-yellow-500 [&.active]:border-b-2 [&.active]:border-yellow-500" >Case Studies</NavLink></li>

            <button className='hidden max-md:flex absolute top-4 right-4 ' onClick={() => setIsOpen(false)}>
              <RiCloseLine />
            </button>

            <div className="flex gap-4 w-44 lg:hidden md:hidden  text-lg  mt-10">
              <a href="#">
                <span>
                  <img src={Whatsapp} alt="Whatsapp" />
                </span>
              </a>
              <a href="#">
                <span>
                  <img src={Group} alt="Group" />
                </span>
              </a>
              <a href="#">
                <span>
                  <img src={Recycle} alt="Recycle" />
                </span>
              </a>
            </div>

          </ul>
        </div>

        <div className="hidden max-md:flex justify-center items-center">
          <button
            onClick={toggleMenu}
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <RiMenu3Fill />
          </button>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 max-md:hidden">
          <a href="#">
            <span>
              <img src={Whatsapp} alt="Whatsapp" width={45} />
            </span>
          </a>
          <a href="#">
            <span>
              <img src={Group} alt="Group" width={45} />
            </span>
          </a>
          <a href="#">
            <span>
              <img src={Recycle} alt="Recycle" width={46} />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
