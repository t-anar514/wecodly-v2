"use client";

import React from "react";
import BlogsOne from "../components/BlogsOne";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#1a1a1a] text-white px-4 sm:px-6 lg:px-8">
      <BlogsOne />
      <Blogs />
      <Footer />
    </div>
  );
}
