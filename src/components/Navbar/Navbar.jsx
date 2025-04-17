import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 text-gray-600 bg-white body-font shadow-md">
      <div className="container mx-auto flex flex-wrap h-18 p-5 flex-row items-center justify-between">
        <Link to="/" className="flex title-font font-medium items-center">
          <h1 className="font-extrabold text-3xl text-blue-700 tracking-wider">
            Leadify
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-base">
          <div className="relative group">
            <div className="font-bold cursor-pointer text-black flex gap-2 items-center">
              <Link to={"/"}>
                <p className="hover:text-blue-700 transition-all duration-200">
                  Home
                </p>
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="font-bold cursor-pointer text-black flex gap-2 items-center">
              <Link to={"/about"}>
                <p className="hover:text-blue-700 transition-all duration-200">
                  About
                </p>
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="font-bold cursor-pointer text-black flex gap-2 items-center">
              <Link to={"/portfolio"}>
                <p className="hover:text-blue-700 transition-all duration-200">
                  Portfolio
                </p>
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="font-bold cursor-pointer text-black flex gap-2 items-center">
              <Link to={"/services"}>
                <p className="hover:text-blue-700 transition-all duration-200">
                  Services
                </p>
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="font-bold cursor-pointer text-black flex gap-2 items-center">
              <Link to={"/contact"}>
                <p className="hover:text-blue-700 transition-all duration-200">
                  Contact
                </p>
              </Link>
            </div>
          </div>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <FiMenu className="w-6 h-6 mt-2" />
          </button>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 w-3/4 max-w-xs shadow-lg transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <Link to={"/"}>
            <h1 className="font-extrabold text-lg text-blue-700 tracking-wider">
              Leadify
            </h1>
          </Link>
          <button onClick={() => setMenuOpen(false)}>
            <FiX className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <div className="p-4">
          {/* Accordion Menu */}
          {[
            {
              title: "Home",
            },
            {
              title: "About",
            },
            {
              title: "Portfolio",
            },
            {
              title: "Services",
            },
            {
              title: "Contact",
            },
          ].map((section, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <button
                onClick={() => toggleAccordion(section.title)}
                className="w-full flex justify-between items-center font-semibold text-left text-black py-2"
              ></button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeAccordion === section.title
                    ? "max-h-60 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
