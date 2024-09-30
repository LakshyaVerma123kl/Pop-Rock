import React from "react";
import { ShoppingCart } from "lucide-react";

const Header = () => (
  <header className="flex justify-between items-center px-8 py-4 bg-transparent absolute top-0 left-0 w-full z-10">
    <div className="logo flex items-center space-x-2">
      <svg
        width="37"
        height="64"
        viewBox="0 0 37 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* SVG path data */}
      </svg>
      <h1 className="text-lg font-semibold text-white">Pop Rock Crystal</h1>
    </div>
    <nav className="flex space-x-4">
      {["Home", "Shop", "About Us", "Help"].map((item) => (
        <button
          key={item}
          className="text-white px-4 py-2 rounded font-semibold text-sm hover:bg-white/10 transition-colors"
        >
          {item}
        </button>
      ))}
    </nav>
    <div className="flex items-center space-x-4">
      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
        <span className="text-white text-xs">🇺🇸</span>
      </div>
      <ShoppingCart className="h-6 w-6 text-white cursor-pointer" />
    </div>
  </header>
);

export default Header;
