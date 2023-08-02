import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoLogInOutline, IoCallOutline } from "react-icons/io5";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavSticky, setIsNavSticky] = useState(false);

  // The Following not behaving as expected, navRef.current is not working

  const navRef = useRef(null); // Move useRef inside useEffect

  useEffect(() => {
    let observer; // Declare the observer ref

    function observeNavBar() {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        setIsNavSticky(entry.isIntersecting);
      }, options);

      console.log(observer);

      if (navRef.current) {
        observer.observe(navRef.current);
      }
    }

    observeNavBar();

    return () => {
      // Clean up the observer when the component is unmounted
      if (observer && navRef.current) {
        observer.unobserve(navRef.current);
        console.log("working");
      }
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`bg-white fixed w-full z-20 top-0 left-0 ${
          isNavSticky ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <Link href="/">
            <div className="flex items-center">
              <Image
                src="https://img.majorkalshiclasses.com/images/file_1689934507159.svg"
                alt="Flowbite Logo"
                width={32}
                height={32}
                className="h-8 sm:h-14 md:h-20 lg:h-8 mr-3 rounded-full"
              />
              <h1 className="self-center text-2xl font-semibold whitespace-nowrap">
                MKC
              </h1>
            </div>
          </Link>
          <div className="flex md:order-2">
            <div className="flex space-x-4">
              <button
                type="button"
                className="flex items-center space-x-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
              >
                <IoLogInOutline size={24} />
                <span>Register</span>
              </button>
              <button
                type="button"
                className="hidden sm:flex md:flex items-center space-x-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
              >
                <IoCallOutline size={24} />
                <Link href="/enquiry">Enquiry</Link>
              </button>
            </div>

            <button
              onClick={handleMenuToggle} // Add this onClick handler
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen} // Pass the state to indicate the menu status
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "block" : "hidden"
            }`} // Use conditional rendering to toggle menu visibility
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  href="/about"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Download
                </Link>
              </li>
              <li>
                <Link
                  href="/test-center"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Test Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
