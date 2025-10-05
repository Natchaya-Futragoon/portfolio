import React, { useState } from "react";
import artworksData from "../data/artworks.json";
import Modal from "../components/ArtworkModal";

const mediums = ["All", "Procreate", "Watercolor", "Color Pencil", "Photography"];
const categories = ["All", "Nature", "Character", "Architecture", "Food", "Animal"];
const themes = ["Sketch Diary", "Five Cats", "K_.Baked", "Cat Oracle"]; // now themes

const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

export default function Artworks() {
  const [medium, setMedium] = useState("All");
  const [category, setCategory] = useState("All");
  const [themesChecked, setThemesChecked] = useState([]);
  const [modalArt, setModalArt] = useState(null);
  const [shuffled] = useState(() => shuffleArray(artworksData));

  const toggleTheme = (theme) =>
    setThemesChecked((prev) =>
      prev.includes(theme) ? prev.filter((t) => t !== theme) : [...prev, theme]
    );

  const handleDropdownChange = (setter) => (e) => {
    setter(e.target.value);
    setThemesChecked([]); // reset theme filters when dropdown changes
  };

  const filtered = shuffled.filter((art) => {
    const m = art.medium?.map((x) => x.toLowerCase()) ?? [];
    const c = art.categories ?? [];
    const t = art.theme ?? [];

    const mediumOK = medium === "All" || m.includes(medium.toLowerCase());
    const categoryOK = category === "All" || c.includes(category);
    const themeOK =
      themesChecked.length === 0 ||
      themesChecked.some((th) => t.includes(th));

    return mediumOK && categoryOK && themeOK;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-6">🎨 Art Gallery</h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
        A collection of story-rich visual works in digital, watercolor, and more.
      </p>

      {/* Dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* Medium Dropdown */}
        <select
          value={medium}
          onChange={handleDropdownChange(setMedium)}
          className="border px-3 py-2 rounded"
        >
          {mediums.map((m) => (
            <option key={m} value={m}>Medium: {m}</option>
          ))}
        </select>

        {/* Category Dropdown (now topic-based) */}
        <select
          value={category}
          onChange={handleDropdownChange(setCategory)}
          className="border px-3 py-2 rounded"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>Category: {cat}</option>
          ))}
        </select>
      </div>

      {/* Theme Checkboxes (now project groups) */}
      <div className="mb-10 flex flex-wrap gap-4">
        {themes.map((theme) => (
          <label key={theme} className="flex items-center space-x-2 text-sm break-words">
            <input
              type="checkbox"
              checked={themesChecked.includes(theme)}
              onChange={() => toggleTheme(theme)}
            />
            <span>{theme}</span>
          </label>
        ))}
      </div>

      {/* Artwork Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((art, index) => (
          <div
            key={index}
            className="group aspect-square border-2 border-gray-300 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer bg-white flex items-center justify-center overflow-hidden"
            onClick={() => setModalArt(art)}
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

      {/* Modal */}
      {modalArt && (
        <Modal artwork={modalArt} onClose={() => setModalArt(null)} />
      )}
    </div>
  );
}
