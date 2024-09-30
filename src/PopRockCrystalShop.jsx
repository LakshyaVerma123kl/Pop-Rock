import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import ProductGrid from "./ProductGrid";
import BestPrice from "./BestPrice";
import ScrollIndicator from "./ScrollIndicator";

const PopRockCrystalShop = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <ProductGrid />
      <BestPrice />
      <ScrollIndicator />
    </div>
  );
};

export default PopRockCrystalShop;
