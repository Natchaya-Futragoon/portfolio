import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const sections = [
  { id: "home", label: "Home", path: "/" },
  { id: "aboutme", label: "About Me", path: "/about" },
  { id: "featured", label: "UX Projects", path: "/UXProjects" },
  //{ id: "moreux", label: "More UX Work", path: "#moreux" },
  { id: "characters", label: "Character & World Design", path: "/characters" },
  { id: "artworks", label: "Art Gallery", path: "/artworks" },
  { id: "brewandbreath", label: "Brew & Breath", path: "/brewandbreath" },
];

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const currentPath = location.pathname.toLowerCase();
    const matched = sections.find(section =>
      section.path && section.path.toLowerCase() === currentPath
    );
    if (matched) {
      setActive(matched.id);
    }
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center space-x-3">
          {sections.map((section, index) => (
            <React.Fragment key={section.id}>
              <Link
                to={section.path || `#${section.id}`}
                className={`text-sm font-medium px-3 py-2 rounded-3xl transition-all duration-200 ${
                  active === section.id
                    ? "text-black font-bold"
                    : "text-black hover:bg-black hover:text-white"
                }`}
              >
                {section.label}
              </Link>
              {index < sections.length - 1 && (
                <span className="text-gray-400">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
