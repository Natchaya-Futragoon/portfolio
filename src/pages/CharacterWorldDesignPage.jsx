import React from "react";
import { Link } from "react-router-dom";
import characters from "../data/characters.json";

const CharacterWorldDesignPage = () => {
  const prefix = import.meta.env.BASE_URL;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-6">🌍 Character & World Design</h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
        A space where my characters, imagined worlds, and playful concepts come alive —
        from lemon queens to slime families and cat adventures.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {characters.map((char) => (
          <Link
            to={`/characters/${char.slug}`}
            key={char.slug}
            className="group rounded-2xl shadow-lg hover:shadow-xl transition bg-white overflow-hidden border"
          >
            <div className="aspect-[4/5] bg-gray-50 flex items-center justify-center overflow-hidden">
              <img
                src={`${prefix}${char.coverImage}`}
                alt={char.name}
                className="object-contain w-[90%] h-[90%] transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-left text-indigo-700">{char.name}</h2>
              <p className="text-sm text-gray-600 text-left mt-1">{char.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CharacterWorldDesignPage;
