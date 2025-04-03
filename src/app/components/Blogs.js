"use client";

import React, { useState, useEffect } from "react";
import BlogsOne from "../components/BlogsOne";
import BlogCard from "../components/BlogCard";
export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/5a5f2d81-a312-499b-ac05-b3c266e42281"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setPosts(data.articles);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10">
      <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {posts.map((post, index) => (
          <BlogCard
            key={index}
            img={post.urlToImage || ""}
            title={post.title || "Untitled"}
            desc={post.description || "No description available"}
            href={post.url}
          />
        ))}
      </div>
    </div>
  );
}
