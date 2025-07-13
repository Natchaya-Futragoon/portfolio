import React, { useState, useRef } from "react";
import { FaSearchPlus, FaSearchMinus } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Moved here

const ArtworkModal = ({ artwork, onClose }) => {
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const isVideo = artwork.filename.toLowerCase().endsWith(".mp4");

  const handleMouseMove = (e) => {
    if (!zoom || !imgRef.current) return;

    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.pageX - rect.left - window.scrollX) / rect.width) * 100;
    const y = ((e.pageY - rect.top - window.scrollY) / rect.height) * 100;
    setPosition({ x, y });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full overflow-hidden">
        <div className="relative" onMouseMove={handleMouseMove}>
          {isVideo ? (
            <video
              src={`/images/artworks/${artwork.filename}`}
              className="w-full max-h-[70vh] object-contain bg-white"
              controls
              autoPlay
              loop
              muted
            />
          ) : (
            <img
              ref={imgRef}
              src={`/images/artworks/${artwork.filename}`}
              alt={artwork.title}
              className={`w-full max-h-[70vh] object-contain bg-white transition duration-200 ${
                zoom ? "cursor-zoom-in" : ""
              }`}
              style={
                zoom
                  ? {
                      transform: "scale(2)",
                      transformOrigin: `${position.x}% ${position.y}%`,
                    }
                  : { transform: "scale(1)" }
              }
            />
          )}

          {/* ✕ Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-white text-black border border-gray-300 rounded-full w-8 h-8 text-sm flex items-center justify-center hover:bg-gray-100"
          >
            ✕
          </button>

          {/* 🔍 Zoom Toggle */}
          {!isVideo && (
            <button
              onClick={() => setZoom((prev) => !prev)}
              className="absolute bottom-2 right-2 bg-white border border-gray-300 text-black p-2 rounded-full hover:bg-gray-100 shadow"
              title={zoom ? "Disable Zoom" : "Enable Zoom"}
            >
              {zoom ? <FaSearchMinus size={18} /> : <FaSearchPlus size={18} />}
            </button>
          )}
        </div>

        {/* Text Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{artwork.title}</h2>
          <p className="text-gray-700 mb-4">{artwork.description}</p>

          {artwork.medium && (
            <p className="text-sm text-gray-500">
              <strong>Medium:</strong> {artwork.medium.join(", ")}
            </p>
          )}

          {artwork.characterSlug && (
            <div className="mt-4">
              <Link
                to={`/characters/${artwork.characterSlug}`}
                className="inline-block text-sm bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full hover:bg-yellow-200 transition"
              >
                🔗 Explore {artwork.characterId}'s World →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtworkModal;
