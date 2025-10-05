import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Wilia Web App",
    image: `${import.meta.env.BASE_URL}images/projects/wilia/wilia.jpg`,
    link: "/wilia",
  },
  {
    id: 2,
    title: "SpeakMate IOS App",
    image: `${import.meta.env.BASE_URL}images/projects/speakmate/speakmate.jpg`,
    link: "/speakmate",
  },
  {
    id: 3,
    title: "Cats Grocery Store Website",
    image: `${import.meta.env.BASE_URL}images/projects/fivecatweb/fivecatweb.jpg`,
    link: "/fivecatweb",
  },
  {
    id: 4,
    title: "Augmented Memory",
    image: `${import.meta.env.BASE_URL}images/projects/augmentedmemory/augmentedmemory.jpg`,
    link: "/augmentedmemory",
  },
];

// const moreProjects = [
//   {
//     id: 5,
//     title: "Smart Fridge UI",
//     image: `${import.meta.env.BASE_URL}images/projects/smartfridge.jpg`,
//     link: "/smartfridge",
//   },
//   {
//     id: 6,
//     title: "Standing Hero",
//     image: `${import.meta.env.BASE_URL}images/projects/standinghero.jpg`,
//     link: "/standinghero",
//   },
//   {
//     id: 7,
//     title: "AR Story Concept (Coming Soon)",
//     image: `${import.meta.env.BASE_URL}images/projects/ar.jpg`,
//     link: "#",
//   },
// ];

const UXProjects = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
      {/* 🌟 Featured Projects */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">🌟 Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link to={project.link} key={project.id}>
              <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 sm:h-72 md:h-80 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 👀 More Projects Placeholder */}
      <section className="text-center py-10 text-gray-500">
        <h2 className="text-xl font-semibold">✨ More projects coming soon...</h2>
      </section>

      {/* 🛠️ More UX Work (Commented Out) */}
      {/*
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">🛠️ More UX Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {moreProjects.map((project) => (
            <Link to={project.link} key={project.id}>
              <div className="rounded-lg shadow bg-white hover:shadow-md transition p-3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h4 className="text-md font-semibold mt-3 text-center">{project.title}</h4>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-6 italic">More coming soon...</p>
      </section>
      */}
    </div>
  );
};

export default UXProjects;
