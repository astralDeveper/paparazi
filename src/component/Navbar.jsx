import React, { useEffect, useRef, useState } from 'react';
import img from '../assets/paparazzi-logo.png';
import { NavLink } from 'react-router-dom';
import { RiCloseLine, RiMenu3Fill } from '@remixicon/react';

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
        <div ref={ref} className='static max-md:fixed max-md:top-0 max-md:right-0 max-md:h-screen bg-[#363636] max-md:w-[60vw] z-50 max-md:translate-x-full transition-transform'>
          <ul className='flex gap-4 items-center justify-start max-md:pt-28 max-md:flex-col max-md:h-full relative text-base max-md:text-lg'>
            <li><NavLink onClick={toggleMenu} to="/" className="[&.active]:text-yellow-500  [&.active]:border-b-2 [&.active]:border-yellow-500" >Home</NavLink></li>
            <li><NavLink onClick={toggleMenu} to="/about" className="[&.active]:text-yellow-500 [&.active]:border-b-2 [&.active]:border-yellow-500" >About</NavLink></li>
            <li><NavLink onClick={toggleMenu} to="/services" className="[&.active]:text-yellow-500 [&.active]:border-b-2 [&.active]:border-yellow-500" >Services</NavLink></li>
            <li><NavLink onClick={toggleMenu} to="/career" className="[&.active]:text-yellow-500 [&.active]:border-b-2 [&.active]:border-yellow-500" >Career</NavLink></li>
            <li><NavLink onClick={toggleMenu} to="/case-studies" className="[&.active]:text-yellow-500 [&.active]:border-b-2 [&.active]:border-yellow-500" >Case Studies</NavLink></li>

            <button className='hidden max-md:flex absolute top-4 right-4 ' onClick={() => setIsOpen(false)}>
              <RiCloseLine />
            </button>

            <div className="flex gap-6 w-44 lg:hidden md:hidden text-lg flex-col mt-10">
              <button
                className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md font-semibold text-gray-900"
              >
                Login
              </button>
              <button
                className="border-yellow-500 hover:bg-yellow-500 px-4 py-2 border rounded-md font-semibold text-yellow-500 hover:text-gray-900"
              >
                Sign Up
              </button>
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
        <div className="flex gap-2 max-md:hidden">
          <button
            className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md font-semibold text-gray-900"
          >
            Login
          </button>
          <button
            className="border-yellow-500 hover:bg-yellow-500 px-4 py-2 border rounded-md font-semibold text-yellow-500 hover:text-gray-900"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
