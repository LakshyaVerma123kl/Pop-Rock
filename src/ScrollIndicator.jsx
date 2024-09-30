import React from "react";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => (
  <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-blue-600">
    <span className="mb-2 text-sm">scroll down</span>
    <ChevronDown size={24} className="animate-bounce" />
  </div>
);

export default ScrollIndicator;
