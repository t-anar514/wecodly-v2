import React from "react";
import styled from "styled-components";

const Card = ({ img, title, desc, href }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
      <img src={img || ""} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white truncate">{title}</h3>
        <p className="text-sm text-gray-400 mt-2 line-clamp-2">{desc}</p>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <button className="mt-4 text-sm text-[#8857F6] hover:underline">
            Read More
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
