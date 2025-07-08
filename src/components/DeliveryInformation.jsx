import React from "react";
import logo from "../assets/men.jpg";

export default function DeliveryInformation() {
  return (
    <div className="bg-white-50 p-6 rounded-lg max-w-4xl mx-auto">
      {/* Header Row */}
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-bold text-gray-800">
          Delivery Information
        </h2>

        <img
          src={logo}
          alt="Delivery Person"
          className="w-50 h-auto rounded-md object-cover"
        />
      </div>

      {/* Delivery Info */}
      <div className="flex flex-col md:flex-row justify-center text-center gap-16 mt-12">
        {/* Inside City */}
        <div>
          <div className="flex justify-center items-center mb-3">
            <span className="text-green-600 mr-2 text-xl">✔️</span>
            <span className="text-lg text-gray-800">
              Home delivery available countrywide.
            </span>
          </div>
          <h3 className="font-semibold text-lg mb-1 text-gray-800">
            Inside City Corporation
          </h3>
          <p className="text-gray-700">⏱️ Delivery within 6 hours</p>
          <p className="text-gray-700">💰 Delivery charge BDT. 50</p>
        </div>

        {/* Outside City */}
        <div>
          <h3 className="font-semibold text-lg mb-1 text-gray-800">
            Outside City Corporation
          </h3>
          <p className="text-gray-700">⏱️ Delivery within 24 hours</p>
          <p className="text-gray-700">💰 Delivery charge BDT. 70</p>
        </div>
      </div>
    </div>
  );
}
