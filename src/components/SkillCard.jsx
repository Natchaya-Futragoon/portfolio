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
        className="w-48 h-64 sm:w-56 sm:h-72 perspective cursor-pointer"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front Side */}
          <div
            className={`absolute w-full h-full backface-hidden shadow-xl shadow-slate-400 border-[0px] border-white rounded-lg flex items-center justify-center text-xl font-semibold ${frontColorClass}`}
          >
            {title}
          </div>
  
          {/* Back Side */}
          <div
            className={`absolute w-full h-full rotate-y-180 backface-hidden border-[0px] border-white shadow-lg shadow-slate-400 rounded-lg p-4 overflow-y-auto ${backColorClass} flex items-center justify-center`}
          >
           <ul className="text-lg space-y-3 font-semibold text-center pt-0">
  {skills.map((skill, idx) => (
    <li
      key={idx}
      className={`pt-2 ${idx !== 0 ? "border-t border-dashed border-slate-400" : ""}`}
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
