import React from "react";
import { FiPhone } from "react-icons/fi";

import bike from "../assets/bike.jpg";
import org from "../assets/org.jpg";
import erth from "../assets/erth.jpg";
import sl from "../assets/sl.png";

const items = [
  {
    icon: bike,
    title: "Fast Delivery",
    desc: "Within 24 hours in city",
  },
  {
    icon: org,
    title: "Organic Products",
    desc: "Fresh from local farms",
  },
  {
    icon: erth,
    title: "Secure Payment",
    desc: "100% safe checkout",
  },
];

export default function Hero() {
  return (
    <>
      <section className="relative bg-[#fcfdf8] overflow-hidden">
        {/* Background curve shape */}
        <div className="absolute -top-40 right-0 w-[45%] h-[140%] bg-[#B4D173] rounded-l-[100%] z-0"></div>

        <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-10 py-20 z-10">
          {/* Left Content */}
          <div className="space-y-6 text-left order-2 md:order-1">
            <h1 className="text-[40px] md:text-[56px] font-bold text-[#2e381f] leading-tight">
              <span className="text-[#608001]">Eat</span> Healthy <br />
              Live <span className="text-[#608001]">Healthy</span>
            </h1>
            <p className="text-[#5f6c37] text-base md:text-lg max-w-md">
              We provide you with fresh, organic, and chemical-free foods
              directly to your doorstep.
            </p>
            <button className="bg-[#5e7e18] text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 shadow-md">
              <FiPhone className="text-lg" /> Call for Details
            </button>
          </div>

          {/* Right Image Content */}
          <div className="relative mt-10 md:mt-0 order-1 md:order-2">
            <img
              src={sl}
              alt="Vegetables Demo"
              className="w-full max-w-[480px] mx-auto md:mx-0"
            />

            {/* Label Box */}
            <div className="absolute bottom-6 left-6 bg-[#5e7e18] text-white px-4 py-3 rounded-md text-sm shadow-lg max-w-[460px]">
              <p className="font-semibold">Vegetable Bundle</p>
              <p className="text-xs opacity-90">5kg of various vegetables</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-sm font-semibold">Only at BDT. 299</span>
                <button className="bg-white text-[#5e7e18] px-3 py-1 rounded-full text-xs font-medium">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Feature Section */}
      <section className="bg-white py-10">
        {/* Top Heading */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl text-gray-800">
            Get fresh foods for your family
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 font-semibold">
            <span className="font-bold">anytime</span> and{" "}
            <span className="font-bold">anywhere.</span>
          </p>
        </div>

        {/* Icon Cards */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[white] p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 mx-auto mb-3 object-contain"
              />
              <h3 className="text-lg font-bold mb-1 text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
