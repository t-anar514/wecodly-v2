"use client";
import React, { useState, useEffect } from "react";
import CoursesOne from "../components/CoursesOne";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://dev.to/api/articles?username=");

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        console.log(data); // Check the structure of the response
        setPosts(data); // Use the correct structure here
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading)
    return <div className="text-center text-white">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="bg-[#1a1a1a] text-white">
      <CoursesOne />
      <div className="w-full h-full flex flex-col items-center py-8">
        {/* Grid Layout for Responsive Cards */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {posts.map((post, index) => (
            <CourseCard
              key={index}
              thumb={post.cover_image || ""}
              uImg={post.user.profile_image_90}
              uName={post.user.name}
              Title={post.title || "Untitled Course"}
              Desc={post.description || "No description available"}
              href={post.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
