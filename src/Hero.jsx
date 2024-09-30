import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image1 from "./assets/Hero.png";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  const images = [
    { src: Image1, alt: "Crystal Agate Phone Grip 1" },
    { src: Image1, alt: "Crystal Agate Phone Grip 2" },
    { src: Image1, alt: "Crystal Agate Phone Grip 3" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-gradient-to-b from-sky-400 via-blue-300 to-blue-200 pt-24 pb-12 px-4 md:px-6 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight text-center md:text-left">
            Welcome to
            <br />
            Pop Rock Crystal Shop!
          </h1>
          <p className="text-white mb-6 text-base md:text-lg leading-relaxed text-center md:text-left">
            Here you will find unique phone accessories, crystals, jewelry and
            more. Free shipping inside the U.S. and our phone grips come with a
            limited warranty. Enjoy!
          </p>
          <div className="text-center md:text-left">
            <button className="bg-white text-blue-600 px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold transition duration-300 hover:bg-blue-500 hover:text-white">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="w-full md:w-5/12">
          <div className="bg-white rounded-3xl p-4 md:p-6 shadow-lg">
            <div className="relative mb-4">
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="w-full rounded-lg"
              />
              <span className="absolute top-2 left-2 bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs font-semibold">
                New lot
              </span>
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 md:p-2 hover:bg-opacity-75 transition-all duration-200"
              >
                <ChevronLeft className="text-blue-600 w-4 h-4 md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 md:p-2 hover:bg-opacity-75 transition-all duration-200"
              >
                <ChevronRight className="text-blue-600 w-4 h-4 md:w-6 md:h-6" />
              </button>
            </div>
            <h3 className="text-gray-700 font-semibold text-base md:text-lg">
              CRYSTAL AGATE PHONE GRIP
            </h3>
            <span className="text-gray-500 font-bold text-lg md:text-xl">
              18.99$
            </span>
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
