import React from "react";
import Image from "./assets/Hero.png";

const ProductGrid = () => {
  const products = Array(8).fill({
    name: "CRYSTAL AGATE PHONE GRIP",
    price: "18.99$",
    image: { Image },
  });

  return (
    <section className="py-8 md:py-12 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          All product
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="mr-2 text-gray-600">Filter:</span>
            <select className="border border-gray-300 rounded px-4 py-2">
              <option>All Products</option>
            </select>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-gray-600">Sort:</span>
            <select className="border border-gray-300 rounded px-4 py-2">
              <option>Best Selling</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <img
                src={Image}
                alt={product.name}
                className="w-full h-32 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-gray-700 font-semibold mb-2 text-base">
                {product.name}
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-bold text-lg">
                  {product.price}
                </span>
                <button className="bg-blue-400 text-white px-4 py-2 rounded-full text-sm font-semibold transition duration-300 hover:bg-blue-500">
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="block mx-auto mt-8 border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full font-semibold transition duration-300 hover:bg-blue-400 hover:text-white">
          View All
        </button>
      </div>
    </section>
  );
};

export default ProductGrid;
