import React, { useState } from "react";
import { ShoppingCart, Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-4 bg-transparent absolute top-0 left-0 w-full z-10">
      <div className="logo flex items-center space-x-2">
        <svg
          width="37"
          height="64"
          viewBox="0 0 37 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.5219 0C8.29537 0 0 8.44103 0 18.8472V45.1975C0 55.6036 8.29537 64.0447 18.5219 64.0447C28.7485 64.0447 37.0439 55.6036 37.0439 45.1975V18.8472C37 8.44103 28.7046 0 18.5219 0ZM35.5516 45.1975C35.5516 54.7551 27.9146 62.5262 18.5219 62.5262C9.1293 62.5262 1.49229 54.7551 1.49229 45.1975V18.8472C1.49229 9.2896 9.1293 1.51849 18.5219 1.51849C27.9146 1.51849 35.5516 9.2896 35.5516 18.8472V45.1975Z"
            fill="white"
          />
          <path
            d="M12.7725 22.4201L24.7108 36.8904L31.8211 28.2708L26.0275 22.4201H12.7725ZM23.9646 23.8939L19.6195 28.3154L15.9765 23.8939H23.9646ZM24.7108 34.5234L20.5412 29.4766L25.7203 24.2066L29.7582 28.3154L24.7108 34.5234Z"
            fill="white"
          />
          <path
            d="M5.22313 28.2707L18.5221 44.4382L23.5695 38.3196L10.7095 22.688L5.22313 28.2707ZM18.5221 42.0712L7.19822 28.3601L10.5778 24.9211L21.5944 38.3196L18.5221 42.0712Z"
            fill="white"
          />
        </svg>
        <h1 className="text-lg font-semibold text-white hidden md:block">
          Pop Rock Crystal
        </h1>
      </div>
      <nav className="hidden md:flex space-x-4">
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
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-500 md:hidden">
          {["Home", "Shop", "About Us", "Help"].map((item) => (
            <button
              key={item}
              className="block w-full text-white px-4 py-2 text-left font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
