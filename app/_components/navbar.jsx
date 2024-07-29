"use client";

import { useEffect, useRef, useState } from "react";
import {
  RiCloseLine,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiMenu3Fill,
  RiTiktokFill,
} from "@remixicon/react";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { usePathname } from "next/navigation";
import whatsappIcon from "../_assets/navbar/whatsapp.svg";
import whatsappCommunityIcon from "../_assets/navbar/whatsapp-community.svg";
import phoneIcon from "../_assets/navbar/phone.svg";
import { client } from "@/sanity/lib/client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState("");
  const ref = useRef(null);

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const [topPosition, setTopPosition] = useState("150px");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setTopPosition("20px");
      } else {
        setTopPosition("150px");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [navbarData, setNavbarData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`*[_type == 'navbar'][0]{...}`);
        setNavbarData(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (isOpen) {
      ref.current.classList.remove("max-lg:translate-x-full");
    } else {
      ref.current.classList.add("max-lg:translate-x-full");
    }

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(uid);
        console.log("User signed in:", user);
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  function logOut() {
    auth.signOut();

    setUser("");
  }

  return (
    <header className="bg-[#363636]">
      <div className="mx-auto max-w-screen-2xl w-full p-4 flex justify-between items-center">
        <Link href="/" className="flex items-center shrink-0 cursor-pointer">
          <img
            className="h-16"
            src="/paparazzi-logo.png"
            alt="Paparazzi House Logo"
          />
        </Link>

        {/* Links */}
        <div ref={ref} className="static max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-screen bg-[#363636] max-lg:w-[60vw] max-lg:min-w-80 max-lg:shadow-2xl z-50 max-lg:translate-x-full transition-transform">
          <ul className="flex gap-4 max-sm:gap-2 items-center justify-start max-lg:pt-20 max-sm:pt-16 max-lg:flex-col max-lg:h-full relative text-base max-lg:text-lg">
            <li className="mb-2">
              <Link
                onClick={toggleMenu}
                href="/"
                className={`after:block after:w-0 hover:after:w-full after:transition-all after:h-0.5 after:bg-yellow-500 [&.active]:text-yellow-500 [&.active]:border-b-2 [&.active]:border-yellow-500 ${pathname === "/" ? "active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link
                onClick={toggleMenu}
                href="/about"
                className={`after:block after:w-0 hover:after:w-full after:transition-all after:h-0.5 after:bg-yellow-500 [&.active]:text-yellow-500 [&.active]:border-b-2 [&.active]:border-yellow-500 ${pathname === "/about" ? "active" : ""}`}
              >
                About
              </Link>
            </li>
            <li className="mb-2">
              <Link
                onClick={toggleMenu}
                href="/services"
                className={`after:block after:w-0 hover:after:w-full after:transition-all after:h-0.5 after:bg-yellow-500 [&.active]:text-yellow-500 [&.active]:border-b-2 [&.active]:border-yellow-500 ${pathname === "/services" ? "active" : ""}`}
              >
                Services
              </Link>
            </li>
            <li className="mb-2">
              <Link
                onClick={toggleMenu}
                href="/career"
                className={`after:block after:w-0 hover:after:w-full after:transition-all after:h-0.5 after:bg-yellow-500 [&.active]:text-yellow-500 [&.active]:border-b-2 [&.active]:border-yellow-500 ${pathname === "/career" ? "active" : ""}`}
              >
                Career
              </Link>
            </li>
            <li className="mb-2">
              <Link
                onClick={toggleMenu}
                href="/case-studies"
                className={`after:block after:w-0 hover:after:w-full after:transition-all after:h-0.5 after:bg-yellow-500 [&.active]:text-yellow-500 [&.active]:border-b-2 [&.active]:border-yellow-500 ${pathname === "/case-studies" ? "active" : ""}`}
              >
                Case Studies
              </Link>
            </li>
            <li className="mb-2">
              <Link
                onClick={toggleMenu}
                href="/diplomatic-diaries"
                className={`after:block after:w-0 hover:after:w-full after:transition-all after:h-0.5 after:bg-yellow-500 [&.active]:text-yellow-500 [&.active]:border-b-2 [&.active]:border-yellow-500 ${pathname === "/diplomatic-diaries" ? "active" : ""}`}
              >
                Diplomatic Diaries
              </Link>
            </li>
            <li className="mb-2">
              <Link
                onClick={toggleMenu}
                href="/powerplay-blogs"
                className={`after:block after:w-0 hover:after:w-full after:transition-all after:h-0.5 after:bg-yellow-500 [&.active]:text-yellow-500 [&.active]:border-b-2 [&.active]:border-yellow-500 ${pathname === "/powerplay-blogs" ? "active" : ""}`}
              >
                Blogs
              </Link>
            </li>
            <li className="mb-2">
              <Link
                onClick={toggleMenu}
                href="/quiz"
                className={`after:block after:w-0 hover:after:w-full after:transition-all after:h-0.5 after:bg-yellow-500 [&.active]:text-yellow-500 [&.active]:border-b-2 [&.active]:border-yellow-500 ${pathname === "/quiz" ? "active" : ""}`}
              >
                Quiz
              </Link>
            </li>

            <button
              className="hidden max-lg:flex absolute top-4 right-4 "
              onClick={() => setIsOpen(false)}
            >
              <RiCloseLine />
            </button>
            <div className="flex lg:hidden flex-col">
              <div>
                {user ? (
                  <div className="flex items-center gap-2 lg:hidden">
                    <button
                      className="border-yellow-500 text-center hover:bg-yellow-500 w-full px-4 py-2 border rounded-md font-semibold text-yellow-500 hover:text-gray-900"
                      onClick={logOut}
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-4 w-44 lg:hidden  text-lg flex-col ">
                    <Link
                      href="/login"
                      onClick={toggleMenu}
                      className="bg-yellow-500 text-center hover:bg-yellow-600 px-4 py-2 rounded-md font-semibold text-gray-900"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      onClick={toggleMenu}
                      className="border-yellow-500 text-center hover:bg-yellow-500 px-4 py-2 border rounded-md font-semibold text-yellow-500 hover:text-gray-900"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
              <div className="flex items-center mt-6 gap-6">
                <a href={navbarData?.socialMediaLinks.whatsappLink} target="_blank">
                  <img src={whatsappIcon.src} className="h-12" alt="whatsapp icon" />
                </a>
                <a href={navbarData?.socialMediaLinks.whatsappCommunityLink} target="_blank">
                  <img src={whatsappCommunityIcon.src} className="h-12" alt="whatsapp community icon" />
                </a>
                <a href={navbarData?.socialMediaLinks.phone} target="_blank">
                  <img src={phoneIcon.src} className="h-10" alt="phone icon" />
                </a>
              </div>
            </div>
          </ul>
        </div>

        <div className="hidden max-lg:flex justify-center items-center">
          <button
            onClick={toggleMenu}
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <RiMenu3Fill />
          </button>
        </div>

        {/* Buttons */}

        <div className="flex items-center gap-4 max-lg:hidden">
          <a href={navbarData?.socialMediaLinks.whatsappLink} target="_blank">
            <img src={whatsappIcon.src} className="h-12" alt="whatsapp icon" />
          </a>
          <a href={navbarData?.socialMediaLinks.whatsappCommunityLink} target="_blank">
            <img src={whatsappCommunityIcon.src} className="h-12" alt="whatsapp community icon" />
          </a>
          <a href={navbarData?.socialMediaLinks.phone} target="_blank">
            <img src={phoneIcon.src} className="h-10" alt="phone icon" />
          </a>

          {user ? (
            <div className="flex items-center gap-2 max-lg:hidden">
              <button
                className="border-yellow-500 text-center hover:bg-yellow-500 px-4 py-2 border rounded-md font-semibold text-yellow-500 hover:text-gray-900"
                onClick={logOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-4 items-center  max-lg:hidden">
              <Link
                href="/login"
                className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md font-semibold text-gray-900"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="border-yellow-500 hover:bg-yellow-500 px-4 py-2 border rounded-md font-semibold text-yellow-500 hover:text-gray-900"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>

      <div
        style={{ top: topPosition, transition: "top 300ms ease-out" }}
        className="fixed right-0 h-20 z-10"
      >
        <div className="border rounded-l-xl border-r-0 p-4 flex flex-col gap-8 py-6 bg-[#363636] max-md:p-2 max-md:py-4 hover:px-6 max-md:hover:px-4 transition-all">
          <a target="_blank" className="hover:scale-110 hover:text-yellow-500 transition-all" href={navbarData?.socialMediaLinks.linkedinLink}>
            <RiLinkedinBoxFill className="size-10 max-md:size-8" />
          </a>
          <a target="_blank" className="hover:scale-110 hover:text-yellow-500 transition-all" href={navbarData?.socialMediaLinks.instagramLink}>
            <RiInstagramFill className="size-10 max-md:size-8" />
          </a>
          <a target="_blank" className="hover:scale-110 hover:text-yellow-500 transition-all" href={navbarData?.socialMediaLinks.tiktokLink}>
            <RiTiktokFill className="size-10 max-md:size-8" />
          </a>
        </div>
      </div>
    </header>
  );
}
