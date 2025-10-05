import React, { useState } from "react";

const SkillCard = ({
  title,
  skills,
  frontColorClass = "bg-slate-100 text-slate-800",
  backColorClass = "bg-slate-600 text-slate-100",
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-32 h-44 sm:w-40 sm:h-52 md:w-44 md:h-60 lg:w-52 lg:h-68 perspective cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div
          className={`absolute w-full h-full backface-hidden shadow-lg shadow-slate-400 border border-white rounded-lg flex items-center justify-center text-sm sm:text-base md:text-lg font-semibold ${frontColorClass}`}
        >
          {title}
        </div>

        {/* Back */}
        <div
          className={`absolute w-full h-full rotate-y-180 backface-hidden border border-white shadow-lg shadow-slate-400 rounded-lg p-3 overflow-y-auto ${backColorClass} flex items-center justify-center`}
        >
          <ul className="text-xs sm:text-sm md:text-base space-y-2 text-center pt-0">
            {skills.map((skill, idx) => (
              <li
                key={idx}
                className={`pt-2 ${
                  idx !== 0 ? "border-t border-dashed border-slate-400" : ""
                }`}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
