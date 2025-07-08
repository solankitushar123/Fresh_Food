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
      "https://media.istockphoto.com/id/1291262112/photo/banana.webp?a=1&b=1&s=612x612&w=0&k=20&c=KSmjx5R8Qk4mzzGw8tAP3CAPoSH_zdXD7sZYd1lBuD4=",
    isNew: false,
  },
  {
    id: 3,
    name: "Fresh Carrots",
    price: "$2.99 / kg",
    image:
      "https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=400&q=80",
    isNew: false,
  },
  {
    id: 4,
    name: "Juicy Oranges",
    price: "$3.49 / kg",
    image:
      "https://media.istockphoto.com/id/1008375528/photo/orange-fruit-with-green-leafs-in-basket-on-grey-wooden-table.jpg?s=612x612&w=0&k=20&c=igWpC0k_kNA853hryjSaew9Jo26Y3SSgM0CMRphAyUQ=",
    isNew: false,
  },
  {
    id: 5,
    name: "Sweet Mangoes",
    price: "$6.25 / kg",
    image:
      "https://media.istockphoto.com/id/534608466/photo/popular-kesar-mangoes-with-light-green-backround-isolated.jpg?s=612x612&w=0&k=20&c=NaO6CL6Ov_bEaq_MswWNzLnwQBuzRGmnlT-eqLhaOhU=",
    isNew: true,
  },
  {
    id: 6,
    name: "Green Grapes",
    price: "$4.25 / kg",
    image:
      "https://media.istockphoto.com/id/153009876/photo/fresh-green-grapes-with-leaves-isolated-on-white.jpg?s=612x612&w=0&k=20&c=DV4n6hNV-veNHGCPZfNPNeFTe8wU_JYzq5q8Bz9QT6M=",
    isNew: false,
  },
  {
    id: 7,
    name: "Tomatoes",
    price: "$2.50 / kg",
    image:
      "https://cdn.pixabay.com/photo/2016/03/05/19/02/tomatoes-1238253_1280.jpg",
    isNew: false,
  },
  {
    id: 8,
    name: "Broccoli",
    price: "$3.75 / kg",
    image:
      "https://media.istockphoto.com/id/2211945334/photo/isolated-single-fresh-broccoli-floret-exhibiting-green-texture.jpg?s=612x612&w=0&k=20&c=2aUnvA8OAu5eVBJui9M0DidJfnaEyW9vB3TS1oJ4jKw=",
    isNew: true,
  },
  {
    id: 9,
    name: "Lettuce",
    price: "$1.99 / kg",
    image:
      "https://media.istockphoto.com/id/535910387/photo/ripe-organic-green-salad-romano.jpg?s=612x612&w=0&k=20&c=9GTcj_WqUk9LWkzUb6g4MCnLTPAapT_hNMZCHRd3C1U=",
    isNew: false,
  },
  {
    id: 10,
    name: "Red Cherries",
    price: "$7.99 / kg",
    image:
      "https://media.istockphoto.com/id/1435219728/photo/fresh-red-cherries-fruit-in-bowl.jpg?s=612x612&w=0&k=20&c=l86aV6DDDKOwVOOFXe0zCs-ckwbiExqSNZVlqGaQb4g=",
    isNew: false,
  },
  {
    id: 11,
    name: "Pineapple",
    price: "$4.20 / kg",
    image:
      "https://media.istockphoto.com/id/172388455/photo/pineapple-wallpaper.jpg?s=612x612&w=0&k=20&c=F7shu4sqGDz3b0_siHgHZ0j7sNeUHjBHVPquu2oTNFw=",
    isNew: false,
  },
  {
    id: 12,
    name: "Strawberries",
    price: "$8.25 / kg",
    image:
      "https://media.istockphoto.com/id/2212130187/photo/a-vibrant-collection-of-ripe-juicy-strawberries-fills-the-market-stall-reflecting-the-sunshine.jpg?s=612x612&w=0&k=20&c=Nwl59XF3iF51lVZCIGLI7qUkIBov8n1Eoxz9tWBwrEA=",
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
