import React from "react";

const featuresData = [
  {
    id: 1,
    title: "Super Fast Delivery",
    description:
      "Get your fresh products delivered within 24 hours anywhere in the city.",
    icon: (
      <svg
        className="w-10 h-10 text-green-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h1l3 6h11l3-6h1"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 16a2 2 0 100 4 2 2 0 000-4zM8 16a2 2 0 100 4 2 2 0 000-4z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Best Quality Products",
    description:
      "We source fresh produce directly from trusted local farms and suppliers.",
    icon: (
      <svg
        className="w-10 h-10 text-green-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Secure Payments",
    description:
      "All transactions are encrypted and secured with best industry standards.",
    icon: (
      <svg
        className="w-10 h-10 text-green-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11c0-3.866-3.134-7-7-7s-7 3.134-7 7 3.134 7 7 7 7-3.134 7-7z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11v4h6" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {featuresData.map(({ id, title, description, icon }) => (
          <div
            key={id}
            className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm hover:shadow-lg transition"
          >
            <div>{icon}</div>
            <h3 className="text-xl font-semibold text-green-900">{title}</h3>
            <p className="text-gray-600 max-w-xs">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
