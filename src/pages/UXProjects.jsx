import React from "react";
import { Link } from "react-router-dom";

const projects = [
  { id: 1, title: "Wilia Web App", image: "/public/images/projects/wilia/wilia.jpg", link: "/wilia" },
  { id: 2, title: "SpeakMate IOS App", image: "/public/images/projects/speakmate/speakmate.jpg", link: "/speakmate" },
  { id: 3, title: "Cats Grocery Store Website", image: "/public/images/projects/fivecatweb/fivecatweb.jpg", link: "/fivecatweb" },
  { id: 4, title: "Augmented Memory", image: "/public/images/projects/augmentedmemory/augmentedmemory.jpg", link: "/augmentedmemory" },
];

const moreProjects = [
  { id: 5, title: "Smart Fridge UI", image: "/images/fridge.jpg", link: "/smartfridge" },
  { id: 6, title: "Standing Hero", image: "/images/standing.jpg", link: "/standinghero" },
  { id: 7, title: "Augmented Memory", image: "/images/ar.jpg", link: "/augmentedmemory" },
];

const UXProjects = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
      {/* Section 1: Featured Projects */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">🌟 Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link to={project.link} key={project.id}>
              <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 2: More UX Work */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">🛠️ More UX Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {moreProjects.map((project) => (
            <Link to={project.link} key={project.id}>
              <div className="rounded-lg shadow bg-white hover:shadow-md transition p-3">
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md" />
                <h4 className="text-md font-semibold mt-3 text-center">{project.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UXProjects;
