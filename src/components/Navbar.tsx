"use client";
import React, { useState } from "react";
import { HiChevronDown, HiMenu, HiX } from "react-icons/hi";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>({});
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = (key: string) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <nav className="p-4 text-black">
      <div className="mx-auto flex justify-between items-center max-w-6xl">
        <Logo />
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {["Menu 1", "Menu 2", "Menu 3"].map((menu, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => toggleDropdown(menu)}
                className="flex items-center hover:text-blue-400"
              >
                {menu}
                <HiChevronDown
                  className={`w-5 h-5 ml-1 transition-transform duration-200 ${
                    dropdownOpen[menu] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownOpen[menu] && (
                <div className="absolute z-10 w-48 rounded-md shadow-lg mt-2">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                    Dropdown Item 1
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                    Dropdown Item 2
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-4 p-4 rounded-lg">
          {["Menu 1", "Menu 2", "Menu 3"].map((menu, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => toggleDropdown(menu)}
                className="flex justify-between items-center w-full text-left hover:text-blue-400"
              >
                {menu}
                <HiChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    dropdownOpen[menu] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownOpen[menu] && (
                <div className="mt-2 space-y-2 p-2 rounded-md">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                    Dropdown Item 1
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                    Dropdown Item 2
                  </a>
                </div>
              )}
            </div>
          ))}
          <button className="bg-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-600">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
