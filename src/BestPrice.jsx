import React from "react";
import Image from "./assets/Hero.png";

const BestPrice = () => (
  <section className="py-12 px-6 bg-gradient-to-b from-blue-200 to-white">
    <div className="max-w-6xl mx-auto flex flex-row items-center justify-between">
      <div className="w-7/12">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">BEST PRICE</h2>
        <h3 className="text-5xl font-bold text-gray-800 mb-4">
          Agate Phone Grip
        </h3>
        <div className="flex items-center mb-4">
          <span className="text-gray-500 line-through mr-2 text-xl">
            44.50$
          </span>
          <span className="text-5xl font-bold text-red-500">19.50$</span>
        </div>
        <p className="text-gray-600 mb-6 text-lg">
          These Pop Rock Crystal grip tops can be swapped with other tops
          depending on your mood, outfit, nails, phone case, holiday, etc! Just
          gently separate the sides to remove and snap on a new cover or design!
        </p>
        <button className="bg-blue-400 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 hover:bg-blue-500">
          BUY NOW
        </button>
      </div>
      <div className="w-4/12">
        <div className="bg-white rounded-full p-8 shadow-lg">
          <img
            src={Image}
            alt="Agate Phone Grip"
            className="w-full rounded-full"
          />
        </div>
      </div>
    </div>
  </section>
);

export default BestPrice;
