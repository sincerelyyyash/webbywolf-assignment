"use client";
import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>({});

  const toggleDropdown = (key: string) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <nav className="p-4">
      <div className="mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex space-x-12">
          {["Menu 1", "Menu 2", "Menu 3"].map((menu, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => toggleDropdown(menu)}
                className="text-blue-500 hover:text-blue-700 flex items-center"
              >
                {menu}
                <HiChevronDown
                  className={`w-5 h-5 ml-1 transition-transform duration-200 ${
                    dropdownOpen[menu] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownOpen[menu] && (
                <div className="absolute z-10 w-48 bg-gray-700 rounded-md shadow-lg mt-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-600">
                    Dropdown Item 1
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-600">
                    Dropdown Item 2
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          <button className="bg-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;