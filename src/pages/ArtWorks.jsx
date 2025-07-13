import React, { useState } from "react";
import artworksData from "../data/artworks.json";
import Modal from "../components/ArtworkModal";

const mediums = ["All", "Procreate", "Watercolor", "Color Pencil", "Photography"];
const themes = ["All", "Nature", "Character", "Architecture", "Food", "Animal"];
const projectTypes = ["Sketch Diary", "Five Cats", "K_.Baked", "Cat Oracle"];

const Artworks = () => {
  const [selectedMedium, setSelectedMedium] = useState("All");
  const [selectedTheme, setSelectedTheme] = useState("All");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [searchTag, setSearchTag] = useState("");
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const filteredArtworks = artworksData.filter((art) => {
    const matchesMedium =
      selectedMedium === "All" || (art.medium && art.medium.includes(selectedMedium));

    const matchesTheme =
      selectedTheme === "All" || (art.theme && art.theme.includes(selectedTheme));

    const matchesType =
      selectedTypes.length === 0 ||
      (art.categories && selectedTypes.some((type) => art.categories.includes(type)));

    const matchesSearch =
      searchTag.trim() === "" ||
      (art.tags && art.tags.some((tag) =>
        tag.toLowerCase().includes(searchTag.toLowerCase())
      ));

    return matchesMedium && matchesTheme && matchesType && matchesSearch;
  });

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-6">🎨 Art Gallery </h1>
      <p className="text-center text-gray-600 mb-10">
        A collection of story-rich visual works in digital, watercolor, and more.
      </p>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        <select
          value={selectedMedium}
          onChange={(e) => setSelectedMedium(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          {mediums.map((medium) => (
            <option key={medium} value={medium}>
              Medium: {medium}
            </option>
          ))}
        </select>

        <select
          value={selectedTheme}
          onChange={(e) => setSelectedTheme(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          {themes.map((theme) => (
            <option key={theme} value={theme}>
              Theme: {theme}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="🔍 Search tags..."
          value={searchTag}
          onChange={(e) => setSearchTag(e.target.value)}
          className="border px-3 py-2 rounded"
        />

        <div className="flex flex-wrap gap-2 items-center">
          {projectTypes.map((type) => (
            <label key={type} className="flex items-center space-x-1 text-sm">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => toggleType(type)}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Artwork Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredArtworks.map((art, index) => (
          <div
            key={index}
            className="group aspect-square border-2 border-gray-300 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer bg-white flex items-center justify-center overflow-hidden"
            onClick={() => setSelectedArtwork(art)}
          >
            {art.filename.toLowerCase().endsWith(".mp4") ? (
              <video
              src={`${import.meta.env.BASE_URL}${art.filename}`} 

                className="w-[90%] h-[90%] object-contain transition-transform duration-300 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={`${import.meta.env.BASE_URL}${art.filename}`}
                alt={art.title}
                className="w-[90%] h-[90%] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            )}
          </div>
        ))}
      </div>

      {/* Modal Outside the Grid */}
      {selectedArtwork && (
        <Modal artwork={selectedArtwork} onClose={() => setSelectedArtwork(null)} />
      )}
    </div>
  );
};

export default Artworks;
