import React from "react";
import { FaFilter, FaSortAmountDown } from "react-icons/fa";

const browseProducts = [
  {
    id: 1,
    name: "Fresh Apples",
    price: "$4.99 / kg",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80",
    isNew: true,
  },
  {
    id: 2,
    name: "Organic Bananas",
    price: "$3.99 / kg",
    image:
      "https://images.unsplash.com/photo-1574226516831-e1dff420e8f8?auto=format&fit=crop&w=400&q=80",
    isNew: false,
  },
  {
    id: 3,
    name: "Fresh Carrots",
    price: "$2.99 / kg",
    image:
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=400&q=80",
    isNew: false,
  },
  {
    id: 4,
    name: "Juicy Oranges",
    price: "$3.49 / kg",
    image:
      "https://images.unsplash.com/photo-1571689936007-3e94c0a3c859?auto=format&fit=crop&w=400&q=80",
    isNew: false,
  },
  {
    id: 5,
    name: "Sweet Mangoes",
    price: "$6.25 / kg",
    image:
      "https://images.unsplash.com/photo-1587049352859-1737e2c38b41?auto=format&fit=crop&w=400&q=80",
    isNew: true,
  },
  {
    id: 6,
    name: "Green Grapes",
    price: "$4.25 / kg",
    image:
      "https://images.unsplash.com/photo-1603036376605-04694d571c2f?auto=format&fit=crop&w=400&q=80",
    isNew: false,
  },
  {
    id: 7,
    name: "Tomatoes",
    price: "$2.50 / kg",
    image:
      "https://images.unsplash.com/photo-1582281298056-369090bb275e?auto=format&fit=crop&w=400&q=80",
    isNew: false,
  },
  {
    id: 8,
    name: "Broccoli",
    price: "$3.75 / kg",
    image:
      "https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=400&q=80",
    isNew: true,
  },
  {
    id: 9,
    name: "Lettuce",
    price: "$1.99 / kg",
    image:
      "https://images.unsplash.com/photo-1567303313489-57c1b9099f8c?auto=format&fit=crop&w=400&q=80",
    isNew: false,
  },
  {
    id: 10,
    name: "Red Cherries",
    price: "$7.99 / kg",
    image:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=400&q=80",
    isNew: false,
  },
  {
    id: 11,
    name: "Pineapple",
    price: "$4.20 / kg",
    image:
      "https://images.unsplash.com/photo-1574226516831-e1dff420e8f8?auto=format&fit=crop&w=400&q=80",
    isNew: false,
  },
  {
    id: 12,
    name: "Strawberries",
    price: "$8.25 / kg",
    image:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=400&q=80",
    isNew: true,
  },
];

export default function BrowseProducts() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="bg-[#f4fbe3] rounded-2xl p-6 md:p-10 shadow-md">
          {/* Top Bar with Filters */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex flex-wrap gap-3 mb-4 md:mb-0">
              {["All", "Vegetables", "Fruits", "Dairy", "Meat", "Bakery"].map(
                (category, i) => (
                  <button
                    key={i}
                    className="bg-white px-4 py-2 rounded-md text-sm text-[#4c7c16] font-medium hover:bg-[#ecf3dc] transition"
                  >
                    {category}
                  </button>
                )
              )}
            </div>
            <div className="flex items-center gap-4">
              <button className="text-[#4c7c16] flex items-center gap-2 text-sm font-medium">
                <FaFilter /> Filter
              </button>
              <button className="text-[#4c7c16] flex items-center gap-2 text-sm font-medium">
                <FaSortAmountDown /> Sort
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {browseProducts.map(({ id, name, price, image, isNew }) => (
              <div
                key={id}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition relative"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-48 object-cover"
                />
                {isNew && (
                  <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    New
                  </span>
                )}
                <div className="p-4">
                  <h3 className="text-base font-semibold text-[#2e381f] mb-1">
                    {name}
                  </h3>
                  <p className="text-[#5f6c37] font-medium text-sm">{price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Page Info */}
          <div className="mt-10 text-center">
            <p className="text-sm text-[#5f6c37]">Page 1 of 35</p>
          </div>
        </div>
      </div>
    </section>
  );
}
