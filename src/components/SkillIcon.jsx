import React from "react";

const SkillIcon = ({ icon, label }) => (
  <div className="flex flex-col items-center transition-transform hover:scale-110">
    <img src={icon} alt={label} className="w-10 h-10 mb-2" />
    <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>
  </div>
);

export default SkillIcon;
