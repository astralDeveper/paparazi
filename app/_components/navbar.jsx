'use client';

import { useEffect, useRef, useState } from 'react';
import { RiCloseLine, RiMenu3Fill } from '@remixicon/react';
import Link from 'next/link';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState('');
  const ref = useRef(null);

  const pathname = usePathname()

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {

        const uid = user.uid;
        setUser(uid)
        console.log('User signed in:', user);
      } else {
        // User is signed out
        // ...
      }
    });
  
  }, [])


  function logOut() {

    auth.signOut()

    setUser('')
    
  }

  return (
    <header className="bg-[#363636]">
      <div className="mx-auto max-w-screen-2xl w-full p-4 flex justify-between items-center">
        <Link href='/' className="flex items-center shrink-0 cursor-pointer">
          <img className="h-16" src="/paparazzi-logo.png" alt="Paparazzi House Logo" />
        </Link>

        {/* Links */}
        <div ref={ref} className='static max-md:fixed max-md:top-0 max-md:right-0 max-md:h-screen bg-[#363636] max-md:w-[60vw] max-md:min-w-80 max-md:shadow-2xl z-50 max-md:translate-x-full transition-transform'>
          <ul className='flex gap-4 items-center justify-start max-md:pt-28 max-md:flex-col max-md:h-full relative text-base max-md:text-lg'>
            <li><Link onClick={toggleMenu} href="/" className={`[&.active]:text-yellow-500  [&.active]:border-b-2 [&.active]:border-yellow-500 ${pathname === "/" ? 'active': ''}`} >Home</Link></li>
            <li><Link onClick={toggleMenu} href="/about" className={`[&.active]:text-yellow-500 [&.active]:border-b-2 [&.active]:border-yellow-500 ${pathname === "/about" ? 'active': ''}`} >About</Link></li>
            <li><Link onClick={toggleMenu} href="/services" className={`[&.active]:text-yellow-500 [&.active]:border-b-2 [&.active]:border-yellow-500 ${pathname === "/services" ? 'active': ''}`} >Services</Link></li>
            <li><Link onClick={toggleMenu} href="/career" className={`[&.active]:text-yellow-500 [&.active]:border-b-2 [&.active]:border-yellow-500 ${pathname === "/career" ? 'active': ''}`} >Career</Link></li>
            <li><Link onClick={toggleMenu} href="/case-studies" className={`[&.active]:text-yellow-500 [&.active]:border-b-2 [&.active]:border-yellow-500 ${pathname === "/case-studies" ? 'active': ''}`} >Case Studies</Link></li>

            <button className='hidden max-md:flex absolute top-4 right-4 ' onClick={() => setIsOpen(false)}>
              <RiCloseLine />
            </button>

            {
              user? (
                <div className="flex items-center gap-2 md:hidden lg:hidden">
                  <button className="border-yellow-500 text-center hover:bg-yellow-500 w-full px-4 py-2 border rounded-md font-semibold text-yellow-500 hover:text-gray-900" onClick={logOut}>Logout</button>
                </div>
              ) : (
                <div className="flex gap-6 w-44 lg:hidden md:hidden text-lg flex-col mt-10">
              <Link href='/login' onClick={toggleMenu} className="bg-yellow-500 text-center hover:bg-yellow-600 px-4 py-2 rounded-md font-semibold text-gray-900">
                Login
              </Link>
              <Link href='/signup' onClick={toggleMenu} className="border-yellow-500 text-center hover:bg-yellow-500 px-4 py-2 border rounded-md font-semibold text-yellow-500 hover:text-gray-900" >
                Sign Up
              </Link>
            </div>
              )
            }

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
        {
              user? (
                <div className="flex items-center gap-2 max-md:hidden">
                  <button className="border-yellow-500 text-center hover:bg-yellow-500 px-4 py-2 border rounded-md font-semibold text-yellow-500 hover:text-gray-900" onClick={logOut}>Logout</button>
                </div>
              ) : (
                <div className="flex gap-2 max-md:hidden">
                <Link href='/login'
                  className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md font-semibold text-gray-900"
                >
                  Login
                </Link>
                <Link href='/signup'
                  className="border-yellow-500 hover:bg-yellow-500 px-4 py-2 border rounded-md font-semibold text-yellow-500 hover:text-gray-900"
                >
                  Sign Up
                </Link>
              </div>
              )
            }
      </div>
    </header>
  );
}
