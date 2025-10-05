import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const sections = [
  { id: "home", label: "Home", path: "/" },
  { id: "aboutme", label: "About Me", path: "/about" },
  { id: "featured", label: "UX Projects", path: "/UXProjects" },
  { id: "characters", label: "Character & World Design", path: "/characters" },
  { id: "artworks", label: "Art Gallery", path: "/artworks" },
  // { id: "brewandbreath", label: "Brew & Breath", path: "/brewandbreath" },
];

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const currentPath = location.pathname.toLowerCase();
    const matched = sections.find((section) =>
      section.path && section.path.toLowerCase() === currentPath
    );
    if (matched) {
      setActive(matched.id);
    }
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-800 text-black dark:text-white shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 py-2 min-h-[48px] sm:min-h-[56px] text-sm">
          {sections.map((section, index) => (
            <React.Fragment key={section.id}>
              <Link
                to={section.path || `#${section.id}`}
                className={`font-medium px-3 py-1.5 rounded-3xl transition-all duration-200 ${
                  active === section.id
                    ? "text-black dark:text-white font-bold"
                    : "text-black dark:text-gray-300 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
                }`}
              >
                {section.label}
              </Link>
              {index < sections.length - 1 && (
                <span className="text-gray-400 dark:text-gray-500 hidden sm:inline">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
