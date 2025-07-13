import React from "react";
import { Link } from "react-router-dom";

const BlogPostCard = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug}`}>
      <div className="border rounded-lg shadow hover:shadow-md p-4 transition bg-white">
        <img src={post.coverImage} alt={post.title} className="w-full h-48 object-cover rounded" />
        <h2 className="text-xl font-bold mt-3">{post.title}</h2>
        <p className="text-gray-600 text-sm mb-2">{post.date}</p>
        <p className="text-gray-700">{post.excerpt}</p>
      </div>
    </Link>
  );
};

export default BlogPostCard;
