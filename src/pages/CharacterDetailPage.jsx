// pages/CharacterDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import characters from "../data/characters.json";

const CharacterDetailPage = () => {
  const { slug } = useParams();
  const character = characters.find((c) => c.slug === slug);

  if (!character) return <div>Character not found</div>;

  const prefix = import.meta.env.BASE_URL;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
      <h1 className="text-4xl font-bold text-center">{character.name}</h1>
      <p className="text-center text-gray-500 text-lg mb-6">{character.tagline}</p>

      {/* 👉 Main Character Image */}
      <div className="flex justify-center">
        <img
          src={`${prefix}${character.coverImage}`}
          alt={character.name}
          className="w-full max-w-sm rounded-xl shadow-lg"
        />
      </div>

      {character.finishedImages?.length > 0 && (
        <div className="grid grid-cols-1 gap-4 mb-8">
          {character.finishedImages.map((img, idx) => (
            <img
              key={idx}
              src={`${prefix}${img}`}
              alt={`${character.name} finished ${idx + 1}`}
              className="rounded-lg shadow object-contain w-full max-h-[500px] mx-auto"
            />
          ))}
        </div>
      )}

      {/* ✍️ Story */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Story</h2>
        <p className="whitespace-pre-line text-gray-700">{character.story}</p>
      </section>

      {/* ✏️ Sketches */}
      {character.sketches && character.sketches.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">Sketches</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {character.sketches.map((src, index) => (
              <img
                key={index}
                src={`${prefix}${src}`}
                alt={`Sketch ${index + 1}`}
                className="rounded-lg shadow"
              />
            ))}
          </div>
        </section>
      )}

      {/* 🎥 Drawing Video */}
      {character.video && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">🎥 Drawing Process</h2>
          <div className="w-full max-w-3xl mx-auto">
            <video
              src={`${prefix}${character.video}`}
              controls
              className="w-full rounded-lg shadow"
              playsInline
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default CharacterDetailPage;
