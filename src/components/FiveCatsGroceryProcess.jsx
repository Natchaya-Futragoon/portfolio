import React from "react";
import { FaSearch, FaList, FaPalette, FaPaintBrush, FaCode } from "react-icons/fa";

const steps = [
  { icon: <FaSearch size={24} />, label: "Content Research" },
  { icon: <FaList size={24} />, label: "Product Categorization" },
  { icon: <FaPalette size={24} />, label: "Brand Tone & Colors" },
  { icon: <FaPaintBrush size={24} />, label: "UI & Illustration" },
  { icon: <FaCode size={24} />, label: "Frontend & Backend Dev" },
];

const FiveCatsGroceryProcess = () => {
  return (
    <div className="text-center mt-12">
      <h3 className="text-lg font-semibold mb-6 text-pink-600">🐾 Five Cats Grocery Process</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-pink-50 rounded-lg px-4 py-6 flex flex-col items-center justify-center shadow hover:shadow-md transition"
          >
            <div className="mb-3 text-pink-700">{step.icon}</div>
            <p className="text-sm font-medium text-gray-800">{step.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveCatsGroceryProcess;
