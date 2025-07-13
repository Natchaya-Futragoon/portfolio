import React from "react";
import {
  FaLightbulb,
  FaQuestionCircle,
  FaPuzzlePiece,
  FaBullseye,
  FaCommentDots,
  FaMobileAlt,
  FaFileAlt,
  FaPenFancy,
  FaCogs,
  FaCheckCircle,
} from "react-icons/fa";
import { GiPaperClip } from "react-icons/gi";

const steps = [
  { icon: <FaLightbulb size={24} />, label: "Big Idea" },
  { icon: <FaQuestionCircle size={24} />, label: "Essential Question" },
  { icon: <FaPuzzlePiece size={24} />, label: "Challenge Statement" },
  { icon: <FaBullseye size={24} />, label: "Guiding Question" },
  { icon: <FaCommentDots size={24} />, label: "Refined Challenge" },
  { icon: <FaFileAlt size={24} />, label: "Problem Statement" },
  { icon: <FaPenFancy size={24} />, label: "Solution Concept with Lotus Blossom Techniques" },
  { icon: <GiPaperClip size={24} />, label: "App Statement" },
  { icon: <FaMobileAlt size={24} />, label: "App Concept" },
  { icon: <FaCogs size={24} />, label: "Paper Prototype" },
  { icon: <FaPenFancy size={24} />, label: "Refined Prototype" },
  { icon: <FaCheckCircle size={24} />, label: "App" },
];

const SpeakMateProcess = () => {
  return (
    <div className="text-center mt-12">
      <h3 className="text-lg font-semibold mb-6 text-blue-600">🔄 SpeakMate Process</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg px-4 py-6 flex flex-col items-center justify-center shadow hover:shadow-md transition"
          >
            <div className="mb-3 text-gray-700">{step.icon}</div>
            <p className="text-sm font-medium">{step.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakMateProcess;
