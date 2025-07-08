import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Tomato",
    price: "BDT. 30/kg",
    image:
      "https://cdn.pixabay.com/photo/2016/03/05/19/02/tomatoes-1238253_1280.jpg",
    isNew: true,
  },
  {
    id: 2,
    name: "Carrots",
    price: "BDT. 22/kg",
    image:
      "https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=400&q=80",
    isNew: true,
  },
  {
    id: 3,
    name: "Cucumbers",
    price: "BDT. 40/kg",
    image:
      "https://media.istockphoto.com/id/1428793307/photo/fresh-ripe-organic-small-gherkin-cucumbers-in-bowl-on-wooden-table-not-marinated-vegetable.jpg?s=612x612&w=0&k=20&c=eS_jkZXEKYpUWXj6txJVwzydY0X3lBKCPRUoIH7DAPk=",
    isNew: true,
  },
];

export default function SuggestedProducts() {
  return (
    <section className="bg-[#B4D173]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="bg-#B4D173 rounded-xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2e381f] mb-6">
            Suggested Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.slice(0, 3).map(({ id, name, price, image, isNew }) => (
              <div
                key={id}
                className="bg-[#f4fbe3] rounded-xl overflow-hidden shadow hover:shadow-md transition relative"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-44 object-cover"
                />
                {isNew && (
                  <span className="absolute top-0 left-0 rounded-xl w-11 px-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded">
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

          <div className="flex justify-center mt-10">
            <button className="text-sm text-[white] font-medium border border-[#5E8001] px-12 py-3 rounded-xl bg-[#5E8001] transition">
              View All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
