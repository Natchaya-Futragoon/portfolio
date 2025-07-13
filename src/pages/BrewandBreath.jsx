import React, { useState } from "react";
import posts from "../data/blogPosts.json"; // Create this JSON file
import BlogPostCard from "../components/BlogPostCard"; // Optional: component for styling

const categories = ["All", "Body", "Mind", "Spirit", "Creative", "Life", "Knowledge"];

const BrewAndBreathe = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = posts.filter((post) =>
    selectedCategory === "All" ? true : post.categories.includes(selectedCategory)
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">🍵 Brew & Breathe</h1>
      <p className="text-center text-gray-600 mb-10">
        Brew & Breathe is where I collect my soft rituals — post-pilates tea, quiet dives between UX tasks, drawing breaks, and small stories from the quiet side of life.
        <br />
        It’s my way of diving more deep — into presence, beauty, and thought — and practicing the art of pausing, sipping, and noticing… for the mind, body, and imagination.
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Posts */}
      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BrewAndBreathe;
