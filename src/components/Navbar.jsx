import React from "react";
import {
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiChevronDown,
} from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-4">
        {/* Left: Logo & Menu */}
        <div className="flex items-center gap-12">
          <img
            src="/src/assets/logo.jpg" // Replace with your logo path
            alt="FreshFood"
            className="h-10"
          />

          {/* Menu Links */}
          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            <a href="#" className="text-green-600 font-semibold">
              Home
            </a>
            <a
              href="#"
              className="hover:text-green-600 flex items-center gap-1"
            >
              Categories <FiChevronDown className="text-sm" />
            </a>
            <a
              href="#"
              className="hover:text-green-600 flex items-center gap-1"
            >
              Pages <FiChevronDown className="text-sm" />
            </a>
            <a href="#" className="hover:text-green-600">
              Blog
            </a>
            <a href="#" className="hover:text-green-600">
              About
            </a>
          </nav>
        </div>

        {/* Right: Search + Icons */}
        <div className="flex items-center gap-4">
          {/* Search Box */}
          <div className="hidden lg:flex bg-white border rounded-full overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Search for product..."
              className="px-4 py-1.5 outline-none text-sm w-48"
            />
            <button className="bg-[#5e7e18] text-white px-3 flex items-center justify-center">
              <FiSearch className="text-lg" />
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow">
              <FiUser className="text-gray-800" />
            </div>
            <div className="relative w-9 h-9 bg-white rounded-full flex items-center justify-center shadow">
              <FiShoppingCart className="text-gray-800" />
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
