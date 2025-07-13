import React, { useState } from "react";
import {
  FaSearch,
  FaLightbulb,
  FaRegStickyNote,
  FaDraftingCompass,
  FaVial,
  FaCheckCircle,
  FaSyncAlt,
  FaUserFriends,
} from "react-icons/fa";

const stages = [
  { id: 1, label: "Desk Research", icon: <FaSearch />, description: "We explored academic papers and current tools to understand WIL stakeholders." },
  { id: 2, label: "Ideation", icon: <FaLightbulb />, description: "Brainstormed and ideate 3 core features that enhance WIL journey." },
  { id: 3, label: "Design Artefacts", icon: <FaRegStickyNote />, description: "Generated Personas of 3 stakeholders (student, industry partner, academic professor)." },
  { id: 4, label: "Paper Prototype", icon: <FaDraftingCompass />, description: "Created a paper prototype to visualise the interaction." },
  { id: 5, label: "Usability Test", icon: <FaVial />, description: "Tested wireframe flow with students, academics, and professionals." },
  { id: 6, label: "Heuristic Evaluation", icon: <FaCheckCircle />, description: "Evaluated interface with design heuristics and accessibility lens." },
  { id: 7, label: "Mid-Fi Prototype", icon: <FaSyncAlt />, description: "Updated prototype from testing and evaluation." },
  { id: 8, label: "Field Study", icon: <FaUserFriends />, description: "Interviewed target users for better understanding the context." },
  { id: 9, label: "Semi-Functional Prototype", icon: <FaSyncAlt />, description: "Iterated prototype again after analysing insights." },
  { id: 10, label: "Usability Test", icon: <FaVial />, description: "Re-tested updated prototype for effectiveness." },
  { id: 11, label: "Final Prototype", icon: <FaSyncAlt />, description: "Final refinements made to visuals core features as an MVP." },
];

const WiliaProcess = () => {
  const [openStage, setOpenStage] = useState(null);

  return (
    <section className="mt-16 px-4">
      <h3 className="text-xl font-semibold text-center mb-8">🌀 Wilia Process (Lean UX Loop)</h3>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {stages.map((stage, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <button
              onClick={() => setOpenStage(openStage === index ? null : index)}
              className="text-gray-700 dark:text-white hover:text-blue-600 transition-colors flex flex-col items-center"
            >
              <div className="text-3xl p-4 bg-gray-100 dark:bg-gray-800 rounded-full shadow">
                {stage.icon}
              </div>
              <span className="mt-2 text-sm font-medium">{stage.label}</span>
            </button>
            {openStage === index && (
              <div className="mt-2 max-w-xs text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-4 rounded-xl shadow">
                {stage.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WiliaProcess;
