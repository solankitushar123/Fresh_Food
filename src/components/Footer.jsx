import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaArrowUp,
  FaGlobe,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-lime-300 text-gray-800 py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left Section */}
        <div className="space-y-4">
          <img
            src="/images/fresh-logo.png"
            alt="Fresh Food Logo"
            className="w-24"
          />{" "}
          {/* Update with your logo path */}
          <h3 className="font-bold text-lg">Fresh Food</h3>
          <div className="flex items-center gap-2">
            <FaGlobe />
            <span>www.freshfood.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>help@freshfood.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone />
            <span>+8801234567890</span>
          </div>
        </div>

        {/* Middle Section */}
        <div className="space-y-3">
          <h3 className="font-bold text-lg">Fresh Food Pages</h3>
          <p>Home</p>
          <p>Categories</p>
          <p>Blog</p>
          <p>Terms And Conditions</p>
          <p>Privacy Policy</p>
          <p>Return Policy</p>
          <p>About us</p>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Follow us on</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaFacebookF className="text-xl" />
              <span>Facebook</span>
            </div>
            <div className="flex items-center gap-2">
              <FaTwitter className="text-xl" />
              <span>Twitter</span>
            </div>
            <div className="flex items-center gap-2">
              <FaInstagram className="text-xl" />
              <span>Instagram</span>
            </div>
          </div>

          <div className="flex gap-4">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="w-32"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-36"
            />
          </div>
        </div>

        {/* Up Arrow */}
        <div>
          <button className="bg-green-800 text-white rounded-full p-3">
            <FaArrowUp />
          </button>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center mt-8">
        © 2002 - 2022 Fresh Food, LLC. All Rights Reserved.
      </p>
    </footer>
  );
}
